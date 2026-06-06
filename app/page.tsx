// @ts-nocheck
'use client'

import WorkspaceTimeline from '@/components/sections/WorkspaceTimeline'
import PricingSection from '@/components/sections/PricingSection'
import UnifiedOfferings from '@/components/sections/UnifiedOfferings'
import SelectedWorkSection from '@/components/SelectedWorkSection'
import ContactForm from '@/components/ContactForm'
import Logo from '@/components/ui/Logo'

export default function HomePage() {
  return (
    <>
      {/* Hero Banner */}
              <div className="section-hero">
                  <div className="hero-image" style={{ opacity: 0.7 }}></div>
                  <div className="container">
                      <div className="content-wrap text-center">
                          <div className="sub fw-semibold effectFade fadeUp">
                              Digital Solutions for Trades Businesses
                          </div>
                          <div className="title text-display-2 effectFade fadeRotateX">
                              <span className="title1 fw-semibold text-gradient-1">Stand out.</span>
                              <br />
                              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                  <span className="fw-semibold text-gradient-1">Stay booked.</span>
                              </div>
                          </div>
                          <p className="text effectFade fadeUp" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
                              We help roofing, HVAC, and cleaning companies across Canada get found online, look professional, and automate the admin that&apos;s eating your time — so you can focus on the work that pays.
                          </p>
                          <div className="bot-btns effectFade fadeRotateX">
                              <a
                                  href="https://cal.com/swiftbuild/free-strategy-call"
                                  className="tf-btn"
                                  style={{ background: 'var(--brand)' }}
                              >
                                  Book Your Automation Audit
                              </a>
                          </div>
                          <div className="effectFade fadeUp fw-semibold" style={{ marginTop: 16, fontSize: 13, color: 'var(--secondary)' }}>
                              Trusted by 35+ trades businesses across Canada &middot; Fixed-price quotes &middot; You own everything we build
                          </div>
                      </div>
                  </div>
                  <a href="#services" className="scroll-more">
                      <span className="fw-semibold link1">Scroll for more</span>
                      <i className="icon icon-long-arrow-alt-down-solid"></i>
                  </a>
              </div>
              {/* /Hero Banner */}
              <div className="box-white">
                  {/* section-who-we-are */}
                  <div className="section-who-we-are" style={{ paddingTop: 80, paddingBottom: 40 }}>
                      <div className="container">
                          <div className="grid-collapse-lg who-we-are-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 64, alignItems: 'start' }}>
                              {/* LEFT */}
                              <div>
                                  <div className="heading-section mb-24">
                                      <div className="heading-sub fw-semibold effectFade fadeUp">Who We Are</div>
                                  </div>
                                  <h2 className="effectFade fadeRotateX fw-semibold mb-24 who-we-are-heading" style={{ fontSize: 44, lineHeight: '52px', letterSpacing: '-0.02em' }}>
                                      Your <span className="text-brand">Strategic Partner</span> <br />for Digital Growth
                                  </h2>
                                  <p className="effectFade fadeUp mb-0 text-secondary" style={{ maxWidth: 520, fontSize: 15, lineHeight: '24px' }}>
                                      We combine technical expertise with strategic vision to transform your digital presence into a high-performance engine. As your reliable strategic partner, we are committed to building long-term value through engineering excellence and consistent delivery.
                                  </p>
                              </div>
                              {/* RIGHT */}
                              <div>
                                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 32, rowGap: 24, marginBottom: 32 }}>
                                      <div className="effectFade fadeUp">
                                          <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>35+</div>
                                          <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>HAPPY CLIENTS</div>
                                      </div>
                                      <div className="effectFade fadeUp" data-delay="0.1">
                                          <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>180%</div>
                                          <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>AVG ROI</div>
                                      </div>
                                      <div className="effectFade fadeUp" data-delay="0.2">
                                          <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>400+</div>
                                          <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>SOLUTIONS BUILT</div>
                                      </div>
                                      <div className="effectFade fadeUp" data-delay="0.3">
                                          <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>6,000+</div>
                                          <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>HOURS SAVED</div>
                                      </div>
                                  </div>
                                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 32, rowGap: 16, borderTop: '1px solid #E4E4E7', paddingTop: 24 }}>
                                      <div className="effectFade fadeUp d-flex align-items-center gap-12">
                                          <i className="icon icon-clipboard-check-solid text-brand" style={{ fontSize: 18 }}></i>
                                          <span className="fw-semibold" style={{ fontSize: 14 }}>Smart Invoicing</span>
                                      </div>
                                      <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.1">
                                          <i className="icon icon-user-check-solid text-brand" style={{ fontSize: 18 }}></i>
                                          <span className="fw-semibold" style={{ fontSize: 14 }}>CRM Integration</span>
                                      </div>
                                      <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.2">
                                          <i className="icon icon-search-solid text-brand" style={{ fontSize: 18 }}></i>
                                          <span className="fw-semibold" style={{ fontSize: 14 }}>Local SEO</span>
                                      </div>
                                      <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.3">
                                          <i className="icon icon-bolt-solid text-brand" style={{ fontSize: 18 }}></i>
                                          <span className="fw-semibold" style={{ fontSize: 14 }}>Custom Websites</span>
                                      </div>
                                      <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.4">
                                          <i className="icon icon-robot-solid text-brand" style={{ fontSize: 18 }}></i>
                                          <span className="fw-semibold" style={{ fontSize: 14 }}>Strategic Marketing</span>
                                      </div>
                                      <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.5">
                                          <i className="icon icon-plug-solid text-brand" style={{ fontSize: 18 }}></i>
                                          <span className="fw-semibold" style={{ fontSize: 14 }}>Inbound Lead Management</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* problems band */}
                          <div className="problems-band effectFade fadeUp no-div">
                              <div className="problems-band-label fw-semibold">The Problems We Solve</div>
                              <div className="problems-row">
                                  <div className="problems-band-item">
                                      <div className="problem-icon"><i className="icon icon-tty-solid"></i></div>
                                      <div>
                                          <div className="problem-title fw-semibold">Missed calls</div>
                                          <div className="problem-desc">Every missed call after 6pm is a job someone else booked.</div>
                                      </div>
                                  </div>
                                  <div className="problems-band-item">
                                      <div className="problem-icon"><i className="icon icon-envelope-solid"></i></div>
                                      <div>
                                          <div className="problem-title fw-semibold">Cold quotes</div>
                                          <div className="problem-desc">Estimates sit in inboxes while the guy who called back first wins.</div>
                                      </div>
                                  </div>
                                  <div className="problems-band-item">
                                      <div className="problem-icon"><i className="icon icon-clock-solid"></i></div>
                                      <div>
                                          <div className="problem-title fw-semibold">Manual chaos</div>
                                          <div className="problem-desc">Scheduling in your head, dispatch over text, invoices at midnight.</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          {/* /problems band */}
                      </div>
                  </div>
                  {/* /section-who-we-are */}
                  {/* section-services */}
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
                                          <p className="effectFade fadeUp">AI audits, automations, lead systems, websites, and AI agents — built specifically for trades businesses across Canada.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-6 col-lg-6">
                                  <div className="accordion-faq_list" id="accordion-services">
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn active-img" data-img="/assets/images/section/service-1.png" data-bs-target="#faq-1" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-1" aria-expanded="true">
                                              <div className="accordion-title">
                                                  AI Audit
                                                  <div className="text-body-1 num">(01)</div>
                                              </div>
                                          </div>
                                          <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">A structured review of how your business actually runs — calls, scheduling, follow-up. You get a plain-English report showing exactly where you&apos;re losing time and money, plus a 90-day roadmap to fix it.</div>
                                                  <div className="list-tags">
                                                      <a href="/services/ai-audit" className="tags-item fw-semibold">60-minute discovery call</a>
                                                      <a href="/services/ai-audit" className="tags-item fw-semibold">Full workflow analysis</a>
                                                      <a href="/services/ai-audit" className="tags-item fw-semibold">90-day roadmap</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-2.png" data-bs-target="#faq-2" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-2" aria-expanded="false">
                                              <div className="accordion-title">
                                                  AI Automations <br /> & Workflows
                                                  <div className="text-body-1 num">(02)</div>
                                              </div>
                                          </div>
                                          <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Quote follow-ups, review requests, job updates, invoice reminders — set up once, runs forever. We build the workflows that connect your tools and eliminate manual steps.</div>
                                                  <div className="list-tags">
                                                      <a href="/services/ai-automations" className="tags-item fw-semibold">n8n & Zapier</a>
                                                      <a href="/services/ai-automations" className="tags-item fw-semibold">CRM integrations</a>
                                                      <a href="/services/ai-automations" className="tags-item fw-semibold">Runs without staff</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-3.png" data-bs-target="#faq-3" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-3" aria-expanded="false">
                                              <div className="accordion-title">
                                                  AI Lead & <br /> Appointment Systems
                                                  <div className="text-body-1 num">(03)</div>
                                              </div>
                                          </div>
                                          <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">From first contact to booked job without a human in the loop. Website, Google, or missed call — the system responds instantly, qualifies the lead, and books the appointment.</div>
                                                  <div className="list-tags">
                                                      <a href="/services/lead-systems" className="tags-item fw-semibold">Missed-call text-back</a>
                                                      <a href="/services/lead-systems" className="tags-item fw-semibold">Instant response</a>
                                                      <a href="/services/lead-systems" className="tags-item fw-semibold">Automated booking</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-4.png" data-bs-target="#faq-4" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-4" aria-expanded="false">
                                              <div className="accordion-title">
                                                  Website Development <br /> + SEO
                                                  <div className="text-body-1 num">(04)</div>
                                              </div>
                                          </div>
                                          <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">A website built to rank in local search and convert visitors into calls. Mobile-first, fast, and designed around how customers actually find and choose a trades company.</div>
                                                  <div className="list-tags">
                                                      <a href="/services/website-seo" className="tags-item fw-semibold">Mobile-first & fast</a>
                                                      <a href="/services/website-seo" className="tags-item fw-semibold">Local SEO</a>
                                                      <a href="/services/website-seo" className="tags-item fw-semibold">Built to convert</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-5.jpg" data-bs-target="#faq-5" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-5" aria-expanded="false">
                                              <div className="accordion-title">
                                                  AI Agents
                                                  <div className="text-body-1 num">(05)</div>
                                              </div>
                                          </div>
                                          <div id="faq-5" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Custom AI agents that answer questions, qualify leads, and handle real business tasks around the clock — escalating to your team only when a human is actually needed.</div>
                                                  <div className="list-tags">
                                                      <a href="/services/ai-agents" className="tags-item fw-semibold">24/7 availability</a>
                                                      <a href="/services/ai-agents" className="tags-item fw-semibold">After-hours coverage</a>
                                                      <a href="/services/ai-agents" className="tags-item fw-semibold">Human escalation</a>
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
                  {/* /section-services */}
                  {/* section-process */}
                  <WorkspaceTimeline />
                  {/* /section-process */}
                  {/* section-features */}
                  <UnifiedOfferings />
                  {/* /section-features */}
                  {/* section-featured-works */}
                  <SelectedWorkSection noPaddingTop />
                  {/* /section-featured-works */}
              </div>
        
              <div className="box-black">
                  <div className="light-box"></div>
                  <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
                  <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
            
                  {/* section-statistic */}
                  <div className="section-statistic">
                      <div className="line"></div>
                      <div className="container">
                          <div className="row justify-content-between">
                              <div className="col-md-6">
                                  <div className="heading-section mb-48">
                                      <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Results</div>
                                      <div className="heading-title text-white effectFade fadeRotateX">Real systems, <br /> measured results — <br /> from the work above</div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div className="statistic-slider">
                                      <div className="text text-body-1 text-neutral-400 effectFade fadeUp">
                                          We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                                      </div>
                                      <div className="swiper swiper-progressbar">
                                          <div className="group-slider effectFade fadeUp">
                                              <div className="progress-bar">
                                                  <div className="progress-fill" id="progressBar"></div>
                                              </div>
                                              <div className="group-btn-slider">
                                                  <div className="btn-slider progressbar-prev">
                                                      <i className="icon icon-angle-left-solid"></i>
                                                  </div>
                                                  <div className="btn-slider progressbar-next">
                                                      <i className="icon icon-angle-right-solid"></i>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="swiper-wrapper effectFade fadeUp">
                                              <div className="swiper-slide">
                                                  <div className="title fw-semibold text-body-1">FOLLOW-UP RATE INCREASE &middot; AYLA CASE STUDY</div>
                                                  <div className="statistic-number">
                                                      <span className="number text-white fw-semibold">300</span>
                                                      <span className="prefix text-brand">%</span>
                                                  </div>
                                              </div>
                                              <div className="swiper-slide">
                                                  <div className="title fw-semibold text-body-1">TYPICAL SITE LAUNCH &middot; CLIENT WEBSITES</div>
                                                  <div className="statistic-number">
                                                      <span className="number text-white fw-semibold">2&ndash;4</span>
                                                      <span className="prefix text-brand">wks</span>
                                                  </div>
                                              </div>
                                              <div className="swiper-slide">
                                                  <div className="title fw-semibold text-body-1">MANUAL INVOICE ENTRY &middot; INVOICE FLOW</div>
                                                  <div className="statistic-number">
                                                      <span className="number text-white fw-semibold">0</span>
                                                      <span className="prefix text-brand">hrs</span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-statistic */}

                  {/* section-testimonials */}
                  <div className="section-testimonials flat-spacing">
                      <div className="container">
                          <div className="row justify-content-between">
                              <div className="col-lg-5">
                                  <div className="col-left">
                                      <div className="heading-section mb-48">
                                          <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Testimonials</div>
                                          <div className="heading-title text-white effectFade fadeRotateX">What Our <br /> Clients Says</div>
                                      </div>
                                      <div className="swiper-testimonial_wrap effectFade fadeUp">
                                          <div dir="ltr" className="swiper tf-swiper swiper-testimonial">
                                              <div className="swiper-wrapper">
                                                  <div className="swiper-slide">
                                                      <div>
                                                          <div className="top-icon d-flex gap-4">
                                                              <i className="icon icon-star-solid"></i>
                                                              <i className="icon icon-star-solid"></i>
                                                              <i className="icon icon-star-solid"></i>
                                                              <i className="icon icon-star-solid"></i>
                                                              <i className="icon icon-star-solid"></i>
                                                          </div>
                                                          <div className="text-body-1 text-white desc">
                                                              We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                                                          </div>
                                                          <div className="cite">
                                                              <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                                                              <div className="name text-body-3 text-neutral-400 fw-semibold">Elena Ruiz</div>
                                                              <div className="line"></div>
                                                              <div className="sub text-body-3 text-neutral-400">Cantos SaaS’s VP Product</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="swiper-slide">
                                                      <div>
                                                          <div className="top-icon">
                                                              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#FD3A25"/>
                                                              </svg>
                                                          </div>
                                                          <div className="text-body-1 text-white desc">
                                                              SSO/SAML and RBAC landed smoothly. Latency stayed &lt;300 ms on p95—huge win for our agents.
                                                          </div>
                                                          <div className="cite">
                                                              <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                                                              <div className="name text-body-3 text-neutral-400 fw-semibold">Marcus Tan</div>
                                                              <div className="line"></div>
                                                              <div className="sub text-body-3 text-neutral-400">VectorPay’s CTO</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="swiper-slide">
                                                      <div>
                                                          <div className="top-icon">
                                                              <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                  <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#FD3A25"/>
                                                              </svg>
                                                          </div>
                                                          <div className="text-body-1 text-white desc">
                                                              The best partner for agentic work. Multi-step planning, tool use, and audit trails—done right the first time.
                                                          </div>
                                                          <div className="cite">
                                                              <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                                                              <div className="name text-body-3 text-neutral-400 fw-semibold">David Kim</div>
                                                              <div className="line"></div>
                                                              <div className="sub text-body-3 text-neutral-400">Northway's Ecommerce Director</div>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div className="group-slider">
                                              <div className="group-btn-slider">
                                                  <div className="btn-slider nav-prev-swiper testimonials-prev">
                                                      <i className="icon icon-angle-left-solid"></i>
                                                  </div>
                                                  <div className="btn-slider nav-next-swiper testimonials-next">
                                                      <i className="icon icon-angle-right-solid"></i>
                                                  </div>
                                              </div>
                                              <div className="testimonials-pagination"></div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <div dir="ltr" className="swiper sw-main-image effectFade fadeUp">
                                      <div className="swiper-wrapper">
                                          <div className="swiper-slide">
                                              <div className="testimonial-image">
                                                  <img src="/assets/images/section/tes-1.jpg" alt="" />
                                              </div>
                                          </div>
                                          <div className="swiper-slide">
                                              <div className="testimonial-image">
                                                  <img src="/assets/images/section/tes-2.jpg" alt="" />
                                              </div>
                                          </div>
                                          <div className="swiper-slide">
                                              <div className="testimonial-image">
                                                  <img src="/assets/images/section/tes-3.jpg" alt="" />
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-testimonials */}
              </div>

              {/* section-pricing */}
              <PricingSection />
              {/* /section-pricing */}

              {/* section-faqs */}
              <div className="section-faqs flat-spacing pt-0">
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
                                      <div className="accordion-asked-title" id="asked_faq1">
                                          <button className="accordion-button text-body-1 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_faq1" aria-expanded="true" aria-controls="collapse_faq1">
                                              What exactly does SwiftBuild do?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse_faq1" role="region" className="accordion-collapse collapse show" aria-labelledby="asked_faq1" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              We build high-performance websites, manage local SEO to get you found by local homeowners, and automate your repetitive daily tasks (like lead follow-ups, CRM entry, and booking notifications) specifically for roofing, HVAC, and service contractors.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.1">
                                      <div className="accordion-asked-title" id="asked_faq2">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_faq2" aria-expanded="false" aria-controls="collapse_faq2">
                                              What businesses are eligible? Who owns the tech stack?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse_faq2" role="region" className="accordion-collapse collapse" aria-labelledby="asked_faq2" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              We work with roofing, HVAC, plumbing, electrical, and cleaning businesses across Canada. Once delivered, you own 100% of the website, code, and automations — no proprietary lock-ins or mandatory recurring license fees.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.2">
                                      <div className="accordion-asked-title" id="asked_faq3">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse_faq3" aria-expanded="false" aria-controls="collapse_faq3">
                                              How long does the project take?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse_faq3" role="region" className="accordion-collapse collapse" aria-labelledby="asked_faq3" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              A standard custom trades website and local SEO setup takes 3 to 4 weeks. Custom workflow automation integrations typically take 2 to 3 weeks depending on the complexity of your current operations.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.3">
                                      <div className="accordion-asked-title" id="asked1">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="false" aria-controls="collapse1">
                                              Do you integrate with the tools I use?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse1" role="region" className="accordion-collapse collapse" aria-labelledby="asked1" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              Yes. We build around your existing stack — CRMs, ERPs, spreadsheets, databases, communication tools, and industry-specific software. We avoid forcing tool changes unless there is a clear reason to upgrade.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.4">
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
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.5">
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
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.6">
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
              {/* section-contact */}
              <div id="contact" style={{ paddingTop: 40, paddingBottom: 80, position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: '0 16px', borderRadius: 40, backgroundImage: 'url(/assets/images/section/hero-1.jpg)', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                  <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                      <div className="grid-collapse-lg" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24, alignItems: 'stretch' }}>
                          {/* LEFT — Info panel */}
                          <div className="effectFade fadeUp contact-info-panel" style={{ background: 'transparent', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column' }}>
                              <div className="heading-section mb-24">
                                  <div className="heading-sub fw-semibold effectFade fadeUp" style={{ alignSelf: 'flex-start' }}>Contact</div>
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
                          <ContactForm variant="homepage" />
                      </div>
                  </div>
              </div>
              {/* /section-contact */}
    </>
  )
}
