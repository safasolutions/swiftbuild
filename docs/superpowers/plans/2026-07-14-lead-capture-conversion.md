# Lead Capture & Conversion Improvements — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a lead-capture popup, sticky mobile bar, mid-page CTAs, phone field, and copy fixes to the SwiftBuild homepage to turn a single conversion path into a multi-touchpoint funnel.

**Architecture:** All leads flow through the existing `/api/contact` route, extended with `source`, `trade`, and `phone` fields. A client-side popup component handles scroll/exit-intent triggering and cross-component state via `CustomEvent` on `window`. New components are wired into `app/layout.tsx` so they're available on every page.

**Tech Stack:** Next.js 16.2.4 · React 19.2.4 · TypeScript · Nodemailer · Google Sheets API · No test framework (use curl + manual browser verification)

## Global Constraints

- No new npm dependencies — everything must use what's already installed
- `'use client'` required on any component that uses `useState`, `useEffect`, `sessionStorage`, or `window`
- Phone: `+17787513157` · Cal.com: `https://cal.com/swiftbuild/free-strategy-call`
- Sheet columns after this change: `Timestamp | Source | Name | Email | Phone | Trade | Company | Message` (A:H)
- Existing `contact-form-input` and `contact-form-label` CSS classes must be used on all new form fields — do not introduce new CSS classes for form elements
- All existing `effectFade fadeUp` animation classes must be preserved on elements that already have them

---

## File Map

| File | Status | Responsibility |
|---|---|---|
| `app/api/contact/route.ts` | Modify | Accept `phone`, `trade`, `source`; update sheet + email |
| `components/ContactForm.tsx` | Modify | Add phone field between Email and Company |
| `components/LeadCapturePopup.tsx` | Create | Scroll/exit-intent popup with name + trade + email |
| `components/ui/StickyMobileBar.tsx` | Create | Fixed mobile bottom bar: tap-to-call + tap-to-book |
| `components/ui/AuditCtaButton.tsx` | Create | Client CTA button: triggers popup or falls back to cal.com |
| `app/layout.tsx` | Modify | Mount `LeadCapturePopup` and `StickyMobileBar` |
| `app/page.tsx` | Modify | Add 2 mid-page CTAs + targeted copy fixes |

---

### Task 1: Extend `/api/contact` — accept phone, trade, source

**Files:**
- Modify: `app/api/contact/route.ts`

**Interfaces:**
- Produces: API accepts `{ name, email, message, phone?, trade?, company?, source? }`. Sheet row order: `[timestamp, source, name, email, phone, trade, company, message]`. Used by Tasks 2 and 3.

- [ ] **Step 1: Verify current API only logs 5 columns**

  Start the dev server (`npm run dev`) then run:
  ```bash
  curl -s -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test","email":"test@example.com","message":"hello","phone":"778-000-0000","source":"test"}' \
    | cat
  ```
  Expected: `{"success":true}` — but the sheet will only have 5 columns (phone and source are silently ignored). Confirm this is the current behaviour before changing anything.

- [ ] **Step 2: Update the route to accept and log all fields**

  Replace `app/api/contact/route.ts` with:

  ```typescript
  import nodemailer from 'nodemailer'
  import { google } from 'googleapis'

  export const dynamic = 'force-dynamic'

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

      if (!name?.trim() || !email?.trim()) {
        return Response.json(
          { error: 'Name and email are required.' },
          { status: 400 },
        )
      }

      if (source !== 'popup' && !message?.trim()) {
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
        subject: `New ${source || 'contact'} submission from ${name}`,
        text: [
          `Source: ${source || '—'}`,
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
          <h2>New Submission — ${source || 'contact'}</h2>
          <table style="border-collapse:collapse;font-family:sans-serif;">
            <tr><td style="padding:8px;font-weight:600;">Source</td><td style="padding:8px;">${source || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:600;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px;font-weight:600;">Email</td><td style="padding:8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:600;">Phone</td><td style="padding:8px;">${phone || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:600;">Trade</td><td style="padding:8px;">${trade || '—'}</td></tr>
            <tr><td style="padding:8px;font-weight:600;">Company</td><td style="padding:8px;">${company || '—'}</td></tr>
          </table>
          <h3 style="margin-top:24px;">Message</h3>
          <p style="white-space:pre-wrap;">${message || '—'}</p>
        `,
      })

      try {
        await appendToGoogleSheet([
          new Date().toISOString(),
          source || '',
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
  ```

- [ ] **Step 3: Verify the API accepts extended fields**

  ```bash
  curl -s -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Jane Roofer","email":"jane@example.com","trade":"Roofing","source":"popup"}' \
    | cat
  ```
  Expected: `{"success":true}`

  Also verify popup source skips the message requirement:
  ```bash
  curl -s -X POST http://localhost:3000/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Jane","email":"jane@example.com","source":"contact"}' \
    | cat
  ```
  Expected: `{"error":"Message is required."}`

- [ ] **Step 4: Commit**

  ```bash
  git add app/api/contact/route.ts
  git commit -m "feat: extend contact API with phone, trade, source fields"
  ```

---

### Task 2: Add phone field to ContactForm

**Files:**
- Modify: `components/ContactForm.tsx`

**Interfaces:**
- Consumes: `/api/contact` from Task 1 — accepts `phone` field now
- Produces: form submits `{ name, email, phone, company, message, source: 'contact' }`

- [ ] **Step 1: Open the browser to the contact form**

  Navigate to `http://localhost:3000/#contact`. Confirm the form currently has Name, Email, Company, Message — no phone field.

- [ ] **Step 2: Add phone field and source to ContactForm**

  In `components/ContactForm.tsx`, make these two changes:

  **Change 1** — add `phone` to the collected data in `handleSubmit`:
  ```typescript
  const data = {
    name: (form.elements.namedItem('name') as HTMLInputElement).value,
    email: (form.elements.namedItem('email') as HTMLInputElement).value,
    phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    company: (form.elements.namedItem('company') as HTMLInputElement).value,
    message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    source: 'contact',
  }
  ```

  **Change 2** — add the Phone fieldset between the email/name row and the Company fieldset. Replace the block that currently ends with the Company fieldset:

  ```tsx
  <div
    className="grid-collapse-sm"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 16,
      marginBottom: 16,
    }}
  >
    <fieldset className="m-0">
      <label className="contact-form-label">Name</label>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        className="contact-form-input"
      />
    </fieldset>
    <fieldset className="m-0">
      <label className="contact-form-label">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Your email"
        required
        className="contact-form-input"
      />
    </fieldset>
  </div>

  <div
    className="grid-collapse-sm"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: 16,
      marginBottom: 16,
    }}
  >
    <fieldset className="m-0">
      <label className="contact-form-label">Phone</label>
      <input
        type="tel"
        name="phone"
        placeholder="Your phone number"
        className="contact-form-input"
      />
    </fieldset>
    <fieldset className="m-0">
      <label className="contact-form-label">Company</label>
      <input
        type="text"
        name="company"
        placeholder="Your company"
        className="contact-form-input"
      />
    </fieldset>
  </div>
  ```

  Remove the now-replaced Company fieldset block (the `<fieldset className="m-0 mb-16">` that was standalone).

- [ ] **Step 3: Verify in browser**

  Reload `http://localhost:3000/#contact`. The form should now show Name + Email on row 1, Phone + Company on row 2, then Message. Fill all fields and submit. Check the dev server console — the API call should succeed with `{"success":true}`.

- [ ] **Step 4: Commit**

  ```bash
  git add components/ContactForm.tsx
  git commit -m "feat: add phone field to contact form"
  ```

---

### Task 3: Build LeadCapturePopup component

**Files:**
- Create: `components/LeadCapturePopup.tsx`

**Interfaces:**
- Consumes: `/api/contact` from Task 1 with `{ name, email, trade, source: 'popup' }`
- Produces:
  - Listens for `CustomEvent('open-lead-popup')` on `window` — opens popup
  - Dispatches `CustomEvent('popup-state-change', { detail: { open: boolean } })` on `window` whenever open state changes — consumed by Task 4
  - sessionStorage keys: `popup_shown` (set on first trigger), `popup_dismissed` (set on close/dismiss)

- [ ] **Step 1: Verify the component slot exists in layout**

  Check `app/layout.tsx` — confirm there is no existing `LeadCapturePopup` import. This step confirms we're not duplicating.

- [ ] **Step 2: Create the component**

  Create `components/LeadCapturePopup.tsx`:

  ```tsx
  'use client'

  import { useState, useEffect, useRef, FormEvent } from 'react'

  export default function LeadCapturePopup() {
    const [open, setOpen] = useState(false)
    const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
    const [errorMsg, setErrorMsg] = useState('')
    const triggered = useRef(false)

    // Dispatch popup state to StickyMobileBar whenever open changes
    useEffect(() => {
      window.dispatchEvent(new CustomEvent('popup-state-change', { detail: { open } }))
    }, [open])

    useEffect(() => {
      function tryOpen() {
        if (triggered.current || sessionStorage.getItem('popup_shown')) return
        triggered.current = true
        sessionStorage.setItem('popup_shown', '1')
        setOpen(true)
      }

      function onScroll() {
        const total = document.body.scrollHeight - window.innerHeight
        if (total > 0 && window.scrollY / total >= 0.55) tryOpen()
      }

      function onMouseLeave(e: MouseEvent) {
        if (e.clientY < 0) tryOpen()
      }

      // CTA buttons dispatch this to open regardless of scroll/exit guards,
      // but respect the dismissed flag
      function onOpenEvent() {
        if (sessionStorage.getItem('popup_dismissed')) return
        setOpen(true)
      }

      window.addEventListener('scroll', onScroll, { passive: true })
      document.addEventListener('mouseleave', onMouseLeave)
      window.addEventListener('open-lead-popup', onOpenEvent)

      return () => {
        window.removeEventListener('scroll', onScroll)
        document.removeEventListener('mouseleave', onMouseLeave)
        window.removeEventListener('open-lead-popup', onOpenEvent)
      }
    }, [])

    function dismiss() {
      sessionStorage.setItem('popup_dismissed', '1')
      sessionStorage.setItem('popup_shown', '1')
      setOpen(false)
    }

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault()
      setStatus('loading')
      setErrorMsg('')

      const form = e.currentTarget
      const data = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        trade: (form.elements.namedItem('trade') as HTMLSelectElement).value,
        source: 'popup',
      }

      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if (!res.ok) {
          const json = await res.json()
          setStatus('error')
          setErrorMsg(json.error || 'Something went wrong.')
          return
        }

        sessionStorage.setItem('popup_shown', '1')
        window.location.href = 'https://cal.com/swiftbuild/free-strategy-call'
      } catch {
        setStatus('error')
        setErrorMsg('Network error — please try again.')
      }
    }

    if (!open) return null

    return (
      <>
        {/* Backdrop */}
        <div
          onClick={dismiss}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.6)',
            zIndex: 9998,
          }}
        />
        {/* Modal */}
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="popup-heading"
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 9999,
            background: '#fff',
            borderRadius: 24,
            padding: 40,
            width: 'calc(100% - 32px)',
            maxWidth: 480,
            boxShadow: '0 24px 80px rgba(0,0,0,0.2)',
          }}
        >
          <button
            onClick={dismiss}
            aria-label="Close popup"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: 20,
              color: 'var(--neutral-400)',
              lineHeight: 1,
              padding: 4,
            }}
          >
            <i className="icon icon-close" />
          </button>

          <div className="fw-semibold text-brand mb-8" style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Free Audit
          </div>
          <h3 id="popup-heading" className="fw-semibold mb-12" style={{ fontSize: 26, lineHeight: '34px', letterSpacing: '-0.02em' }}>
            See what your customers see when they Google you.
          </h3>
          <p className="text-secondary mb-24" style={{ fontSize: 14, lineHeight: '22px' }}>
            Book a free audit call — no pitch, no commitment.
          </p>

          <form onSubmit={handleSubmit}>
            <fieldset className="m-0 mb-16">
              <label className="contact-form-label">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="contact-form-input"
              />
            </fieldset>

            <fieldset className="m-0 mb-16">
              <label className="contact-form-label">Trade</label>
              <select name="trade" required className="contact-form-input">
                <option value="">Select your trade</option>
                <option value="Roofing">Roofing</option>
                <option value="HVAC">HVAC</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Landscaping">Landscaping</option>
                <option value="Other">Other</option>
              </select>
            </fieldset>

            <fieldset className="m-0 mb-24">
              <label className="contact-form-label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="contact-form-input"
              />
            </fieldset>

            <button
              type="submit"
              className="tf-btn w-100"
              style={{ background: 'var(--brand)' }}
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Booking…' : 'Book My Free Audit →'}
            </button>

            {status === 'error' && (
              <div className="text-center mt-12 fw-semibold" style={{ fontSize: 14, color: 'var(--brand)' }}>
                {errorMsg}
              </div>
            )}
          </form>
        </div>
      </>
    )
  }
  ```

- [ ] **Step 3: Verify the component builds**

  The component isn't wired into the layout yet. Run TypeScript check:
  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors on the new file.

- [ ] **Step 4: Commit**

  ```bash
  git add components/LeadCapturePopup.tsx
  git commit -m "feat: add LeadCapturePopup component"
  ```

---

### Task 4: Build StickyMobileBar component

**Files:**
- Create: `components/ui/StickyMobileBar.tsx`

**Interfaces:**
- Consumes: `CustomEvent('popup-state-change', { detail: { open: boolean } })` from Task 3
- Produces: nothing — renders only; wired in layout in Task 6

- [ ] **Step 1: Create the component**

  Create `components/ui/StickyMobileBar.tsx`:

  ```tsx
  'use client'

  import { useEffect, useState } from 'react'

  export default function StickyMobileBar() {
    const [hidden, setHidden] = useState(false)

    useEffect(() => {
      function onPopupState(e: Event) {
        setHidden((e as CustomEvent<{ open: boolean }>).detail.open)
      }
      window.addEventListener('popup-state-change', onPopupState)
      return () => window.removeEventListener('popup-state-change', onPopupState)
    }, [])

    return (
      <div
        className="d-lg-none"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9990,
          display: hidden ? 'none' : 'flex',
          background: '#fff',
          borderTop: '1px solid #E4E4E7',
          padding: '8px 12px',
          gap: 8,
          paddingBottom: 'max(8px, env(safe-area-inset-bottom))',
        }}
      >
        <a
          href="tel:+17787513157"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '10px 0',
            borderRadius: 12,
            border: '1px solid #E4E4E7',
            background: 'var(--neutral-100)',
            color: 'var(--neutral-900)',
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          <i className="icon icon-tty-solid" style={{ fontSize: 15 }} />
          Call Now
        </a>
        <a
          href="https://cal.com/swiftbuild/free-strategy-call"
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '10px 0',
            borderRadius: 12,
            background: 'var(--brand)',
            color: '#fff',
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
          }}
        >
          Book Free Audit
        </a>
      </div>
    )
  }
  ```

- [ ] **Step 2: Add mobile body padding to prevent content being obscured**

  In `app/globals.css`, append:

  ```css
  @media (max-width: 991px) {
    body {
      padding-bottom: 72px;
    }
  }
  ```

  (The sticky bar is ~56px tall + 8px padding top/bottom = ~72px.)

- [ ] **Step 3: Verify TypeScript**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no new errors.

- [ ] **Step 4: Commit**

  ```bash
  git add components/ui/StickyMobileBar.tsx app/globals.css
  git commit -m "feat: add StickyMobileBar component"
  ```

---

### Task 5: Build AuditCtaButton component

**Files:**
- Create: `components/ui/AuditCtaButton.tsx`

**Interfaces:**
- Produces: `<AuditCtaButton className? style? label? />` — renders an `<a>` that either fires `CustomEvent('open-lead-popup')` or navigates to cal.com if dismissed. Used in Task 7.

- [ ] **Step 1: Create the component**

  Create `components/ui/AuditCtaButton.tsx`:

  ```tsx
  'use client'

  import { CSSProperties, MouseEvent } from 'react'

  interface AuditCtaButtonProps {
    label?: string
    className?: string
    style?: CSSProperties
  }

  export default function AuditCtaButton({
    label = 'Book Your Free Audit →',
    className = 'tf-btn',
    style = { background: 'var(--brand)' },
  }: AuditCtaButtonProps) {
    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
      if (sessionStorage.getItem('popup_dismissed')) return
      e.preventDefault()
      window.dispatchEvent(new CustomEvent('open-lead-popup'))
    }

    return (
      <a
        href="https://cal.com/swiftbuild/free-strategy-call"
        className={className}
        style={style}
        onClick={handleClick}
      >
        {label}
      </a>
    )
  }
  ```

- [ ] **Step 2: Verify TypeScript**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 3: Commit**

  ```bash
  git add components/ui/AuditCtaButton.tsx
  git commit -m "feat: add AuditCtaButton client component"
  ```

---

### Task 6: Wire popup and sticky bar into layout

**Files:**
- Modify: `app/layout.tsx`

**Interfaces:**
- Consumes: `LeadCapturePopup` from Task 3, `StickyMobileBar` from Task 4

- [ ] **Step 1: Add imports to layout**

  In `app/layout.tsx`, add two imports after the existing component imports:

  ```tsx
  import LeadCapturePopup from '@/components/LeadCapturePopup'
  import StickyMobileBar from '@/components/ui/StickyMobileBar'
  ```

- [ ] **Step 2: Mount both components in the body**

  In `app/layout.tsx`, add both components after the closing `</main>` tag and before `<MobileMenu />`:

  Replace:
  ```tsx
        </main>
        <MobileMenu />
  ```
  With:
  ```tsx
        </main>
        <LeadCapturePopup />
        <StickyMobileBar />
        <MobileMenu />
  ```

- [ ] **Step 3: Verify popup appears at scroll depth**

  Navigate to `http://localhost:3000/`. Open DevTools console. Run:
  ```javascript
  sessionStorage.clear()
  ```
  Then scroll to 55% of the page. The popup should appear with the heading "See what your customers see when they Google you."

- [ ] **Step 4: Verify sticky bar appears on mobile**

  In DevTools, switch to a mobile viewport (e.g. iPhone 12, 390px wide). The sticky bar should appear at the bottom with "Call Now" and "Book Free Audit" buttons. Switch back to desktop — the bar should disappear.

- [ ] **Step 5: Verify popup hides sticky bar**

  On mobile viewport, manually open the popup by running in console:
  ```javascript
  window.dispatchEvent(new CustomEvent('open-lead-popup'))
  ```
  The sticky bar should disappear. Close the popup (X button) — the sticky bar should reappear.

- [ ] **Step 6: Commit**

  ```bash
  git add app/layout.tsx
  git commit -m "feat: mount LeadCapturePopup and StickyMobileBar in layout"
  ```

---

### Task 7: Add mid-page CTAs and copy fixes to homepage

**Files:**
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: `AuditCtaButton` from Task 5

- [ ] **Step 1: Add AuditCtaButton import**

  At the top of `app/page.tsx`, add:
  ```tsx
  import AuditCtaButton from '@/components/ui/AuditCtaButton'
  ```

- [ ] **Step 2: Fix the Who We Are paragraph copy**

  Find this text in `app/page.tsx`:
  ```tsx
  We combine technical expertise with strategic vision to transform your digital presence into a high-performance engine. As your reliable strategic partner, we are committed to building long-term value through engineering excellence and consistent delivery.
  ```
  Replace with:
  ```tsx
  We build websites, SEO, and automations that book jobs, collect payments, and get you off the phone — so you can focus on the work that pays.
  ```

- [ ] **Step 3: Add fix lines to each problems band item**

  Find the three `problems-band-item` divs and add a fix line after each `problem-desc` div.

  **Missed calls item** — replace:
  ```tsx
  <div className="problem-desc">Every missed call after 6pm is a job someone else booked.</div>
  ```
  With:
  ```tsx
  <div className="problem-desc">Every missed call after 6pm is a job someone else booked.</div>
  <div className="fw-semibold" style={{ fontSize: 13, marginTop: 6, color: 'var(--brand)' }}>We route after-hours inquiries to automated follow-up so no lead falls through.</div>
  ```

  **Cold quotes item** — replace:
  ```tsx
  <div className="problem-desc">Estimates sit in inboxes while the guy who called back first wins.</div>
  ```
  With:
  ```tsx
  <div className="problem-desc">Estimates sit in inboxes while the guy who called back first wins.</div>
  <div className="fw-semibold" style={{ fontSize: 13, marginTop: 6, color: 'var(--brand)' }}>We trigger automatic quote follow-ups so you&apos;re always first to respond.</div>
  ```

  **Manual chaos item** — replace:
  ```tsx
  <div className="problem-desc">Scheduling in your head, dispatch over text, invoices at midnight.</div>
  ```
  With:
  ```tsx
  <div className="problem-desc">Scheduling in your head, dispatch over text, invoices at midnight.</div>
  <div className="fw-semibold" style={{ fontSize: 13, marginTop: 6, color: 'var(--brand)' }}>We connect your calendar, dispatch, and invoicing into one automated flow.</div>
  ```

- [ ] **Step 4: Add CTA 1 — after the problems band, before ServicesSection**

  Find:
  ```tsx
  {/* /section-who-we-are */}
  {/* section-services */}
  <ServicesSection />
  ```
  Replace with:
  ```tsx
  {/* /section-who-we-are */}

  {/* mid-page CTA 1 */}
  <div className="container effectFade fadeUp" style={{ paddingTop: 48, paddingBottom: 0, textAlign: 'center' }}>
    <p className="fw-semibold mb-4" style={{ fontSize: 18, letterSpacing: '-0.01em' }}>
      Every missed call is a job someone else booked.
    </p>
    <p className="text-secondary mb-20" style={{ fontSize: 15 }}>
      We fix that — automated follow-up, 24/7.
    </p>
    <AuditCtaButton />
  </div>
  {/* /mid-page CTA 1 */}

  {/* section-services */}
  <ServicesSection />
  ```

- [ ] **Step 5: Add CTA 2 — after TestimonialsSection, before PricingSection**

  Find:
  ```tsx
  {/* section-testimonials */}
  <TestimonialsSection />
  {/* /section-testimonials */}
  </div>

  {/* section-statistic
  ```
  The `</div>` closes the `box-white` div. Add CTA 2 before that close:

  Find:
  ```tsx
  {/* /section-testimonials */}
          </div>
  ```
  Replace with:
  ```tsx
  {/* /section-testimonials */}

          {/* mid-page CTA 2 */}
          <div className="effectFade fadeUp" style={{ paddingTop: 48, paddingBottom: 16, textAlign: 'center' }}>
            <div className="container">
              <p className="fw-semibold mb-20" style={{ fontSize: 22, letterSpacing: '-0.01em' }}>
                Ready to stay booked?
              </p>
              <AuditCtaButton />
            </div>
          </div>
          {/* /mid-page CTA 2 */}
          </div>
  ```

- [ ] **Step 6: Verify the page in browser**

  Navigate to `http://localhost:3000/`. Check:
  - Who We Are paragraph shows the new copy
  - Each problems item shows the fix line in brand color beneath it
  - A CTA band with "Every missed call is a job someone else booked" + button appears after the problems section
  - A "Ready to stay booked?" CTA band appears above the pricing section
  - Clicking an AuditCtaButton (after running `sessionStorage.clear()` in console) triggers the popup

- [ ] **Step 7: Verify TypeScript**

  ```bash
  npx tsc --noEmit
  ```
  Expected: no errors.

- [ ] **Step 8: Commit**

  ```bash
  git add app/page.tsx
  git commit -m "feat: add mid-page CTAs and copy fixes to homepage"
  ```

---

## End-to-End Verification Checklist

Before declaring done, run through this manually in a browser with `sessionStorage.clear()` between each flow:

- [ ] **Popup — scroll trigger:** Scroll past 55% of homepage → popup appears
- [ ] **Popup — exit intent:** Quickly move mouse out of viewport upward → popup appears
- [ ] **Popup — fill and submit:** Fill name + trade + email → click "Book My Free Audit" → redirects to cal.com
- [ ] **Popup — dismiss:** Close popup with X → popup doesn't reappear on scroll or exit intent in same session
- [ ] **Popup — dismissed CTA:** After dismissing, click a mid-page CTA button → navigates directly to cal.com (no popup)
- [ ] **Popup — CTA trigger:** With clean session, click mid-page CTA → popup opens
- [ ] **Sticky bar — mobile:** Resize to 390px → "Call Now" and "Book Free Audit" appear at bottom
- [ ] **Sticky bar — desktop:** Resize to 1200px → sticky bar hidden
- [ ] **Sticky bar — popup interaction:** On mobile, open popup → sticky bar hides; close popup → sticky bar reappears
- [ ] **Contact form:** Submit form with phone number → no errors, `{"success":true}` in network tab
- [ ] **Copy:** "Who We Are" paragraph shows new text, each problem has brand-coloured fix line
