'use client'

import { usePathname } from 'next/navigation'
import { NICHE_SLUGS, SERVICE_SLUGS, getNiche, getService } from '@/lib/landing-content'

const niches = NICHE_SLUGS.map(s => getNiche(s)!)
const services = SERVICE_SLUGS.map(s => getService(s)!)

export default function Header() {
  const pathname = usePathname()

  const isActive = (paths: string[]) =>
    paths.some(p => p === '/' ? pathname === '/' : pathname === p || pathname.startsWith(p + '/')) ? 'active' : ''

  const serviceActive = isActive(['/services'])
  const tradeActive = isActive(NICHE_SLUGS.map(s => `/${s}`))

  return (
    <header className="tf-header header2">
      <div className="header-inner" style={{ maxWidth: '980px' }}>
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

            {/* Services dropdown */}
            <li className={`menu-item has-child ${serviceActive}`}>
              <a href="/services" className={`item-link link1 ${serviceActive}`} style={{ gap: '5px' }}>
                Services
                <i className="icon icon-angle-down-solid" style={{ fontSize: '9px' }} />
              </a>
              <ul className="sub-menu" style={{ minWidth: '230px' }}>
                {services.map(svc => (
                  <li key={svc.slug}>
                    <a
                      href={`/services/${svc.slug}`}
                      className={`item-link link1 text-body-3 ${isActive([`/services/${svc.slug}`])}`}
                    >
                      {svc.name}
                    </a>
                  </li>
                ))}
                <li style={{ borderTop: '1px solid var(--neutral-200)', marginTop: '8px', paddingTop: '4px' }}>
                  <a href="/services" className="item-link link1 text-body-3 fw-semibold">
                    View All →
                  </a>
                </li>
              </ul>
            </li>

            {/* Trades dropdown */}
            <li className={`menu-item has-child ${tradeActive}`}>
              <a href="#" className={`item-link link1 ${tradeActive}`} style={{ gap: '5px' }}>
                Trades
                <i className="icon icon-angle-down-solid" style={{ fontSize: '9px' }} />
              </a>
              <ul className="sub-menu" style={{ minWidth: '190px' }}>
                {niches.map(niche => (
                  <li key={niche.slug}>
                    <a
                      href={`/${niche.slug}`}
                      className={`item-link link1 text-body-3 ${isActive([`/${niche.slug}`])}`}
                    >
                      {niche.name}
                    </a>
                  </li>
                ))}
              </ul>
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
