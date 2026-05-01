// @ts-nocheck
export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
              <div className="section-hero v1">
                  <div className="hero-image">
                  </div>
                  <div className="container">
                      <div className="content-wrap text-center">
                          <div className="title text-display-2 effectFade fadeRotateX">
                              <span className="title1 fw-semibold text-gradient-1">Build Smarter with</span>
                              <br />
                              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                  <span className="fw-semibold text-gradient-1">Full-Stack AI</span>
                                  <div className="title-icon">
                                      <div className="box"></div>
                                      <div className="title-icon-wrap">
                                          <img src="/assets/images/item/item-13.svg" alt="" className="img-1 img-transform-3" />
                                          <img src="/assets/images/item/item-14.svg" alt="" className="img-2 img-transform-3" />
                                          <img src="/assets/images/item/item-15.svg" alt="" className="img-3 img-transform-3" />
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <p className="text effectFade fadeUp">
                              Unlock growth with our full-stack AI services, delivering smart, efficient solutions from <br /> strategy to deployment for innovative business success.
                          </p>
                      </div>
                  </div>
              </div>
              {/* /Hero Banner */}
              {/* section-services */}
              <div id="services" className="section-services flat-spacing">
                  <div className="container">
                      <div className="top">
                          <div className="heading-section center mb-48">
                              <div className="heading-sub fw-semibold effectFade fadeUp">Services</div>
                              <div className="heading-title text-gradient-3 effectFade fadeRotateX">End-to-End AI Services</div>
                          </div>
                          <p className="text text-center effectFade fadeUp">We turn ambiguous AI ideas into production features your users trust—combining strategy, <br /> design, engineering, and rigorous evaluation.</p>
                      </div>
                      <div className="accordion-faq_list gap-32" id="accordion-services">
                          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation">
                              <div className="accordion-action" data-bs-target="#faq-1" role="button"
                                  data-bs-toggle="collapse" aria-controls="faq-1" aria-expanded="true">
                                  <div className="accordion-title">
                                      AI Strategy & Mapping
                                      <i className="icon icon-arrow-top-right"></i>
                                  </div>
                              </div>
                              <div id="faq-1" className="collapse show" data-bs-parent="#accordion-services">
                                  <div className="accordion-content">
                                      <div className="image">
                                          <img src="/assets/images/section/service-5.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                          <div className="text-body-3 text-neutral-300 text">Identify high-ROI use cases and define a realistic, measurable AI roadmap. Our AI Strategy & Mapping process aligns technology with business goals through stakeholder discovery, KPI modeling, and data readiness assessment to ensure sustainable growth and measurable transformation outcomes.</div>
                                          <div className="list-tags">
                                              <a href="#" className="tags-item fw-semibold">Stakeholder discovery</a>
                                              <a href="#" className="tags-item fw-semibold">Value model & KPI definition</a>
                                              <a href="#" className="tags-item fw-semibold">Data readiness assessment</a>
                                          </div>
                                          <div className="text-body-1 num">01</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation">
                              <div className="accordion-action collapsed" data-bs-target="#faq-2" role="button"
                                  data-bs-toggle="collapse" aria-controls="faq-2" aria-expanded="false">
                                  <div className="accordion-title">
                                      AI UX & Product Design
                                      <i className="icon icon-arrow-top-right"></i>
                                  </div>
                              </div>
                              <div id="faq-2" className="collapse" data-bs-parent="#accordion-services">
                                  <div className="accordion-content">
                                      <div className="image">
                                          <img src="/assets/images/section/service-6.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                          <div className="text-body-3 text-neutral-300 text">Human-centered flows, prompts, and interfaces that build trust and adoption. We design intuitive AI experiences focused on transparency, usability, and engagement—helping users understand, trust, and confidently interact with intelligent systems that seamlessly integrate into their workflows for lasting impact and satisfaction.</div>
                                          <div className="list-tags">
                                              <a href="#" className="tags-item fw-semibold">Prototype flows</a>
                                              <a href="#" className="tags-item fw-semibold">Prompt  UX patterns</a>
                                              <a href="#" className="tags-item fw-semibold">Usability  testing with real users</a>
                                          </div>
                                          <div className="text-body-1 num">02</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation">
                              <div className="accordion-action collapsed" data-bs-target="#faq-3" role="button"
                                  data-bs-toggle="collapse" aria-controls="faq-3" aria-expanded="false">
                                  <div className="accordion-title">
                                      LLM / Agent Development
                                      <i className="icon icon-arrow-top-right"></i>
                                  </div>
                              </div>
                              <div id="faq-3" className="collapse" data-bs-parent="#accordion-services">
                                  <div className="accordion-content">
                                      <div className="image">
                                          <img src="/assets/images/section/service-7.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                          <div className="text-body-3 text-neutral-300 text">Domain-specific copilots and agents that plan, execute, and report. These intelligent systems are tailored to your industry, automating complex tasks, enhancing decision-making, and delivering actionable insights—empowering teams to work smarter, faster, and with greater accuracy across every stage of operations.</div>
                                          <div className="list-tags">
                                              <a href="#" className="tags-item fw-semibold">Multi-step planning</a>
                                              <a href="#" className="tags-item fw-semibold">Function calling & toolchains</a>
                                              <a href="#" className="tags-item fw-semibold">Guardrails and audit trails</a>
                                          </div>
                                          <div className="text-body-1 num">03</div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div className="accordion-faq_item style-1 effectFade fadeRotateX" role="presentation">
                              <div className="accordion-action collapsed" data-bs-target="#faq-4" role="button"
                                  data-bs-toggle="collapse" aria-controls="faq-4" aria-expanded="false">
                                  <div className="accordion-title">
                                      Data Engineering & Pipelines
                                      <i className="icon icon-arrow-top-right"></i>
                                  </div>
                              </div>
                              <div id="faq-4" className="collapse" data-bs-parent="#accordion-services">
                                  <div className="accordion-content">
                                      <div className="image">
                                          <img src="/assets/images/section/service-8.jpg" alt="" />
                                      </div>
                                      <div className="content">
                                          <div className="text-body-3 text-neutral-300 text">Reliable data flows from ingestion to features, built for scale and cost control. Our robust data engineering ensures clean, consistent, and efficient pipelines—enabling seamless integration, real-time analytics, and optimized performance that power scalable AI systems and sustainable business growth.</div>
                                          <div className="list-tags">
                                              <a href="#" className="tags-item fw-semibold">Data cleaning & chunking</a>
                                              <a href="#" className="tags-item fw-semibold">Hybrid search</a>
                                              <a href="#" className="tags-item fw-semibold">Freshness, citations, and re-ranking</a>
                                          </div>
                                          <div className="text-body-1 num">04</div>
                                      </div>
                                
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              {/* /section-services */}
              <div className="box-white">
                  {/* section-process */}
                  <div className="section-process flat-spacing">
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
                                      <div dir="ltr" className="swiper tf-swiper swiper-box-shadow" data-preview="1.78" data-tablet="1.78" data-mobile-sm="1.5" data-mobile="1.2"
                                          data-loop="false" data-center="false" data-space-lg="24" data-space-md="24" data-space="15" >
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
              </div>
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
                                                  <div className="text">info@swiftbuild.io</div>
                                              </div>
                                          </div>
                                          <div className="contact-item effectFade fadeRotateX" data-delay="0.1">
                                              <i className="icon icon-headset-solid"></i>
                                              <div className="content">
                                                  <div className="title fw-semibold mb-2">Phone number</div>
                                                  <div className="text">+1 (778) 751-3157</div>
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
