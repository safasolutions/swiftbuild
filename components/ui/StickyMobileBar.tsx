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
