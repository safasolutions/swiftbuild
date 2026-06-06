import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export const dynamic = 'force-dynamic'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

async function appendToGoogleSheet(row: string[]) {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
  const key = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
  const sheetId = process.env.GOOGLE_SHEET_ID

  if (!email || !key || !sheetId) {
    console.warn('[Google Sheets] Missing env vars — skipping sheet append.')
    return
  }

  const auth = new google.auth.JWT({
    email: email,
    key: key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A:E', // Columns: Timestamp | Name | Email | Company | Message
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  })
}

// ---------------------------------------------------------------------------
// POST /api/contact
// ---------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message } = body as {
      name?: string
      email?: string
      company?: string
      message?: string
    }

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return Response.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      )
    }

    // Basic email format check
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const recipient = process.env.CONTACT_EMAIL || 'info@swiftbuild.io'

    // ---- Send email via Nodemailer ----
    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"SwiftBuild Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || '—'}`,
        '',
        `Message:`,
        message,
      ].join('\n'),
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:600;">Name</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;font-weight:600;">Company</td><td style="padding:8px;">${company || '—'}</td></tr>
        </table>
        <h3 style="margin-top:24px;">Message</h3>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    })

    // ---- Append to Google Sheet ----
    try {
      await appendToGoogleSheet([
        new Date().toISOString(),
        name,
        email,
        company || '',
        message,
      ])
    } catch (sheetErr) {
      // Log but don't fail the request — email already sent
      console.error('[Google Sheets] Failed to append row:', sheetErr)
    }

    return Response.json({ success: true })
  } catch (err: unknown) {
    console.error('[Contact API] Error:', err)
    const msg = err instanceof Error ? err.message : 'Internal server error'
    return Response.json({ error: msg }, { status: 500 })
  }
}
