// @ts-nocheck
'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  /** Variant determines button/card styling context.
   *  - 'homepage': dark background (hero-1.jpg), white card
   *  - 'page': white background, bordered card
   */
  variant?: 'homepage' | 'page'
}

export default function ContactForm({ variant = 'homepage' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      source: 'contact',
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const json = await res.json()

      if (!res.ok) {
        setStatus('error')
        setErrorMsg(json.error || 'Something went wrong.')
        return
      }

      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
      setErrorMsg('Network error — please try again.')
    }
  }

  const cardClass =
    variant === 'page'
      ? 'effectFade fadeUp contact-form-panel'
      : 'contact-form-card effectFade fadeUp'

  const cardStyle =
    variant === 'page'
      ? { background: '#ffffff', border: '1px solid #E4E4E7', borderRadius: 24, padding: 40 }
      : undefined

  return (
    <form className={cardClass} style={cardStyle} onSubmit={handleSubmit}>
      <h3
        className="fw-semibold mb-24"
        style={{ fontSize: 24, lineHeight: '32px', letterSpacing: '-0.01em' }}
      >
        Send Us a Message
      </h3>

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

      <fieldset className="m-0 mb-20">
        <label className="contact-form-label">Message</label>
        <textarea
          name="message"
          placeholder="Tell us about your automation needs"
          required
          className="contact-form-input contact-form-textarea"
        />
      </fieldset>

      <button
        type="submit"
        className="tf-btn w-100"
        style={{ background: 'var(--brand)' }}
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Sending message...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <div
          className="text-center mt-12 fw-semibold"
          style={{ fontSize: 14, color: '#16a34a' }}
        >
          ✓ Message sent! We'll get back to you within 1-2 business days.
        </div>
      )}

      {status === 'error' && (
        <div
          className="text-center mt-12 fw-semibold"
          style={{ fontSize: 14, color: 'var(--brand)' }}
        >
          {errorMsg}
        </div>
      )}

      {status === 'idle' && (
        <div className="text-center text-secondary mt-12" style={{ fontSize: 13 }}>
          We&apos;ll get back to you within 1-2 business days.
        </div>
      )}
    </form>
  )
}
