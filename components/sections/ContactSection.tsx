import React from 'react'
import ContactForm from '@/components/ContactForm'

export default function ContactSection() {
  return (
    <div id="contact" style={{ paddingTop: 40, paddingBottom: 80, position: 'relative' }}>
      <div
        className="contact-bg"
        style={{
          position: 'absolute',
          inset: '0 16px',
          borderRadius: 40,
          backgroundImage: 'url(/assets/images/section/hero-1.jpg)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      />
      <div className="container contact-container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          className="grid-collapse-lg"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 24,
            alignItems: 'stretch',
          }}
        >
          {/* LEFT — Info panel */}
          <div
            className="effectFade fadeUp contact-info-panel"
            style={{
              background: 'transparent',
              borderRadius: 24,
              padding: 40,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div className="heading-section mb-24">
              <div className="heading-sub fw-semibold effectFade fadeUp" style={{ alignSelf: 'flex-start' }}>
                Contact
              </div>
            </div>
            <h3 className="fw-semibold mb-16" style={{ fontSize: 32, lineHeight: '40px', letterSpacing: '-0.02em' }}>
              Let&apos;s Make Your <br />Workflows Flow
            </h3>
            <p className="text-secondary mb-32" style={{ fontSize: 15, lineHeight: '24px' }}>
              Ready to save time and reduce busywork? Get in touch and let&apos;s discuss how we can help automate your business processes.
            </p>
            <div className="d-flex flex-column gap-24 mb-32">
              <div className="d-flex gap-16 align-items-start">
                <i className="icon icon-clipboard-check-solid text-brand" style={{ fontSize: 18, marginTop: 4 }}></i>
                <div>
                  <div className="fw-semibold mb-4">Book a Discovery Call</div>
                  <div className="text-secondary mb-12" style={{ fontSize: 14, lineHeight: '22px' }}>
                    Schedule a 30-minute call to discuss your needs and explore automation opportunities.
                  </div>
                  <a
                    href="https://cal.com/swiftbuild/free-strategy-call"
                    className="tf-btn"
                    style={{
                      background: 'var(--brand)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '8px 20px',
                      fontSize: '13px',
                      height: '36px',
                      borderRadius: '12px',
                      color: 'var(--neutral-100)',
                      fontWeight: 600,
                    }}
                  >
                    Book Call
                  </a>
                </div>
              </div>
              <div className="d-flex gap-16 align-items-start">
                <i className="icon icon-envelope-solid text-brand" style={{ fontSize: 18, marginTop: 4 }}></i>
                <div>
                  <div className="fw-semibold mb-4">Email Us</div>
                  <div className="text-secondary" style={{ fontSize: 14, lineHeight: '22px' }}>
                    Send us a message at{' '}
                    <a href="mailto:info@swiftbuild.io" className="fw-semibold" style={{ color: 'var(--brand)' }}>
                      info@swiftbuild.io
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <ContactForm variant="homepage" />
        </div>
      </div>
    </div>
  )
}
