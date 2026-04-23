// @ts-nocheck
'use client'

import { useEffect } from 'react'

export default function HomePage() {
  useEffect(() => {
    document.body.classList.add('counter-scroll')
    return () => { document.body.classList.remove('counter-scroll') }
  }, [])

  return (
    <>
      {/* Hero Banner */}
              <div className="section-hero">
                  <div className="hero-image"></div>
                  <div className="container">
                      <div className="content-wrap text-center">
                          <div className="sub fw-semibold effectFade fadeUp">
                              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M3.53252 12.0966C3.75106 11.5025 4.59108 11.5025 4.81645 12.0966L5.54037 14.0567C5.60866 14.2411 5.75891 14.3913 5.9433 14.4596L7.90335 15.1835C8.49751 15.4021 8.49751 16.2421 7.90335 16.4674L5.9433 17.1914C5.75891 17.2597 5.60866 17.4099 5.54037 17.5943L4.81645 19.5543C4.59791 20.1485 3.75789 20.1485 3.53252 19.5543L2.8086 17.5943C2.74031 17.4099 2.59006 17.2597 2.40566 17.1914L0.44562 16.4674C-0.14854 16.2489 -0.14854 15.4089 0.44562 15.1835L2.40566 14.4596C2.59006 14.3913 2.74031 14.2411 2.8086 14.0567L3.53252 12.0966Z" fill="url(#paint0_linear_580_105)"/>
                                  <path d="M3.53252 12.0966C3.75106 11.5025 4.59108 11.5025 4.81645 12.0966L5.54037 14.0567C5.60866 14.2411 5.75891 14.3913 5.9433 14.4596L7.90335 15.1835C8.49751 15.4021 8.49751 16.2421 7.90335 16.4674L5.9433 17.1914C5.75891 17.2597 5.60866 17.4099 5.54037 17.5943L4.81645 19.5543C4.59791 20.1485 3.75789 20.1485 3.53252 19.5543L2.8086 17.5943C2.74031 17.4099 2.59006 17.2597 2.40566 17.1914L0.44562 16.4674C-0.14854 16.2489 -0.14854 15.4089 0.44562 15.1835L2.40566 14.4596C2.59006 14.3913 2.74031 14.2411 2.8086 14.0567L3.53252 12.0966Z" fill="url(#paint1_linear_580_105)"/>
                                  <path d="M11.4068 0.670991C11.7346 -0.223664 12.9981 -0.223664 13.3259 0.670991L14.7874 4.61157C14.8898 4.89157 15.1152 5.11011 15.3952 5.21938L19.3358 6.68088C20.2304 7.00869 20.2304 8.27214 19.3358 8.59995L15.3952 10.0614C15.1152 10.1639 14.8967 10.3893 14.7874 10.6693L13.3259 14.6098C12.9981 15.5045 11.7346 15.5045 11.4068 14.6098L9.94534 10.6693C9.8429 10.3893 9.61753 10.1707 9.33752 10.0614L5.39694 8.59995C4.50229 8.27214 4.50229 7.00869 5.39694 6.68088L9.33752 5.21938C9.61753 5.11694 9.83607 4.89157 9.94534 4.61157L11.4068 0.670991Z" fill="url(#paint2_linear_580_105)"/>
                                  <path d="M11.4068 0.670991C11.7346 -0.223664 12.9981 -0.223664 13.3259 0.670991L14.7874 4.61157C14.8898 4.89157 15.1152 5.11011 15.3952 5.21938L19.3358 6.68088C20.2304 7.00869 20.2304 8.27214 19.3358 8.59995L15.3952 10.0614C15.1152 10.1639 14.8967 10.3893 14.7874 10.6693L13.3259 14.6098C12.9981 15.5045 11.7346 15.5045 11.4068 14.6098L9.94534 10.6693C9.8429 10.3893 9.61753 10.1707 9.33752 10.0614L5.39694 8.59995C4.50229 8.27214 4.50229 7.00869 5.39694 6.68088L9.33752 5.21938C9.61753 5.11694 9.83607 4.89157 9.94534 4.61157L11.4068 0.670991Z" fill="url(#paint3_linear_580_105)"/>
                                  <defs>
                                  <linearGradient id="paint0_linear_580_105" x1="10.2993" y1="-1.30435" x2="21.6031" y2="11.1057" gradientUnits="userSpaceOnUse">
                                  <stop offset="1" stopColor="#555D64"/>
                                  <stop offset="1" stopColor="#292C2E"/>
                                  </linearGradient>
                                  <linearGradient id="paint1_linear_580_105" x1="10.0034" y1="0" x2="10.0034" y2="20" gradientUnits="userSpaceOnUse">
                                  <stop offset="1" stopColor="#EA2B16"/>
                                  <stop offset="1" stopColor="#FF3B26"/>
                                  </linearGradient>
                                  <linearGradient id="paint2_linear_580_105" x1="10.2993" y1="-1.30435" x2="21.6031" y2="11.1057" gradientUnits="userSpaceOnUse">
                                  <stop offset="1" stopColor="#555D64"/>
                                  <stop offset="1" stopColor="#292C2E"/>
                                  </linearGradient>
                                  <linearGradient id="paint3_linear_580_105" x1="10.0034" y1="0" x2="10.0034" y2="20" gradientUnits="userSpaceOnUse">
                                  <stop offset="1" stopColor="#EA2B16"/>
                                  <stop offset="1" stopColor="#FF3B26"/>
                                  </linearGradient>
                                  </defs>
                              </svg>
                              AI-Driven Agency
                          </div>
                          <div className="title text-display-2 effectFade fadeRotateX">
                              <span className="title1 fw-semibold text-gradient-1">Your AI Sprint Team</span>
                              <br />
                              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                  <span className="fw-semibold text-gradient-1">on Demand</span>
                                  <div className="title-icon">
                                      <div className="box"></div>
                                      <div className="title-icon-wrap">
                                          <img className="img-1 img-transform-3" src="/assets/images/item/hero-1.svg" alt="" />
                                          <img className="img-2 img-transform-3" src="/assets/images/item/hero-2.svg" alt="" />
                                          <img className="img-3 img-transform-3" src="/assets/images/item/hero-3.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <p className="text effectFade fadeUp">
                              From discovery to deployment, we plug into your stack to prototype, <br /> validate, and launch AI experiences your users actually love.
                          </p>
                          <div className="bot-btns effectFade fadeRotateX">
                              <a href="/services" className="tf-btn">
                                  Explore Services
                              </a>
                              <a href="#pricing" className="tf-btn-2">
                                  View Pricing Plans
                              </a>
                          </div>
                      </div>
                  </div>
                  <a href="#about" className="scroll-more">
                      <span className="fw-semibold link1">Scroll for more</span>
                      <i className="icon icon-long-arrow-alt-down-solid"></i>
                  </a>
              </div>
              {/* /Hero Banner */}
              {/* section-about-us */}
              <div className="section-about-us flat-spacing" id="about">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="heading-section">
                                  <div className="heading-sub fw-semibold effectFade fadeUp">About Us</div>
                                  <div className="heading-title text-gradient-2 effectFade fadeRotateX">Human-Centered AI, <br /> Built for Production</div>
                              </div>
                          </div>
                          <div className="col-xxl-7 col-lg-6 lg-mb-24">
                              <div className="col-left">
                                  <div className="position-relative z-5">
                                      <div className="sub text-white">
                                          <span className="dot"></span>
                                          Available for worldwide project
                                      </div>
                                      <h5 className="title fw-semibold text-white">Based in <span className="text-brand">Montréal, Canada</span></h5>
                                      <a href="/contact" className="tf-btn">
                                          Start a Project
                                      </a>
                                  </div>
                                  <img className="effectFade fadeRotateX" src="/assets/images/item/earth.png" alt="" />
                              </div>
                          </div>
                          <div className="col-xxl-5 col-lg-6">
                              <div className="review-box mb-24">
                                  <div className="desc fw-semibold text-body-1">Trusted by 120+ clients across 4 industries - <br /> shipping AI from idea to production in 8–10 weeks</div>
                                  <div className="d-flex justify-content-between flex-wrap align-items-end gap-12">
                                      <div className="">
                                          <div className="d-flex gap-4 text mb-10">
                                              <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path d="M12.6792 18.3019L18.1887 16.9057L20.4906 24L12.6792 18.3019ZM25.3585 9.13208H15.6604L12.6792 0L9.69811 9.13208H0L7.84906 14.7925L4.86792 23.9245L12.717 18.2641L17.5472 14.7925L25.3585 9.13208Z" fill="#219653"/>
                                              </svg>
                                              Trustpilot
                                          </div>
                                          <div className="d-flex gap-2">
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect width="24" height="24" fill="#3F3F46"/>
                                                  <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white"/>
                                              </svg>
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect width="24" height="24" fill="#3F3F46"/>
                                                  <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white"/>
                                              </svg>
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect width="24" height="24" fill="#3F3F46"/>
                                                  <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white"/>
                                              </svg>
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect width="24" height="24" fill="#3F3F46"/>
                                                  <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white"/>
                                              </svg>
                                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <rect width="24" height="24" fill="#3F3F46"/>
                                                  <path d="M11.9996 16.4114L15.6496 15.4341L17.1746 20.4001L11.9996 16.4114ZM20.3996 9.99255H13.9746L11.9996 3.6001L10.0246 9.99255H3.59961L8.79961 13.9548L6.82461 20.3473L12.0246 16.385L15.2246 13.9548L20.3996 9.99255Z" fill="white"/>
                                              </svg>
                                          </div>
                                      </div>
                                      <div className="counter text-neutral-200">
                                          <span className="number" data-speed="1500" data-to="120" data-inviewport="yes">10</span><span>+</span>
                                      </div>
                                  </div>
                              </div>
                              <div className="box-quotes effectFade fadeRotateX">
                                  <div className="image ">
                                      <img src="/assets/images/section/quotes-1.jpg" alt="" />
                                  </div>
                                  <div className="content">
                                      <div className="icon mb-8">
                                          <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#E4E4E7"/>
                                          </svg>
                                      </div>
                                      <div className="text-body-1 fw-semibold desc">Good AI feels obvious—because the hard work is hidden.</div>
                                      <div className="cite">
                                          <div className="name text-body-3 fw-semibold">Ava Collins</div>
                                          <div className="line"></div>
                                          <div className="sub text-body-3">SwiftBuild’s Design Lead</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* /section-about-us */}
              {/* section-partner */}
              <div className="section-partner">
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="partner-wrap">
                                  <p className="text-secondary text fw-semibold">Trusted by 100+ <br /> top-tier brands</p>
                                  <div className="infiniteSlide_tech_main d-grid">
                                      <div className="infiniteSlide infiniteSlide_partner" data-clone="5">
                                          <img src="/assets/images/partner/partner-1.svg" alt="" />
                                          <img src="/assets/images/partner/partner-2.svg" alt="" />
                                          <img src="/assets/images/partner/partner-3.svg" alt="" />
                                          <img src="/assets/images/partner/partner-4.svg" alt="" />
                                          <img src="/assets/images/partner/partner-5.svg" alt="" />
                                          <img src="/assets/images/partner/partner-6.svg" alt="" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* /section-partner */}

              <div className="box-white">
                  {/* section-services */}
                  <div id="services" className="section-services flat-spacing">
                      <div className="container">
                          <div className="row justify-content-between">
                              <div className="col-xxl-4 col-lg-6">
                                  <div className="d-flex flex-column justify-content-between h-100">
                                      <div className="col-left">
                                          <div className="heading-section mb-48">
                                              <div className="heading-sub fw-semibold effectFade fadeUp">Services</div>
                                              <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End <br /> AI Services</div>
                                          </div>
                                          <p className="effectFade fadeUp">We turn ambiguous AI ideas into production features your users trust—combining strategy, design, engineering, and rigorous evaluation.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-xxl-6 col-lg-6">
                                  <div className="accordion-faq_list" id="accordion-services">
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn active-img" data-img="/assets/images/section/service-1.jpg" data-bs-target="#faq-1" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-1" aria-expanded="true">
                                              <div className="accordion-title">
                                                  AI Strategy <br /> & Mapping
                                                  <div className="text-body-1 num">(01)</div>
                                              </div>
                                          </div>
                                          <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Identify high-ROI use cases and define a realistic, measurable AI roadmap.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Stakeholder discovery</a>
                                                      <a href="#" className="tags-item fw-semibold">Value model & KPI definition</a>
                                                      <a href="#" className="tags-item fw-semibold">Data readiness assessment</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-2.jpg" data-bs-target="#faq-2" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-2" aria-expanded="false">
                                              <div className="accordion-title">
                                                  AI UX <br /> & Product Design
                                                  <div className="text-body-1 num">(02)</div>
                                              </div>
                                          </div>
                                          <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Human-centered flows, prompts, and interfaces that build trust and adoption.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Prototype flows</a>
                                                      <a href="#" className="tags-item fw-semibold">Prompt UX patterns</a>
                                                      <a href="#" className="tags-item fw-semibold">Usability testing with real users</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-3.jpg" data-bs-target="#faq-3" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-3" aria-expanded="false">
                                              <div className="accordion-title">
                                                  LLM / Agent <br /> Development
                                                  <div className="text-body-1 num">(03)</div>
                                              </div>
                                          </div>
                                          <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Domain-specific copilots and agents that plan, execute, and report.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Multi-step planning</a>
                                                      <a href="#" className="tags-item fw-semibold">Function calling & toolchains</a>
                                                      <a href="#" className="tags-item fw-semibold">Guardrails and audit trails</a>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="accordion-faq_item effectFade fadeUp" role="presentation">
                                          <div className="accordion-action services-image-btn collapsed" data-img="/assets/images/section/service-4.jpg" data-bs-target="#faq-4" role="button"
                                              data-bs-toggle="collapse" aria-controls="faq-4" aria-expanded="false">
                                              <div className="accordion-title">
                                                  Data Engineering <br /> & Pipelines
                                                  <div className="text-body-1 num">(04)</div>
                                              </div>
                                          </div>
                                          <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                                              <div className="accordion-content">
                                                  <div className="text-body-3 text-neutral-300 text">Reliable data flows from ingestion to features, built for scale and cost control.</div>
                                                  <div className="list-tags">
                                                      <a href="#" className="tags-item fw-semibold">Data cleaning & chunking</a>
                                                      <a href="#" className="tags-item fw-semibold">Hybrid search</a>
                                                      <a href="#" className="tags-item fw-semibold">Freshness, citations, and re-ranking</a>
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
                                      <div className="image main-mouse-hover">
                                          <img src="/assets/images/section/featured-works-1.jpg" alt="" />
                                          <a href="/works/single" className="tf-mouse view-project h6">
                                              View Project
                                              <i className="icon icon-arrow-top-right"></i>
                                          </a>
                                      </div>
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span className="active"></span>
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">Support Copilot <br /> for SaaS</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Draft replies and pulls account context; reduced first-response time by 38%.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold text-body-3">AI strategy, AI UX flows, <br /> LLM agent, RAG</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold text-body-3">SaaS</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="">
                                  <div className="featured-works-item ">
                                      <div className="image main-mouse-hover">
                                          <img src="/assets/images/section/featured-works-2.jpg" alt="" />
                                          <a href="/works/single" className="tf-mouse view-project h6">
                                              View Project
                                              <i className="icon icon-arrow-top-right"></i>
                                          </a>
                                      </div>
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span></span>
                                              <span className="active"></span>
                                              <span></span>
                                              <span></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">Underwriting <br /> Risk Copilot</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Built a triage assistant to summarize claims; cut manual review time by 42%.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold">Use-case mapping, Prompt & UI patterns</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold">Fintech</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="">
                                  <div className="featured-works-item ">
                                      <div className="image main-mouse-hover">
                                          <img src="/assets/images/section/featured-works-3.jpg" alt="" />
                                          <a href="/works/single" className="tf-mouse view-project h6">
                                              View Project
                                              <i className="icon icon-arrow-top-right"></i>
                                          </a>
                                      </div>
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span></span>
                                              <span></span>
                                              <span className="active"></span>
                                              <span></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">Clinical Note <br /> Summarizer</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Clinic-lobby assistant answering pre-visit questions; decreased front-desk calls by 28%.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold">PHI-safe RAG, HIPAA-aligned workflows</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold">Healthcare</div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="">
                                  <div className="featured-works-item ">
                                      <div className="image main-mouse-hover">
                                          <img src="/assets/images/section/featured-works-4.jpg" alt="" />
                                          <a href="/works/single" className="tf-mouse view-project h6">
                                              View Project
                                              <i className="icon icon-arrow-top-right"></i>
                                          </a>
                                      </div>
                                      <div className="content">
                                          <div className="pagi-dot">
                                              <span></span>
                                              <span></span>
                                              <span></span>
                                              <span className="active"></span>
                                          </div>
                                          <div className="bot">
                                              <h4 className="heading fw-semibold">Catalog Intelligence <br /> Engine</h4>
                                              <div className="grid-text">
                                                  <div className="item">
                                                      <div className="title text-secondary">DESCRIPTION</div>
                                                      <div className="text-body-3 fw-semibold">Launched a shopping copilot that understands attributes; raised add-to-cart by 12%.</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">DELIVERABLES</div>
                                                      <div className="fw-semibold">Data cleaning & embeddings</div>
                                                  </div>
                                                  <div className="item">
                                                      <div className="title text-secondary">INDUSTRY</div>
                                                      <div className="fw-semibold">Ecommerce/Retail</div>
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
                                          <div className="heading-title text-gradient-3 effectFade fadeRotateX">From Idea <br /> to Production</div>
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
                                                          <h4 className="title fw-semibold">Discover & Scope</h4>
                                                          <p className="text text-secondary">Align on problems, data reality, and success metrics. Opportunity brief, KPI model, phased roadmap, effort/cost ranges.</p>
                                                      </div>
                                                      <div className="bot">
                                                          <div className="time fw-semibold">3-7 DAYS</div>
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
                                                          <h4 className="title fw-semibold">Prototype</h4>
                                                          <p className="text text-secondary">De-risk unknowns and validate value quickly. Clickable UX, tech spike repo, initial eval rubric, demo.</p>
                                                      </div>
                                                      <div className="bot">
                                                          <div className="time fw-semibold">1-2 WEEKS</div>
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
                                                          <h4 className="title fw-semibold">Validate & Evals</h4>
                                                          <p className="text text-secondary">Prove accuracy, usability, safety, and cost. Eval dashboard, acceptance thresholds, decision to iterate/ship.</p>
                                                      </div>
                                                      <div className="bot">
                                                          <div className="time fw-semibold">1 WEEKS</div>
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
                  {/* section-benefits */}
                  <div className="section-benefits flat-spacing pt-0">
                      <div className="container">
                          <div className="heading-section center mb-70">
                              <div className="heading-sub fw-semibold effectFade fadeUp">Benefits</div>
                              <div className="heading-title text-gradient-3 effectFade fadeRotateX">Why Choose Us</div>
                          </div>
                          <div className="row mb-24">
                              <div className="col-lg-7">
                                  <div className="benefits-box benefits-progress">
                                      <div className="benefits-progress-inner">
                                          <div className="benefits-progress-item">
                                              <div className="progress-line" data-progress="60"></div>
                                              <div className="progress-text fw-semibold">
                                                  <i className="icon icon-bullseye-solid"></i>
                                                  Accuracy
                                              </div>
                                          </div>
                                          <div className="benefits-progress-item">
                                              <div className="progress-line" data-progress="100"></div>
                                              <div className="progress-text fw-semibold">
                                                  <i className="icon icon-tachometer-alt-solid"></i>
                                                  Latency
                                              </div>
                                          </div>
                                          <div className="benefits-progress-item">
                                              <div className="progress-line" data-progress="40"></div>
                                              <div className="progress-text fw-semibold">
                                                  <i className="icon icon-shield-alt-solid"></i>
                                                  Safety
                                              </div>
                                          </div>
                                          <div className="benefits-progress-item">
                                              <div className="progress-line" data-progress="80"></div>
                                              <div className="progress-text fw-semibold">
                                                  <i className="icon icon-coins-solid"></i>
                                                  Cost
                                              </div>
                                          </div>
                                      </div>
                                      <div className="content">
                                          <h6 className="fw-semibold title">Outcome over Output</h6>
                                          <p className="text text-secondary">We measure what matters - accuracy, latency, safety, and <br /> cost - so every sprint ships business value, not just features.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-5">
                                  <div className="benefits-box benefits-step effectFade fadeUp">
                                      <div className="benefits-step-inner">
                                          <div className="line-step"></div>
                                          <div className="step-item">
                                              <i className="icon icon-check-solid"></i>
                                          </div>
                                          <div className="step-item">
                                              <i className="icon icon-check-solid"></i>
                                          </div>
                                          <div className="step-item">
                                              <i className="icon icon-check-solid"></i>
                                          </div>
                                      </div>
                                      <div className="content">
                                          <h6 className="fw-semibold title">Eval-First Reliability</h6>
                                          <p className="text text-secondary">From day one, we run offline/online evals, canary tests, and tracing. You see how models perform - and why.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-5">
                                  <div className="benefits-box benefits-secure ">
                                      <div className="benefits-secure-inner text-center">
                                          <img src="/assets/images/item/benefits-1.svg" alt="" />
                                      </div>
                                      <div className="content">
                                          <h6 className="fw-semibold title">Secure by Design</h6>
                                          <p className="text text-secondary">PII handling, SSO/SAML, RBAC, encryption, and audit trails -built in, not bolted on. Enterprise-ready from the start.</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-7">
                                  <div className="benefits-box benefits-design">
                                      <div className="benefits-design-inner">
                                          <img className="item-img-1" src="/assets/images/item/benefits-2.svg" alt="" />
                                          <img className="item-img-2 rightleft" src="/assets/images/item/benefits-3.png" alt="" />
                                          <img className="item-img-3 updown" src="/assets/images/item/benefits-4.png" alt="" />
                                      </div>
                                      <div className="content">
                                          <h6 className="fw-semibold title">Design-Led AI Experiences</h6>
                                          <p className="text text-secondary">We craft prompts, interfaces, and guardrails that feel intuitive - so adoption rises and support tickets fall.</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-benefits */}
                  {/* section-features */}
                  <div className="section-features flat-spacing pt-0">
                      <div className="container">
                          <div className="heading-section center mb-64">
                              <div className="heading-sub fw-semibold effectFade fadeUp">Features</div>
                              <div className="heading-title text-gradient-3 effectFade fadeRotateX">All Features in One</div>
                          </div>
                      </div>
                      <div className="position-relative">
                          <div className="container z-5">
                              <div className="features-wrap justify-content-between">
                                  <div className="features-col col-left lg-mb-24">
                                      <div className="features-item effectFade fadeUp">
                                          <i className="icon icon-robot-solid"></i>
                                          <h6 className="title fw-semibold">Agent-Powered Workflows</h6>
                                          <p className="text-secondary">
                                              Turn repetitive tasks into autonomous flows—agents plan, execute, and report with guardrails, audit trails, and clear handoff to humans.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp">
                                          <i className="icon icon-clipboard-check-solid"></i>
                                          <h6 className="title fw-semibold">Eval-First Quality</h6>
                                          <p className="text-secondary">
                                              Measure accuracy, latency, safety, and cost from day one. Our evals and dashboards keep models reliable and budgets predictable.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp">
                                          <i className="icon icon-book-solid"></i>
                                          <h6 className="title fw-semibold">Private Knowledge RAG</h6>
                                          <p className="text-secondary">
                                              Make your docs, tickets, and wikis instantly useful with retrieval augmented generation—freshness, citations, and explainability built in.
                                          </p>
                                      </div>
                                  </div>
                                  <div className="features-center flex-shrink">
                                      <img src="/assets/images/logo/logo-1.svg" alt="" />
                                  </div>
                                  <div className="features-col col-right">
                                      <div className="features-item effectFade fadeUp" data-delay="0.1">
                                          <i className="icon icon-user-check-solid"></i>
                                          <h6 className="title fw-semibold">Human-Centered AI UX</h6>
                                          <p className="text-secondary">
                                              Interfaces, prompts, and error states designed for trust and adoption—so the smart thing is also the obvious thing to do.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp" data-delay="0.1">
                                          <i className="icon icon-shield-alt-solid"></i>
                                          <h6 className="title fw-semibold">Secure by Design</h6>
                                          <p className="text-secondary">
                                              PII handling, SSO/SAML, RBAC, secrets management, and compliance workflows—ship AI that’s safe, auditable, and enterprise-ready.
                                          </p>
                                      </div>
                                      <div className="features-item effectFade fadeUp" data-delay="0.1">
                                          <i className="icon icon-plug-solid"></i>
                                          <h6 className="title fw-semibold">Seamless Integrations</h6>
                                          <p className="text-secondary">
                                              Plug into your stack (CRM, helpdesk, ERP, data warehouse) with webhooks and APIs to turn insights into action—fast.
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
        
              {/* section-tools */}
              <div className="section-tools flat-spacing">
                  <img className="img-1 img-grow-1" src="/assets/images/item/item-4.svg" alt="" />
                  <img className="img-2 img-grow-2" src="/assets/images/item/item-5.svg" alt="" />
                  <img className="img-3 img-grow-3" src="/assets/images/item/item-6.svg" alt="" />
                  <img className="img-4 img-grow-4" src="/assets/images/item/item-7.svg" alt="" />
                  <img className="img-5 img-grow-5" src="/assets/images/item/item-8.svg" alt="" />
                  <img className="img-6 img-grow-6" src="/assets/images/item/item-9.svg" alt="" />
                  <div className="container">
                      <div className="row justify-content-center">
                          <div className="col-xl-5 col-md-8 text-center">
                              <div className="heading-section center mb-48">
                                  <div className="heading-sub fw-semibold effectFade fadeUp">Tools</div>
                                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">We work with powerful AI tools</div>
                              </div>
                              <div className="text effectFade fadeUp">
                                  We design, build, and evaluate with a modern AI stack—LLMs, vector search, orchestration, and observability—so your features are fast, reliable, and secure.
                              </div>
                              <a href="/contact" className="tf-btn effectFade fadeRotateX">
                                  Get Started
                              </a>
                          </div>
                      </div>
                  </div>
              </div>
              {/* /section-tools */}

              <div className="box-black">
                  <div className="light-box"></div>
                  <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
                  <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
            
                  {/* section-team */}
                  <div className="section-team flat-spacing">
                      <div className="container">
                          <div className="heading-section center mb-64">
                              <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Team Members</div>
                              <div className="heading-title text-white effectFade fadeRotateX">The Squad Shipping <br /> Your AI</div>
                          </div>
                          <div className="row justify-content-center">
                              <div className="col-lg-4 col-md-8 lg-mb-24">
                                  <div className="team-item h-100 effectFade fadeUp">
                                      <div className="image">
                                          <img src="/assets/images/team/team-1.jpg" alt="" />
                                      </div>
                                      <a href="#" className="name h6 fw-semibold">Ava Collins</a>
                                      <div className="sub text-body-1">SwiftBuild’s Design Lead</div>
                                      <div className="tf-social justify-content-center">
                                          <a href="#" className="social-item">
                                              <i className="icon icon-twitter-x"></i>
                                          </a>
                                          <a href="#" className="social-item">
                                              <i className="icon icon-linkedin-in"></i>
                                          </a>
                                          <a href="#" className="social-item">
                                              <i className="icon icon-github"></i>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6 lg-mb-24">
                                  <div className="team-item style-1 mb-24 effectFade fadeUp">
                                      <div className="top">
                                          <div className="image">
                                              <img src="/assets/images/team/team-2.jpg" alt="" />
                                          </div>
                                          <div className="tf-social justify-content-center">
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-github"></i>
                                              </a>
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-linkedin-in"></i>
                                              </a>
                                          </div>
                                      </div>
                                      <a href="#" className="name text-body-1 fw-semibold">Noah Reed</a>
                                      <div className="sub">ML/Agent Lead. Builds domain agents</div>
                                  </div>
                                  <div className="team-item style-1 effectFade fadeUp">
                                      <div className="top">
                                          <div className="image">
                                              <img src="/assets/images/team/team-3.jpg" alt="" />
                                          </div>
                                          <div className="tf-social justify-content-center">
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-github"></i>
                                              </a>
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-linkedin-in"></i>
                                              </a>
                                          </div>
                                      </div>
                                      <a href="#" className="name text-body-1 fw-semibold">Lucas Hayes</a>
                                      <div className="sub">Solutions Architect. Connects AI to your stack</div>
                                  </div>
                              </div>
                              <div className="col-lg-4 col-md-6">
                                  <div className="team-item style-1 mb-24 effectFade fadeUp" data-delay="0.1">
                                      <div className="top">
                                          <div className="image">
                                              <img src="/assets/images/team/team-4.jpg" alt="" />
                                          </div>
                                          <div className="tf-social justify-content-center">
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-github"></i>
                                              </a>
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-linkedin-in"></i>
                                              </a>
                                          </div>
                                      </div>
                                      <a href="#" className="name text-body-1 fw-semibold">Jordan Brooks</a>
                                      <div className="sub">Data Engineer. Secure access policies</div>
                                  </div>
                                  <div className="team-item style-1 effectFade fadeUp" data-delay="0.1">
                                      <div className="top">
                                          <div className="image">
                                              <img src="/assets/images/team/team-5.jpg" alt="" />
                                          </div>
                                          <div className="tf-social justify-content-center">
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-github"></i>
                                              </a>
                                              <a href="#" className="social-item">
                                                  <i className="icon icon-linkedin-in"></i>
                                              </a>
                                          </div>
                                      </div>
                                      <a href="#" className="name text-body-1 fw-semibold">Erin Park</a>
                                      <div className="sub">MLOps Engineer. Productionizes with CI/CD</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-team */}
                  {/* section-statistic */}
                  <div className="section-statistic">
                      <div className="line"></div>
                      <div className="container">
                          <div className="row justify-content-between">
                              <div className="col-md-6">
                                  <div className="heading-section mb-48">
                                      <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Statistic</div>
                                      <div className="heading-title text-white effectFade fadeRotateX">Human-centered <br /> AI, built for <br /> production</div>
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
                                  <div className="title text-body-1 text-white">Innovation in AI</div>
                                  <div className="text text-body-1 text-white">Underwriting Risk Copilot (Fintech)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2025</div>
                              </div>
                              <div className="awards-item effectFade fadeUp" data-delay="0.1">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-8.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Best AI Product Design</div>
                                  <div className="text text-body-1 text-white">Support Copilot (SaaS)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2025</div>
                              </div>
                              <div className="awards-item effectFade fadeUp" data-delay="0.2">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-9.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Data & AI Excellence</div>
                                  <div className="text text-body-1 text-white">Clinical Note Summarizer (Healthcare)</div>
                                  <div className="year text-body-1 text-neutral-400">/ 2024</div>
                              </div>
                              <div className="awards-item effectFade fadeUp" data-delay="0.3">
                                  <div className="image">
                                      <img src="/assets/images/partner/partner-10.svg" alt="" />
                                  </div>
                                  <div className="title text-body-1 text-white">Innovation in AI</div>
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
                                      <div className="accordion-asked-title" id="asked1">
                                          <button className="accordion-button text-body-1 fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                              What’s the typical timeline from idea to v1?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse1" role="region" className="accordion-collapse collapse show" aria-labelledby="asked1" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.1">
                                      <div className="accordion-asked-title" id="asked2">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="false" aria-controls="collapse2">
                                              What do we need to start?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse2" role="region" className="accordion-collapse collapse" aria-labelledby="asked2" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.2">
                                      <div className="accordion-asked-title" id="asked3">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3">
                                              Which models/stack do you use?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse3" role="region" className="accordion-collapse collapse" aria-labelledby="asked3" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
                                          </div>
                                      </div>
                                  </div>
                                  <div className="accordion-asked-item effectFade fadeRotateX" data-delay="0.3">
                                      <div className="accordion-asked-title" id="asked4">
                                          <button className="accordion-button text-body-1 fw-semibold collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                                              Are model/API costs included in pricing?
                                              <span className="right-icon"></span>
                                          </button>
                                      </div>
                                      <div id="collapse4" role="region" className="accordion-collapse collapse" aria-labelledby="asked4" data-bs-parent="#accordion-asked">
                                          <div className="accordion-body">
                                              A clear problem statement, success metrics, access to sample data, and a stakeholder who can make decisions. We’ll run a kickoff workshop to align scope.
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
              <div id="contact" className="flat-spacing pt-0">
                  <div className="section-contact">
                      <div className="contact-image">
                          <img src="/assets/images/section/contact-image-bg.jpg" alt="" />
                      </div>
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="col-left">
                                      <div className="heading-section mb-48">
                                          <div className="heading-sub fw-semibold effectFade fadeUp">Contact</div>
                                          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                                              Let’s Build <br /> Intelligent Things
                                          </div>
                                      </div>
                                      <div>
                                          <div className="contact-item mb-20 effectFade fadeRotateX">
                                              <i className="icon icon-envelope-solid"></i>
                                              <div className="content">
                                                  <div className="title fw-semibold mb-2">E-mail address</div>
                                                  <div className="text">hello@youraiagency.com</div>
                                              </div>
                                          </div>
                                          <div className="contact-item effectFade fadeRotateX" data-delay="0.1">
                                              <i className="icon icon-headset-solid"></i>
                                              <div className="content">
                                                  <div className="title fw-semibold mb-2">Phone number</div>
                                                  <div className="text">+1 (647) 555 0172</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className="col-lg-6">
                                  <form className="form-contact effectFade fadeUp">
                                      <h4 className="heading fw-semibold">Fill this form below</h4>
                                      <fieldset className="mb-21">
                                          <label className="fw-semibold text-body-3 mb-20">Your Name</label>
                                          <input className="" type="text" placeholder="Enter your full name" required />
                                      </fieldset>
                                      <fieldset className="mb-21">
                                          <label className="fw-semibold text-body-3 mb-20">Your Phone</label>
                                          <input className="" type="text" placeholder="Enter the e-mail" required />
                                      </fieldset>
                                      <fieldset className="mb-18">
                                          <label className="fw-semibold text-body-3 mb-0">More About The Project</label>
                                          <textarea name="text" className=""></textarea>
                                      </fieldset>
                                      <div className="attachment d-flex gap-8 align-items-center">
                                          <i className="icon icon-paperclip-solid fs-24"></i>
                                          <div className="fw-semibold text-body-3">Add an Attachment</div>
                                      </div>
                                      <button type="submit" className="tf-btn w-100">Submit Message</button>
                                  </form>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* /section-contact */}
    </>
  )
}
