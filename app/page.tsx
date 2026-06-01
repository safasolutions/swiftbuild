// @ts-nocheck
'use client'

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
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 64, alignItems: 'start' }}>
                              {/* LEFT */}
                              <div>
                                  <div className="heading-section mb-24">
                                      <div className="heading-sub fw-semibold effectFade fadeUp">Who We Are</div>
                                  </div>
                                  <h2 className="effectFade fadeRotateX fw-semibold mb-24" style={{ fontSize: 44, lineHeight: '52px', letterSpacing: '-0.02em' }}>
                                      Your <span className="text-brand">Strategic Partner</span><br />for Digital Growth
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
                                          <p className="effectFade fadeUp">Web design, local SEO, and workflow automation — built specifically for trades businesses across Canada.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-6 col-lg-6">
                                  <div className="accordion-faq_list" id="accordion-services">
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn active-img" data-img="/assets/images/section/service-1.jpg" data-bs-target="#faq-1" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-1" aria-expanded="true">
                                              <div className="accordion-title">
                                                  Website Design <br /> & Development
                                                  <div className="text-body-1 num">(01)</div>
                                              </div>
                                          </div>
                                          <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">A fast, professional website that turns visitors into booked jobs. Built mobile-first, optimised for Google, and designed to convert — not just look good.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Mobile-first & fast</a>
                                                      <a href="#" className="tags-item fw-semibold">Booking integrations</a>
                                                      <a href="#" className="tags-item fw-semibold">Google Search Console setup</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-2.jpg" data-bs-target="#faq-2" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-2" aria-expanded="false">
                                              <div className="accordion-title">
                                                  Local SEO & <br /> Search Visibility
                                                  <div className="text-body-1 num">(02)</div>
                                              </div>
                                          </div>
                                          <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Get found when homeowners search 'roofer near me' or 'HVAC company in Mississauga.' We build and manage the local search presence that gets you there.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Google Business Profile</a>
                                                      <a href="#" className="tags-item fw-semibold">Local keyword targeting</a>
                                                      <a href="#" className="tags-item fw-semibold">Review strategy</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-3.jpg" data-bs-target="#faq-3" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-3" aria-expanded="false">
                                              <div className="accordion-title">
                                                  Workflow & Task <br /> Automation
                                                  <div className="text-body-1 num">(03)</div>
                                              </div>
                                          </div>
                                          <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Stop doing the same things twice. We automate your quote follow-ups, booking confirmations, review requests, and scheduling — set up once, runs forever.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">n8n & Zapier</a>
                                                      <a href="#" className="tags-item fw-semibold">CRM integrations</a>
                                                      <a href="#" className="tags-item fw-semibold">Custom workflows</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-4.jpg" data-bs-target="#faq-4" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-4" aria-expanded="false">
                                              <div className="accordion-title">
                                                  Voice Agent <br /> & Booking
                                                  <div className="text-body-1 num">(04)</div>
                                              </div>
                                          </div>
                                          <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Coming soon — a smart voice system that answers your calls 24/7, qualifies leads, and books appointments while you're on the job. Join the early access waitlist.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Early access open</a>
                                                      <a href="#" className="tags-item fw-semibold">Canadian pilot running</a>
                                                      <a href="#" className="tags-item fw-semibold">Join the waitlist</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="services-image effectFade fadeUp">
                                  <img src="/assets/images/section/service-1.jpg" alt="" />
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-services */}
                  {/* section-featured-works */}
                  <div id="works" className="section-featured-works flat-spacing pt-0">
                      <div className="container">
                          <div className="heading-section mb-0">
                              <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Featured Works</div>
                          </div>
                          <div className="featured-works-list position-relative">
                              <div className="">
                                  <div className="featured-works-item  effectFade fadeUp no-div">
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span className="active"></span>
                                              <span></span>
                                              <span></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">StorageMate</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Full-stack multi-brand SaaS platform replacing phone-based coordination with end-to-end digital booking, mover job management, and admin oversight — two student storage brands, one backend.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold text-body-3">Custom Development, Workflow Automation, CRM Integration</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold text-body-3">Student Logistics</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="">
                                  <div className="featured-works-item ">
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span></span>
                                              <span className="active"></span>
                                              <span></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">Showroom</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Content curation platform that pulls Instagram posts, lets admins organise branded showrooms via drag-and-drop, and auto-syncs to a mobile consumer app — eliminating manual content management for a fashion brand.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold">Custom Development, Workflow Automation</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold">Fashion E-Commerce</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="">
                                  <div className="featured-works-item ">
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span></span>
                                              <span></span>
                                              <span className="active"></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">InvoiceLink</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Automation server for a Swiss accounting firm — monitors Box cloud storage for PDF invoices, extracts structured data, and auto-links each invoice to its matching transaction. Zero manual data entry.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold">Custom Integration, Workflow Automation, Custom Development</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold">Accounting & Finance</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-featured-works */}
                  {/* section-process */}
                  <div className="section-process flat-spacing pt-0">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-5">
                                  <div className="process-heading h-100">
                                      <div className="heading-section mb-80">
                                          <div className="heading-sub fw-semibold effectFade fadeUp">Process</div>
                                          <div className="heading-title text-gradient-3 effectFade fadeRotateX">Simple process. <br /> No fluff.</div>
                                      </div>
                                      <div className="group-btn-slider">
                                          <div className="nav-prev-swiper">
                                              <i className="icon icon-angle-left-solid"></i>
                                          </div>
                                          <div className="nav-next-swiper">
                                              <i className="icon icon-angle-right-solid"></i>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-7">
                                  <div className="process-slide">
                                      <div dir="ltr" className="swiper tf-swiper swiper-box-shadow" data-preview="1.78" data-tablet="2" data-mobile-sm="1" data-mobile="1"
                                          data-loop="false" data-center="false" data-space-lg="24" data-space-md="24" data-space="30" >
                                          <div className="swiper-wrapper">
                                              <div className="swiper-slide">
                                                  <div className="process-card">
                                                      <i className="icon icon-search-solid"></i>
                                                      <div className="content">
                                                          <h4 className="title fw-semibold">Free strategy call</h4>
                                                          <p className="text text-secondary">15 minutes. We learn your business and what's not working. No pitch, no obligation.</p>
                                                      </div>
                                                      <div className="bot">
                                                          <div className="time fw-semibold">15 MIN CALL</div>
                                                          <div className="number">
                                                              <span className="text-neutral-400">01</span>
                                                              <span className="text-neutral-200">/03</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="swiper-slide">
                                                  <div className="process-card">
                                                      <i className="icon icon-bolt-solid"></i>
                                                      <div className="content">
                                                          <h4 className="title fw-semibold">We build a clear plan</h4>
                                                          <p className="text text-secondary">Specific scope, fixed price, realistic timeline. No vague estimates or hidden costs.</p>
                                                      </div>
                                                      <div className="bot">
                                                          <div className="time fw-semibold">48 HRS</div>
                                                          <div className="number">
                                                              <span className="text-neutral-400">02</span>
                                                              <span className="text-neutral-200">/03</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="swiper-slide">
                                                  <div className="process-card">
                                                      <i className="icon icon-user-check-solid-1"></i>
                                                      <div className="content">
                                                          <h4 className="title fw-semibold">We deliver and support</h4>
                                                          <p className="text text-secondary">Fast turnaround with regular updates. We stick around after launch.</p>
                                                      </div>
                                                      <div className="bot">
                                                          <div className="time fw-semibold">ONGOING</div>
                                                          <div className="number">
                                                              <span className="text-neutral-400">03</span>
                                                              <span className="text-neutral-200">/03</span>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-process */}
                  {/* section-features */}
                  <div className="section-features flat-spacing pt-0">
                      <div className="container">
                          <div className="heading-section center mb-64">
                              <div className="heading-sub fw-semibold effectFade fadeUp">What's included</div>
                              <div className="heading-title text-gradient-3 effectFade fadeRotateX">Everything your trades business needs</div>
                          </div>
                      </div>
                      <div className="position-relative">
                          <div className="container z-5">
                              <div className="features-wrap justify-content-between">
                                  <div className="features-col col-left lg-mb-24">
                                      <div className="features-item effectFade fadeUp">
                                          <i className="icon icon-robot-solid"></i>
                                          <h6 className="title fw-semibold">Professional website</h6>
                                          <p className="text-secondary">
                                              Fast, mobile-first sites built to convert visitors into booked jobs — not just look good.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp">
                                          <i className="icon icon-clipboard-check-solid"></i>
                                          <h6 className="title fw-semibold">Local SEO & Google rankings</h6>
                                          <p className="text-secondary">
                                              We get you ranking in Google Maps and local search where your customers actually look.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp">
                                          <i className="icon icon-book-solid"></i>
                                          <h6 className="title fw-semibold">Workflow automation</h6>
                                          <p className="text-secondary">
                                              Quote follow-ups, booking confirmations, review requests — automated and running 24/7.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="features-center flex-shrink" style={{ width: 96, height: 96, borderRadius: 20 }}>
                                      <img
                                          src="/assets/images/logo/favicon.svg"
                                          alt="SwiftBuild"
                                          style={{ width: 76, height: 76, mixBlendMode: 'multiply' }}
                                      />
                                  </div>
                                  <div className="features-col col-right">
                                      <div className="features-item effectFade fadeUp" data-delay="0.1">
                                          <i className="icon icon-user-check-solid"></i>
                                          <h6 className="title fw-semibold">Voice agent</h6>
                                          <p className="text-secondary">
                                              Coming soon: a smart voice system that answers your calls, qualifies callers, and books appointments while you're on the job.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp" data-delay="0.1">
                                          <i className="icon icon-shield-alt-solid"></i>
                                          <h6 className="title fw-semibold">Fixed prices, real timelines</h6>
                                          <p className="text-secondary">
                                              We scope the project, agree a price, and deliver on time. No surprises, no excuses.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp" data-delay="0.1">
                                          <i className="icon icon-plug-solid"></i>
                                          <h6 className="title fw-semibold">Ongoing support</h6>
                                          <p className="text-secondary">
                                              We don't disappear after launch. Monthly reporting, updates, and support included.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="side-line-main d-none d-lg-block wow fadeIn">
                              <div className="container">
                                  <div className="row">
                                      <div className="col-lg-4 mx-auto">
                                          <div className="side-line-wrap">
                                              <div className="link-break-line left">
                                                  <div className="link-break-line">
                                                      <span className="item top"></span>
                                                      <span className="item bottom"></span>
                                                  </div>
                                              </div>
                                              <div className="link-break-center">
                                                  <span className="simu-electric left"></span>
                                                  <span className="simu-electric right"></span>
                                              </div>
                                              <div className="link-break-line right">
                                                  <span className="item top"></span>
                                                  <span className="item bottom"></span>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-features */}
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
                                      <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Statistic</div>
                                      <div className="heading-title text-white effectFade fadeRotateX">Human-centered <br /> automation, built for <br /> production</div>
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
                                                  <div className="title fw-semibold text-body-1">OUR GROWTH</div>
                                                  <div className="statistic-number">
                                                      <span className="number text-white fw-semibold">230</span>
                                                      <span className="prefix text-brand">K</span>
                                                  </div>
                                              </div>
                                              <div className="swiper-slide">
                                                  <div className="title fw-semibold text-body-1">UPTIME FOR KEY FLOWS</div>
                                                  <div className="statistic-number">
                                                      <span className="number text-white fw-semibold">95</span>
                                                      <span className="prefix text-brand">%</span>
                                                  </div>
                                              </div>
                                              <div className="swiper-slide">
                                                  <div className="title fw-semibold text-body-1">ON TIME DELIVERY</div>
                                                  <div className="statistic-number">
                                                      <span className="number text-white fw-semibold">99</span>
                                                      <span className="prefix text-brand">%</span>
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
                  {/* section-awards */}
                  <div className="section-awards flat-spacing">
                      <div className="container">
                          <div className="heading-section center mb-48">
                              <div className="heading-sub fw-semibold style-1 mb-0 effectFade fadeUp">Awards</div>
                          </div>
                          <div className="d-grid gap-16">
                              <div className="awards-item effectFade fadeUp">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-7.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Innovation Award</div>
                                  <div className="text text-body-1 text-white">Underwriting Risk Copilot (Fintech)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2025</div>
                              </div>
                              <div className="awards-item effectFade fadeUp" data-delay="0.1">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-8.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Best Product Design</div>
                                  <div className="text text-body-1 text-white">Support Copilot (SaaS)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2025</div>
                              </div>
                              <div className="awards-item effectFade fadeUp" data-delay="0.2">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-9.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Data Excellence</div>
                                  <div className="text text-body-1 text-white">Clinical Note Summarizer (Healthcare)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2024</div>
                              </div>
                              <div className="awards-item effectFade fadeUp" data-delay="0.3">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-10.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Innovation Award</div>
                                  <div className="text text-body-1 text-white">Underwriting Risk Copilot (Fintech)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2024</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-awards */}
                  {/* section-testimonials */}
                  <div className="section-testimonials flat-spacing pt-0">
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
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 24, alignItems: 'stretch' }}>
                          {/* LEFT — Info panel */}
                          <div className="effectFade fadeUp" style={{ background: 'transparent', borderRadius: 24, padding: 40, display: 'flex', flexDirection: 'column' }}>
                              <div className="heading-section mb-24">
                                  <div className="heading-sub fw-semibold effectFade fadeUp" style={{ alignSelf: 'flex-start' }}>Contact</div>
                              </div>
                              <h3 className="fw-semibold mb-16" style={{ fontSize: 32, lineHeight: '40px', letterSpacing: '-0.02em' }}>
                                  Let&apos;s Make Your<br />Workflows Flow
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
                          <form className="contact-form-card effectFade fadeUp">
                              <h3 className="fw-semibold mb-24" style={{ fontSize: 24, lineHeight: '32px', letterSpacing: '-0.01em' }}>Send Us a Message</h3>
                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 16, marginBottom: 16 }}>
                                  <fieldset className="m-0">
                                      <label className="contact-form-label">Name</label>
                                      <input type="text" placeholder="Your name" required className="contact-form-input" />
                                  </fieldset>
                                  <fieldset className="m-0">
                                      <label className="contact-form-label">Email</label>
                                      <input type="email" placeholder="Your email" required className="contact-form-input" />
                                  </fieldset>
                              </div>
                              <fieldset className="m-0 mb-16">
                                  <label className="contact-form-label">Company</label>
                                  <input type="text" placeholder="Your company" className="contact-form-input" />
                              </fieldset>
                              <fieldset className="m-0 mb-20">
                                  <label className="contact-form-label">Message</label>
                                  <textarea placeholder="Tell us about your automation needs" className="contact-form-input contact-form-textarea"></textarea>
                              </fieldset>
                              <button type="submit" className="tf-btn w-100" style={{ background: 'var(--brand)' }}>Send Message</button>
                              <div className="text-center text-secondary mt-12" style={{ fontSize: 13 }}>We&apos;ll get back to you within 1-2 business days.</div>
                          </form>
                      </div>
                  </div>
              </div>
              {/* /section-contact */}
    </>
  )
}
