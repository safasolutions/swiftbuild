export default function PricingSection() {
  return (
    <div id="pricing" className="section-pricing flat-spacing">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Pricing</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            Clear Scope. <br />Transparent Costs.
          </div>
          <p className="effectFade fadeUp text-secondary" style={{ marginTop: 16, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', fontSize: 15, lineHeight: '24px' }}>
            Every project starts with a fixed quote — no hourly surprises. These are starting points; your exact price depends on scope.
          </p>
        </div>
        <div className="row">
          {/* Get Found */}
          <div className="col-lg-4 lg-mb-24">
            <div className="pricing-item h-100 d-flex flex-column effectFade fadeUp no-div">
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-search-solid fs-24"></i>
                  <div className="fw-semibold text">Get Found</div>
                </div>
                <div className="line"></div>
                <div className="fw-semibold text-secondary">Be visible</div>
              </div>
              <div className="heading">
                <div>
                  <div className="fw-semibold text-secondary" style={{ fontSize: 14, marginBottom: 4 }}>From</div>
                  <div className="price-number fw-bold" style={{ fontSize: 40, lineHeight: '48px' }}>$2,500</div>
                  <h6 className="price-per" style={{ marginTop: 8 }}>live in 3&ndash;4 weeks</h6>
                </div>
              </div>
              <div className="line"></div>
              <div className="content" style={{ flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <div className="text fw-semibold">
                    For businesses homeowners can&apos;t find online. A professional website plus the local search presence that puts you in front of people searching right now.
                  </div>
                </div>
                <ul className="list-text type-check" style={{ width: '100%' }}>
                  <li><i className="icon icon-check-solid"></i>Custom mobile-first website</li>
                  <li><i className="icon icon-check-solid"></i>Local SEO setup</li>
                  <li><i className="icon icon-check-solid"></i>Google Business Profile</li>
                  <li><i className="icon icon-check-solid"></i>Review strategy</li>
                </ul>
              </div>
              <a href="https://cal.com/swiftbuild/free-strategy-call" className="tf-btn" style={{ marginTop: 32, justifyContent: 'center' }}>Get Started</a>
            </div>
          </div>
          {/* Never Miss a Job */}
          <div className="col-lg-4 lg-mb-24">
            <div className="pricing-item h-100 d-flex flex-column style-black effectFade fadeUp no-div" data-delay="0.1">
              <div className="pricing-badge fw-semibold">Most Popular</div>
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-bolt-solid fs-24"></i>
                  <div className="fw-semibold text">Never Miss a Job</div>
                </div>
                <div className="line"></div>
                <div className="fw-semibold text-neutral-400">Respond instantly</div>
              </div>
              <div className="heading">
                <div>
                  <div className="fw-semibold text-neutral-400" style={{ fontSize: 14, marginBottom: 4 }}>From</div>
                  <div className="price-number fw-bold" style={{ fontSize: 40, lineHeight: '48px' }}>$3,500</div>
                  <h6 className="price-per" style={{ marginTop: 8 }}>live in 2&ndash;3 weeks</h6>
                </div>
              </div>
              <div className="line"></div>
              <div className="content" style={{ flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <div className="text fw-semibold">
                    Every missed call is a job your competitor booked. Respond to every lead automatically &mdash; even when you&apos;re on the tools.
                  </div>
                </div>
                <ul className="list-text type-check" style={{ width: '100%' }}>
                  <li><i className="icon icon-check-solid"></i>Missed-call text-back</li>
                  <li><i className="icon icon-check-solid"></i>Lead capture &amp; routing</li>
                  <li><i className="icon icon-check-solid"></i>Quote &amp; review follow-ups</li>
                  <li><i className="icon icon-check-solid"></i>Online booking</li>
                </ul>
              </div>
              <a href="https://cal.com/swiftbuild/free-strategy-call" className="tf-btn" style={{ marginTop: 32, justifyContent: 'center', background: 'var(--brand)' }}>Get Started</a>
            </div>
          </div>
          {/* Autopilot */}
          <div className="col-lg-4">
            <div className="pricing-item h-100 d-flex flex-column effectFade fadeUp no-div" data-delay="0.2">
              <div className="top d-flex gap-12 align-items-center">
                <div className="d-flex gap-8 align-items-center">
                  <i className="icon icon-robot-solid fs-24"></i>
                  <div className="fw-semibold text">Autopilot</div>
                </div>
                <div className="line"></div>
                <div className="fw-semibold text-secondary">Hands-off</div>
              </div>
              <div className="heading">
                <div>
                  <div className="fw-semibold text-secondary" style={{ fontSize: 14, marginBottom: 4 }}>Custom</div>
                  <div className="price-number fw-bold" style={{ fontSize: 40, lineHeight: '48px' }}>Let&apos;s Talk</div>
                  <h6 className="price-per" style={{ marginTop: 8 }}>starts with the Snapshot</h6>
                </div>
              </div>
              <div className="line"></div>
              <div className="content" style={{ flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ width: '100%' }}>
                  <div className="text fw-semibold">
                    For businesses ready to take admin off their plate completely. We map your operations end to end, then automate them.
                  </div>
                </div>
                <ul className="list-text type-check" style={{ width: '100%' }}>
                  <li><i className="icon icon-check-solid"></i>Full workflow automation</li>
                  <li><i className="icon icon-check-solid"></i>CRM integration</li>
                  <li><i className="icon icon-check-solid"></i>AI after-hours agent</li>
                  <li><i className="icon icon-check-solid"></i>Ongoing optimisation</li>
                </ul>
              </div>
              <a href="https://cal.com/swiftbuild/free-strategy-call" className="tf-btn" style={{ marginTop: 32, justifyContent: 'center' }}>Start with the Snapshot</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
