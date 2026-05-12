'use client'

import { useState } from 'react'

export default function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="accordion-asked-item">
      <div className="accordion-asked-title">
        <button
          className={`accordion-button text-body-1 fw-semibold${open ? '' : ' collapsed'}`}
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          {q}
          <span className="right-icon" />
        </button>
      </div>
      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? '600px' : 0,
          transition: 'max-height 0.3s ease',
        }}
      >
        <div className="accordion-body">{a}</div>
      </div>
    </div>
  )
}
