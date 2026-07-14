import nodemailer from 'nodemailer'
import { google } from 'googleapis'

export const dynamic = 'force-dynamic'

function escHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

const VALID_SOURCES = ['popup', 'contact'] as const
type ValidSource = typeof VALID_SOURCES[number]

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
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
    email,
    key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  })

  const sheets = google.sheets({ version: 'v4', auth })

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A:H',
    valueInputOption: 'USER_ENTERED',
    requestBody: { values: [row] },
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, message, phone, trade, source } = body as {
      name?: string
      email?: string
      company?: string
      message?: string
      phone?: string
      trade?: string
      source?: string
    }

    const resolvedSource: ValidSource = VALID_SOURCES.includes(source as ValidSource)
      ? (source as ValidSource)
      : 'contact'

    if (!name?.trim() || !email?.trim()) {
      return Response.json(
        { error: 'Name and email are required.' },
        { status: 400 },
      )
    }

    if (resolvedSource !== 'popup' && !message?.trim()) {
      return Response.json(
        { error: 'Message is required.' },
        { status: 400 },
      )
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const recipient = process.env.CONTACT_EMAIL || 'info@swiftbuild.io'
    const transporter = createTransporter()

    await transporter.sendMail({
      from: `"SwiftBuild Contact" <${process.env.SMTP_USER}>`,
      to: recipient,
      replyTo: email,
      subject: `New ${resolvedSource.replace(/[\r\n]/g, '')} submission from ${name.replace(/[\r\n]/g, '')}`,
      text: [
        `Source: ${resolvedSource}`,
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `Trade: ${trade || '—'}`,
        `Company: ${company || '—'}`,
        '',
        `Message:`,
        message || '—',
      ].join('\n'),
      html: `
        <h2>New Submission — ${escHtml(resolvedSource)}</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;">
          <tr><td style="padding:8px;font-weight:600;">Source</td><td style="padding:8px;">${escHtml(resolvedSource)}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Name</td><td style="padding:8px;">${escHtml(name)}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Email</td><td style="padding:8px;"><a href="mailto:${escHtml(email)}">${escHtml(email)}</a></td></tr>
          <tr><td style="padding:8px;font-weight:600;">Phone</td><td style="padding:8px;">${escHtml(phone || '—')}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Trade</td><td style="padding:8px;">${escHtml(trade || '—')}</td></tr>
          <tr><td style="padding:8px;font-weight:600;">Company</td><td style="padding:8px;">${escHtml(company || '—')}</td></tr>
        </table>
        <h3 style="margin-top:24px;">Message</h3>
        <p style="white-space:pre-wrap;">${escHtml(message || '—')}</p>
      `,
    })

    try {
      await appendToGoogleSheet([
        new Date().toISOString(),
        resolvedSource,
        name,
        email,
        phone || '',
        trade || '',
        company || '',
        message || '',
      ])
    } catch (sheetErr) {
      console.error('[Google Sheets] Failed to append row:', sheetErr)
    }

    return Response.json({ success: true })
  } catch (err: unknown) {
    console.error('[Contact API] Error:', err)
    const msg = err instanceof Error ? err.message : 'Internal server error'
    return Response.json({ error: msg }, { status: 500 })
  }
}
