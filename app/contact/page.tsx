// @ts-nocheck
'use client'

import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <>
      {/* Hero Banner */}
              <div className="section-hero v1">
                  <div className="hero-image">
                  </div>
                  <div className="container">
                      <div className="content-wrap text-center">
                          <div className="title text-display-2 effectFade fadeRotateX">
                              <span className="title1 fw-semibold text-gradient-1">Ready to stand out?</span>
                              <br />
                              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                  <span className="fw-semibold text-gradient-1">Let’s talk</span>
                              </div>
                          </div>
                          <p className="text effectFade fadeUp">
                              Reach out to our team today and let’s collaborate to turn your ideas into innovative <br /> solutions that truly inspire
                          </p>
                      </div>
                  </div>
              </div>
              {/* /Hero Banner */}
              {/* section-contact */}
              <div id="contact" style={{ paddingTop: 80, paddingBottom: 80, background: '#ffffff' }}>
                  <div className="container">
                      <div className="grid-collapse-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24, alignItems: 'stretch' }}>
                          {/* LEFT — Info panel */}
                          <div className="effectFade fadeUp contact-info-panel" style={{ background: 'transparent', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column' }}>
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
                                          <div className="text-secondary" style={{ fontSize: 14, lineHeight: '22px' }}>Schedule a 30-minute call to discuss your needs and explore automation opportunities.</div>
                                      </div>
                                  </div>
                                  <div className="d-flex gap-16 align-items-start">
                                      <i className="icon icon-envelope-solid text-brand" style={{ fontSize: 18, marginTop: 4 }}></i>
                                      <div>
                                          <div className="fw-semibold mb-4">Email Us</div>
                                          <div className="text-secondary" style={{ fontSize: 14, lineHeight: '22px' }}>Send us a message at <a href="mailto:info@swiftbuild.io" className="fw-semibold" style={{ color: 'var(--brand)' }}>info@swiftbuild.io</a></div>
                                      </div>
                                  </div>
                              </div>

                          </div>
                          {/* RIGHT — Form */}
                          {/* RIGHT — Form */}
                          <ContactForm variant="page" />
                      </div>
                  </div>
              </div>
              {/* /section-contact */}
              {/* map */}
              <div className="wg-map">
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317859.6089702069!2d-0.075949!3d51.508112!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349331f38dd%3A0xa8bf49dde1d56467!2sTower%20of%20London!5e0!3m2!1sen!2sus!4v1719221598456!5m2!1sen!2sus"
                      height="660" style={{ border: "0" }} allowFullScreen loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              {/* /map */}
              {/* section-faqs */}
              <div className="section-faqs flat-spacing">
                  <div className="container">
                      <div className="heading-section center mb-64">
                          <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
                          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                              Frequently Asked <br />Questions
                          </div>
                      </div>
                      <div className="row justify-content-center">
                          <div className="col-lg-8">
                              <div className="accordion-asked" id="accordion-asked">
                                  <div className="accordion-asked-item effectFade fadeRotateX">
                                      <div className="accordion-asked-title" id="asked1">
                                          <button className="accordion-button text-body-1 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                              Do you integrate with the tools I use?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse1" role="region" className="accordion-collapse collapse show" aria-labelledby="asked1" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              Yes. We build around your existing stack — CRMs, ERPs, spreadsheets, databases, communication tools, and industry-specific software. We avoid forcing tool changes unless there is a clear reason to upgrade.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.1">
                                      <div className="accordion-asked-title" id="asked2">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                              Why not just use an off-the-shelf tool instead?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse2" role="region" className="accordion-collapse collapse" aria-labelledby="asked2" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              Generic tools solve generic problems. If your workflows, data, or approval chains have any specificity to your business, a custom solution will outperform a template every time — and it won&apos;t force you to change how you operate to fit someone else&apos;s product.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.2">
                                      <div className="accordion-asked-title" id="asked3">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                              What happens if the solution doesn&apos;t perform as expected?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse3" role="region" className="accordion-collapse collapse" aria-labelledby="asked3" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              We define success criteria upfront, test thoroughly before handover, and include a post-launch support window. If something isn&apos;t hitting targets, we diagnose and fix it. Custom systems do need tuning as real-world data comes in, and that&apos;s part of the work we do.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.3">
                                      <div className="accordion-asked-title" id="asked4">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                              Do you offer ongoing support after a project is delivered?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse4" role="region" className="accordion-collapse collapse" aria-labelledby="asked4" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              Yes. Most clients choose a retainer for monitoring, updates, and iterative improvements after launch. We can also do a clean handover with full documentation if you prefer to maintain the system in-house. Both options are available.
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* /section-faqs */}
    </>
  )
}
