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
