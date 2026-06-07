'use client'

import React from 'react'

export default function ServicesSection() {
  return (
    <div id="services" className="section-services flat-spacing">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xxl-4 col-lg-6">
            <div className="d-flex flex-column justify-content-between h-100">
              <div className="col-left">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">Services</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">What we do</div>
                </div>
                <p className="effectFade fadeUp">
                  Web design, local SEO, and workflow automation — built specifically for trades businesses across Canada.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-lg-6">
            <div className="accordion-faq_list" id="accordion-services">
              {/* Service 1 */}
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div
                  className="accordion-action services-image-btn active-img"
                  data-img="/assets/images/section/service-1.png"
                  data-bs-target="#faq-1"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-controls="faq-1"
                  aria-expanded="true"
                >
                  <div className="accordion-title">
                    Website Design <br /> & Development
                    <div className="text-body-1 num">(01)</div>
                  </div>
                </div>
                <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">
                      A fast, professional website that turns visitors into booked jobs. Built mobile-first, optimised for Google, and designed to convert — not just look good.
                    </div>
                    <div className="list-tags">
                      <span className="tags-item fw-semibold">Mobile-first & fast</span>
                      <span className="tags-item fw-semibold">Booking integrations</span>
                      <span className="tags-item fw-semibold">Google Search Console setup</span>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <a
                        href="/services/website-design"
                        className="fw-semibold text-body-3 d-inline-flex align-items-center gap-8"
                        style={{ color: 'var(--brand)' }}
                      >
                        Learn more about Website Design <i className="icon icon-arrow-top-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 */}
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div
                  className="accordion-action services-image-btn collapsed"
                  data-img="/assets/images/section/service-2.png"
                  data-bs-target="#faq-2"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-controls="faq-2"
                  aria-expanded="false"
                >
                  <div className="accordion-title">
                    Local SEO & <br /> Search Visibility
                    <div className="text-body-1 num">(02)</div>
                  </div>
                </div>
                <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">
                      Get found when homeowners search &apos;roofer near me&apos; or &apos;HVAC company in Mississauga.&apos; We build and manage the local search presence that gets you there.
                    </div>
                    <div className="list-tags">
                      <span className="tags-item fw-semibold">Google Business Profile</span>
                      <span className="tags-item fw-semibold">Local keyword targeting</span>
                      <span className="tags-item fw-semibold">Review strategy</span>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <a
                        href="/services/local-seo"
                        className="fw-semibold text-body-3 d-inline-flex align-items-center gap-8"
                        style={{ color: 'var(--brand)' }}
                      >
                        Learn more about Local SEO <i className="icon icon-arrow-top-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 */}
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div
                  className="accordion-action services-image-btn collapsed"
                  data-img="/assets/images/section/service-3.png"
                  data-bs-target="#faq-3"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-controls="faq-3"
                  aria-expanded="false"
                >
                  <div className="accordion-title">
                    Workflow & Task <br /> Automation
                    <div className="text-body-1 num">(03)</div>
                  </div>
                </div>
                <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">
                      Stop doing the same things twice. We automate your quote follow-ups, booking confirmations, review requests, and scheduling — set up once, runs forever.
                    </div>
                    <div className="list-tags">
                      <span className="tags-item fw-semibold">n8n & Zapier</span>
                      <span className="tags-item fw-semibold">CRM integrations</span>
                      <span className="tags-item fw-semibold">Custom workflows</span>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <a
                        href="/services/workflow-automation"
                        className="fw-semibold text-body-3 d-inline-flex align-items-center gap-8"
                        style={{ color: 'var(--brand)' }}
                      >
                        Learn more about Workflow Automation <i className="icon icon-arrow-top-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 4 */}
              <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                <div
                  className="accordion-action services-image-btn collapsed"
                  data-img="/assets/images/section/service-4.png"
                  data-bs-target="#faq-4"
                  role="button"
                  data-bs-toggle="collapse"
                  aria-controls="faq-4"
                  aria-expanded="false"
                >
                  <div className="accordion-title">
                    Voice Agent & <br /> Booking
                    <div className="text-body-1 num">(04)</div>
                  </div>
                </div>
                <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                  <div className="accordion-content">
                    <div className="text-body-3 text-neutral-300 text">
                      Coming soon — a smart voice system that answers your calls 24/7, qualifies leads, and books appointments while you&apos;re on the job. Join the early access waitlist.
                    </div>
                    <div className="list-tags">
                      <span className="tags-item fw-semibold">Early access open</span>
                      <span className="tags-item fw-semibold">Canadian pilot running</span>
                      <span className="tags-item fw-semibold">Join the waitlist</span>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                      <a
                        href="/services/voice-agent"
                        className="fw-semibold text-body-3 d-inline-flex align-items-center gap-8"
                        style={{ color: 'var(--brand)' }}
                      >
                        Learn more about Voice Agents <i className="icon icon-arrow-top-right" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="services-image effectFade fadeUp">
            <img src="/assets/images/section/service-1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
