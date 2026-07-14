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
