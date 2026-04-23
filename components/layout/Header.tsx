'use client'

import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (paths: string[]) =>
    paths.some(p => p === '/' ? pathname === '/' : pathname === p || pathname.startsWith(p + '/')) ? 'active' : ''

  return (
    <header className="tf-header header2">
      <div className="header-inner">
        <a href="/" className="logo-site">
          <img src="/assets/images/logo/logo.svg" alt="" height={40} style={{ width: 'auto' }} />
        </a>
        <div className="box-navigation">
          <ul className="nav-menu-main">
            <li className={`menu-item ${isActive(['/'])}`}>
              <a href="/" className={`item-link link1 ${isActive(['/'])}`}>Home</a>
            </li>
            <li className={`menu-item ${isActive(['/about'])}`}>
              <a href="/about" className={`item-link link1 ${isActive(['/about'])}`}>About</a>
            </li>
            <li className={`menu-item ${isActive(['/services'])}`}>
              <a href="/services" className={`item-link link1 ${isActive(['/services'])}`}>Services</a>
            </li>
            <li className={`menu-item ${isActive(['/works'])}`}>
              <a href="/works" className={`item-link link1 ${isActive(['/works'])}`}>Works</a>
            </li>
            <li className={`menu-item ${isActive(['/contact'])}`}>
              <a href="/contact" className={`item-link link1 ${isActive(['/contact'])}`}>Contact</a>
            </li>
          </ul>
        </div>
        <a href="/contact" className="tf-btn d-none d-lg-inline-flex" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          Start a Project
        </a>
        <a href="#" className="tf-btn open-mb-menu mobile-menu d-lg-none d-flex">
          <i className="icon icon-grip-lines-solid"></i>
        </a>
      </div>
    </header>
  )
}
