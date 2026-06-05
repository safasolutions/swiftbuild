'use client'

import { useState } from 'react'
import { NICHE_SLUGS, SERVICE_SLUGS, getNiche, getService } from '@/lib/landing-content'
import Logo from '@/components/ui/Logo'

const niches = NICHE_SLUGS.map(s => getNiche(s)!)
const services = SERVICE_SLUGS.map(s => getService(s)!)

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState<'services' | 'trades' | null>(null)

  const toggle = (menu: 'services' | 'trades') =>
    setOpenMenu(prev => (prev === menu ? null : menu))

  return (
    <div className="offcanvas-menu">
      <div className="offcanvas-content">
        <div className="container h-100">
          <div className="offcanvas-content_wrapin">
            <div className="canvas_head">
              <a href="/" className="logo-site">
                <Logo height={36} />
              </a>
              <div className="btn-mobile-menu close-mb-menu text-caption link">
                <i className="icon icon-close"></i>
                CLOSE
              </div>
            </div>
            <div className="canvas_center">
              <ul className="nav-ul-mb" id="mobile-menu">
                <li>
                  <div className="item">
                    <a href="/" className="mb-menu-link text-display-1">
                      <span className="text">Home</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/services" className="mb-menu-link text-display-1">
                      <span className="text">Services</span>
                    </a>
                  </div>
                </li>

                {/* Services accordion */}
                <li>
                  <div className="item has-sub-menu">
                    <button
                      className={`mb-menu-link text-display-1 ${openMenu === 'services' ? '' : 'collapsed'}`}
                      onClick={() => toggle('services')}
                      style={{ background: 'none', border: 'none', width: '100%', textAlign: 'right', cursor: 'pointer', padding: 0 }}
                    >
                      <span className="text">Services</span>
                      <span className="ic">
                        <i className="icon icon-angle-down-solid" style={{ fontSize: '20px', color: 'var(--neutral-400)', transition: 'transform 0.3s', transform: openMenu === 'services' ? 'rotate(180deg)' : 'none', display: 'inline-block' }} />
                      </span>
                    </button>
                    <div
                      style={{
                        overflow: 'hidden',
                        maxHeight: openMenu === 'services' ? '400px' : 0,
                        transition: 'max-height 0.35s ease',
                      }}
                    >
                      <ul className="sub-nav-menu" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
                        {services.map(svc => (
                          <li key={svc.slug} style={{ textAlign: 'right' }}>
                            <a
                              href={`/services/${svc.slug}`}
                              className="fw-semibold"
                              style={{ color: 'var(--neutral-300)', fontSize: '22px', lineHeight: '36px', display: 'block' }}
                            >
                              {svc.name}
                            </a>
                          </li>
                        ))}
                        <li style={{ textAlign: 'right', borderTop: '1px solid var(--neutral-700)', marginTop: '8px', paddingTop: '8px' }}>
                          <a
                            href="/services"
                            className="fw-semibold"
                            style={{ color: 'var(--brand)', fontSize: '18px', lineHeight: '32px' }}
                          >
                            View All Services →
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Trades accordion */}
                <li>
                  <div className="item has-sub-menu">
                    <button
                      className={`mb-menu-link text-display-1 ${openMenu === 'trades' ? '' : 'collapsed'}`}
                      onClick={() => toggle('trades')}
                      style={{ background: 'none', border: 'none', width: '100%', textAlign: 'right', cursor: 'pointer', padding: 0 }}
                    >
                      <span className="text">Trades</span>
                      <span className="ic">
                        <i className="icon icon-angle-down-solid" style={{ fontSize: '20px', color: 'var(--neutral-400)', transition: 'transform 0.3s', transform: openMenu === 'trades' ? 'rotate(180deg)' : 'none', display: 'inline-block' }} />
                      </span>
                    </button>
                    <div
                      style={{
                        overflow: 'hidden',
                        maxHeight: openMenu === 'trades' ? '260px' : 0,
                        transition: 'max-height 0.35s ease',
                      }}
                    >
                      <ul className="sub-nav-menu" style={{ paddingTop: '8px', paddingBottom: '8px' }}>
                        {niches.map(niche => (
                          <li key={niche.slug} style={{ textAlign: 'right' }}>
                            <a
                              href={`/${niche.slug}`}
                              className="fw-semibold"
                              style={{ color: 'var(--neutral-300)', fontSize: '22px', lineHeight: '36px', display: 'block' }}
                            >
                              {niche.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="item">
                    <a href="/works" className="mb-menu-link text-display-1">
                      <span className="text">Works</span>
                    </a>
                  </div>
                </li>
                <li>
                  <div className="item">
                    <a href="/contact" className="mb-menu-link text-display-1">
                      <span className="text">Contact</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="canvas_foot">
              <div className="left">
                <a href="mailto:info@swiftbuild.io" className="text-caption text-neutral-200">info@swiftbuild.io</a>
                <p className="text-caption text-neutral-200">
                  CUP <span className="clock"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
