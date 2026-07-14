# Lead Capture & Conversion Improvements — Design Spec

**Date:** 2026-07-14
**Branch:** fix/lead-capture
**Approach:** Approach A — all in-stack, single `/api/contact` route extended with `source`, `trade`, `phone` fields

---

## Problem Statement

The SwiftBuild homepage has a single conversion path: one hero CTA that routes to an external cal.com booking link. There is no email capture, no mid-page CTAs, no popup, no sticky mobile bar, and the contact form lacks a phone field. The problems section names pains without following up with a fix or a link. Several copy phrases use generic agency language that doesn't resonate with the trades audience.

---

## Goals

1. Add a second conversion path via an email-capture popup that feeds the same email + Google Sheets pipeline
2. Make mobile users a tap-to-call + tap-to-book bar
3. Add two mid-page CTAs so there are conversion opportunities between the hero and pricing
4. Make the problems section actionable — each pain gets a one-line fix and a link
5. Add a phone field to the contact form and extend the API to capture it
6. Swap generic copy for job-site language throughout the homepage

---

## Components

### 1. `LeadCapturePopup` (`components/LeadCapturePopup.tsx`)

**Trigger logic (client-side):**
- Fires at 55% scroll depth, measured via `window.scrollY / document.body.scrollHeight`
- Also fires on exit intent: `mouseleave` event when `event.clientY < 0`
- Fires at most once per session; guarded by `sessionStorage.getItem('popup_shown')`
- Does not fire if `sessionStorage.getItem('popup_dismissed')` is set

**Fields:**
- Name (text, required)
- Trade (select, required): Roofing / HVAC / Cleaning / Landscaping / Other
- Email (email, required)

**Headline:** "See what your customers see when they Google you."
**Subhead:** "Book a free audit call — no pitch, no commitment."
**CTA button label:** "Book My Free Audit"

**Submit flow:**
1. POST to `/api/contact` with `{ name, email, trade, source: "popup" }`
2. On success: set `sessionStorage.setItem('popup_shown', '1')`, redirect to `https://cal.com/swiftbuild/free-strategy-call`
3. On error: show inline error message, do not redirect

**Dismiss:**
- X button in top-right corner
- Click-outside (backdrop click) closes
- Both set `sessionStorage.setItem('popup_dismissed', '1')` and `popup_shown`

**Backdrop:** semi-transparent dark overlay, `z-index` above sticky bar, below nothing

**State exposed to siblings:** a React context or prop that sticky bar reads to hide itself while popup is open (see sticky bar section)

---

### 2. `StickyMobileBar` (`components/ui/StickyMobileBar.tsx`)

**Visibility:**
- Fixed bottom of viewport
- Shown only below `lg` breakpoint (matches existing `d-lg-none` pattern)
- Hidden via CSS class when `popupOpen` is true

**Buttons (side by side, equal width):**
- Left: "Call Now" → `href="tel:+17787513157"`
- Right: "Book Free Audit" → `href="https://cal.com/swiftbuild/free-strategy-call"`

**Placement in layout:** rendered in `app/layout.tsx` alongside `MobileMenu`, so it's available on every page

**z-index:** sits below the popup backdrop, above page content

**Padding offset:** the page body gets `padding-bottom` on mobile to prevent the sticky bar from covering page content

---

### 3. Mid-Page CTAs (inline in `app/page.tsx`)

**CTA 1 — After problems band, before `<ServicesSection />`:**

```
"Every missed call is a job someone else booked.
We fix that with automated follow-up that runs 24/7."
[Book Your Free Audit →]  ← triggers popup (dispatches a custom event the popup listens to)
```

**CTA 2 — After `<TestimonialsSection />`, before `<PricingSection />`:**

Centered band, minimal:
```
"Ready to stay booked?"
[Book Your Free Audit →]  ← same popup trigger
```

**Popup trigger from CTAs:** Since `app/page.tsx` is a server component, the CTA buttons must be extracted into a small `'use client'` component (`components/ui/AuditCtaButton.tsx`). On click it checks `sessionStorage.getItem('popup_dismissed')`: if not dismissed it dispatches `CustomEvent('open-lead-popup')` on `window`; if dismissed it navigates to cal.com directly. `LeadCapturePopup` listens for `open-lead-popup` and opens regardless of scroll/exit-intent guards.

**Popup ↔ sticky bar communication:** When the popup opens/closes, it dispatches `CustomEvent('popup-state-change', { detail: { open: true/false } })`. `StickyMobileBar` listens for this and adds/removes a `hidden` class.

---

### 4. Contact Form & API Changes

**`components/ContactForm.tsx`:**
- Add Phone field between Email and Company rows
- `type="tel"`, name="phone", placeholder="Your phone number", optional (not required)
- Collect in `handleSubmit` and include in POST body

**`app/api/contact/route.ts`:**
- Accept additional fields: `phone`, `trade`, `source`
- No validation required on optional fields; include them in email body and sheet row if present
- Sheet columns expand from 5 → 8: `Timestamp | Source | Name | Email | Phone | Trade | Company | Message`
- Update `appendToGoogleSheet` row array to match new column order
- Update email HTML template to include phone, trade, source rows

---

### 5. Copy Changes (`app/page.tsx`)

| Location | Old | New |
|---|---|---|
| Who We Are paragraph | "We combine technical expertise with strategic vision to transform your digital presence into a high-performance engine…" | "We build websites, SEO, and automations that book jobs, collect payments, and get you off the phone — so you can focus on the work that pays." |
| Problems band — Missed calls desc | "Every missed call after 6pm is a job someone else booked." | Keep headline. Add fix line: "We route after-hours inquiries to an automated follow-up so no lead falls through." |
| Problems band — Cold quotes desc | "Estimates sit in inboxes while the guy who called back first wins." | Keep headline. Add fix line: "We trigger automatic quote follow-ups so you're always the first to respond." |
| Problems band — Manual chaos desc | "Scheduling in your head, dispatch over text, invoices at midnight." | Keep headline. Add fix line: "We connect your calendar, dispatch, and invoicing into one automated flow." |

No other copy changes — stays focused on the homepage and avoids touching service pages.

---

## Data Flow

```
Popup submit
  → POST /api/contact { source:"popup", name, email, trade }
  → nodemailer email to info@swiftbuild.io
  → Google Sheets append (Sheet1, columns A:H)
  → redirect to cal.com

Contact form submit
  → POST /api/contact { source:"contact", name, email, phone, company, message }
  → nodemailer email
  → Google Sheets append (Sheet1, columns A:H)

CTA button (popup not dismissed)
  → dispatches CustomEvent('open-lead-popup') on window
  → LeadCapturePopup opens

CTA button (popup dismissed)
  → href to cal.com directly
```

---

## Files Changed

| File | Change |
|---|---|
| `components/LeadCapturePopup.tsx` | New component |
| `components/ui/StickyMobileBar.tsx` | New component |
| `app/layout.tsx` | Add `<LeadCapturePopup />` and `<StickyMobileBar />` |
| `components/ui/AuditCtaButton.tsx` | New client component — CTA button that triggers popup or cal.com |
| `app/page.tsx` | Add mid-page CTAs (using AuditCtaButton), copy fixes |
| `components/ContactForm.tsx` | Add phone field |
| `app/api/contact/route.ts` | Accept phone, trade, source; update sheet columns |

---

## Out of Scope

- Email automation sequences (future)
- A/B testing popup variants
- Analytics events / conversion tracking
- Changes to service pages or niche landing pages
- The free audit video asset
