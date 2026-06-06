import type { Metadata } from 'next'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'About SwiftBuild - Digital Partner for Canadian Trades',
  description: 'Learn about SwiftBuild, Canada\'s digital agency built exclusively for service contractors. We combine web design and workflow automation to grow your business.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="section-hero v1">
        <div className="hero-image"></div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="title1 fw-semibold text-gradient-1">We Build Websites</span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">& Operations for Trades</span>
              </div>
            </div>
            <p className="text effectFade fadeUp">
              Helping HVAC, roofing, plumbing, and cleaning businesses across Canada look professional, <br /> book more high-paying jobs, and automate the admin eating their nights.
            </p>
          </div>
        </div>
      </div>
      {/* /Hero Banner */}

      {/* About Section */}
      <div className="section-about-us flat-spacing" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heading-section" style={{ marginBottom: '24px' }}>
                <div className="heading-sub fw-semibold effectFade fadeUp">Who We Are</div>
                <div className="heading-title" style={{ fontSize: '52px', lineHeight: '56px' }}>
                  We Help Businesses <br /> Focus on What Matters
                </div>
              </div>
            </div>
            {/* LEFT — Our Mission */}
            <div className="col-xxl-5 col-lg-6 lg-mb-24" style={{ height: '400px' }}>
              <div className="mission-box" style={{ background: '#f4f4f5', padding: '48px 40px', borderRadius: '32px', border: '1px solid #e4e4e7', borderLeft: '4px solid var(--brand)', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                <h4 className="title fw-semibold effectFade fadeUp" style={{ fontSize: '34px', lineHeight: '40px', marginBottom: '24px' }}>Our Mission</h4>
                <p className="text effectFade fadeUp" style={{ fontSize: '18px', lineHeight: '26px', color: 'var(--secondary)', marginBottom: 0 }}>
                  We bridge the gap between heavy field work and modern web technology. Having seen trades owners spend hours manually sending invoices, chasing leads, and typing out text updates, we set out to build custom-coded sites that load in under a second and automate the busywork (like syncing Jobber, QuickBooks, and ServiceTitan) so you can focus on the work that pays.
                </p>
              </div>
            </div>

            {/* RIGHT — Location Block */}
            <div className="col-xxl-7 col-lg-6" style={{ height: '400px' }}>
              <div className="col-left" style={{ height: '100%' }}>
                <div className="position-relative z-5">
                  <div className="sub text-white">
                    <span className="dot"></span>
                    Serving Contractors Across Canada
                  </div>
                  <h5 className="title fw-semibold text-white">
                    Based in <span className="text-brand">Montréal, QC</span>
                  </h5>
                  <a href="https://cal.com/swiftbuild/free-strategy-call" className="tf-btn" style={{ background: 'var(--brand)' }}>
                    Book Your Strategy Call
                  </a>
                </div>
                <img className="effectFade fadeRotateX" src="/assets/images/item/earth.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /About Section */}

      <div className="box-white">
        {/* Core Values Section */}
        <div className="section-features flat-spacing">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Core Values</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">Built on Real Service</div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-24">
                <div className="features-item style-2 h-100 effectFade fadeRotateX">
                  <div className="icon">
                    <i className="icon icon-bolt-solid" style={{ fontSize: '32px', color: 'var(--brand)' }} />
                  </div>
                  <h4 className="title fw-semibold">Speed & Simplicity</h4>
                  <p className="text-secondary">
                    Prospective customers expect your site to load instantly, and your team needs systems that work without lag. We write clean, lightweight React code without bloated templates, ensuring under-a-second load times and reliable operational tools.
                  </p>
                </div>
              </div>
              <div className="col-md-6 mb-24">
                <div className="features-item style-2 h-100 effectFade fadeRotateX" data-delay="0.1">
                  <div className="icon">
                    <i className="icon icon-clipboard-check-solid" style={{ fontSize: '32px', color: 'var(--brand)' }} />
                  </div>
                  <h4 className="title fw-semibold">Fixed-Scope Clarity</h4>
                  <p className="text-secondary">
                    We don't believe in hourly runaway bills or vague estimates. Every project we design has a fixed-price scope, a transparent contract, and a guaranteed delivery date, so you know exactly what you are paying for from day one.
                  </p>
                </div>
              </div>
              <div className="col-md-6 md-mb-24">
                <div className="features-item style-2 h-100 effectFade fadeRotateX">
                  <div className="icon">
                    <i className="icon icon-plug-solid" style={{ fontSize: '32px', color: 'var(--brand)' }} />
                  </div>
                  <h4 className="title fw-semibold">Seamless Integration</h4>
                  <p className="text-secondary">
                    We don't tell you to throw away what works. We connect your existing software—whether you use Jobber, ServiceTitan, Housecall Pro, or QuickBooks—so they sync client data, dispatch updates, and payments automatically.
                  </p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="features-item style-2 h-100 effectFade fadeRotateX" data-delay="0.1">
                  <div className="icon">
                    <i className="icon icon-user-check-solid" style={{ fontSize: '32px', color: 'var(--brand)' }} />
                  </div>
                  <h4 className="title fw-semibold">Trades-First Focus</h4>
                  <p className="text-secondary">
                    We don't build software for generic tech startups. We build digital engines specifically for HVAC, roofing, plumbing, and cleaning businesses. We speak your language and design for the unique conversion needs of local service companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Core Values Section */}
      </div>

      {/* Tools Section */}
      <div className="section-tools v2 flat-spacing">
        <div className="tool-wrap text-center">
          <div className="heading-section center mb-48">
            <div className="heading-sub fw-semibold effectFade fadeUp">Integrations</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              Syncing Your Entire Office
            </div>
          </div>
          <div className="text effectFade fadeUp">
            We connect your high-speed custom website with the field service software you already trust—creating <br /> automated lead capture, instant scheduling notifications, and automated invoicing pipelines.
          </div>
          <a href="https://cal.com/swiftbuild/free-strategy-call" className="tf-btn effectFade fadeRotateX" style={{ background: 'var(--brand)' }}>
            Book Your Free Strategy Call
          </a>
        </div>
      </div>
      {/* /Tools Section */}

      {/* Faqs Section */}
      <FaqSection />
      {/* /Faqs Section */}

      {/* Contact Section */}
      <ContactSection />
      {/* /Contact Section */}
    </>
  )
}
