'use client'

import React from 'react'

export default function UnifiedOfferings() {
  return (
    <section className="offerings-section" id="offerings">
      <div className="container">
        <div className="heading-section center mb-40">
          <div className="heading-sub fw-semibold effectFade fadeUp">Our Offerings</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            Modular solutions. Tailored fit.
          </div>
        </div>

        <div className="unified-offerings-card effectFade fadeUp">
          <div className="row g-40 align-items-stretch">
            {/* Left Column: Core Systems */}
            <div className="col-lg-6">
              <h3 className="offerings-column-title">Core Systems</h3>
              <p className="offerings-column-sub">For every trades business. Proven, ready to deploy.</p>
              
              <div className="offering-list">
                <div className="offering-item">
                  <div className="offering-icon">
                    <i className="icon icon-plug-solid"></i>
                  </div>
                  <div className="offering-info">
                    <h4 className="offering-title">Lead Management</h4>
                    <p className="offering-desc">Capture, route, and nurture every prospect automatically.</p>
                  </div>
                </div>

                <div className="offering-item">
                  <div className="offering-icon">
                    <i className="icon icon-user-check-solid"></i>
                  </div>
                  <div className="offering-info">
                    <h4 className="offering-title">Smart Scheduling</h4>
                    <p className="offering-desc">Automate dispatching, booking reminders, and job updates.</p>
                  </div>
                </div>

                <div className="offering-item">
                  <div className="offering-icon">
                    <i className="icon icon-clipboard-check-solid"></i>
                  </div>
                  <div className="offering-info">
                    <h4 className="offering-title">Instant Invoicing</h4>
                    <p className="offering-desc">Generate, send, and reconcile professional invoices on the spot.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Column divider line visible on desktop */}
            <div className="col-lg-auto d-none d-lg-block p-0">
              <div className="offerings-column-divider"></div>
            </div>

            {/* Right Column: Custom Solutions */}
            <div className="col-lg-5 ms-auto d-flex flex-column justify-content-between">
              <div>
                <h3 className="offerings-column-title">Custom Solutions</h3>
                <p className="offerings-column-sub">For your company. Built to spec.</p>
                <p className="text-secondary mb-24" style={{ fontSize: '14px', lineHeight: '22px' }}>
                  Tailored workflow automation designed specifically for your field service systems and scale.
                </p>

                <div className="offering-list">
                  <div className="offering-item">
                    <div className="offering-icon">
                      <i className="icon icon-book-solid"></i>
                    </div>
                    <div className="offering-info">
                      <h4 className="offering-title">Workflow Audits</h4>
                      <p className="offering-desc">We map your operational bottlenecks to build the perfect workflow.</p>
                    </div>
                  </div>

                  <div className="offering-item">
                    <div className="offering-icon">
                      <i className="icon icon-bolt-solid"></i>
                    </div>
                    <div className="offering-info">
                      <h4 className="offering-title">Custom Integrations</h4>
                      <p className="offering-desc">Seamlessly connect your existing CRM, accounting, and field tools.</p>
                    </div>
                  </div>

                  <div className="offering-item">
                    <div className="offering-icon">
                      <i className="icon icon-shield-alt-solid"></i>
                    </div>
                    <div className="offering-info">
                      <h4 className="offering-title">Enterprise Scaling</h4>
                      <p className="offering-desc">Deploy secure, robust automation built to grow with your business.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Unified CTA Button */}
          <div className="offerings-cta-container">
            <a
              href="https://cal.com/swiftbuild/free-strategy-call"
              className="offerings-cta-btn text-decoration-none"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
