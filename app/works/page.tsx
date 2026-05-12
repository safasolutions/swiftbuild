// @ts-nocheck
import SelectedWorkSection from '@/components/SelectedWorkSection'

export default function WorksPage() {
  return (
    <>
      {/* Hero Banner */}
              <div className="section-hero v1">
                  <div className="hero-image">
                  </div>
                  <div className="container">
                      <div className="content-wrap text-center">
                          <div className="title text-display-2 effectFade fadeZoom">
                              <span className="title1 fw-semibold text-gradient-1">Explore Our Finest</span>
                              <br />
                              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                  <span className="fw-semibold text-gradient-1">AI Work</span>
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
                              Where innovation meets intelligence. Discover data-driven solutions, smart automation, and <br /> transformative projects shaping the future of businesses worldwide.
                          </p>
                          <p className="text effectFade fadeUp">
                              We've built production systems across industries. Now we're focused on bringing that same execution to trades businesses across Canada — at a price point that makes sense.
                          </p>
                      </div>
                  </div>
              </div>
              {/* /Hero Banner */}
              {/* section-featured-works */}
              <SelectedWorkSection />
              {/* /section-featured-works */}
              <div className="box-white">
                  {/* section-delay */}
                  <div className="section-delay flat-spacing">
                      <div className="container">
                          <div className="heading-section center mb-64">
                              <div className="heading-sub fw-semibold effectFade fadeUp">Why Delay Hurts</div>
                              <div className="heading-title text-gradient-3 effectFade fadeRotateX">The longer you wait, the harder <br /> it is to catch up.</div>
                          </div>
                          <div className="delay-wrap">
                              <div className="delay-item">
                                  <div className="left">
                                      <h6 className="effectFade fadeUp title fw-semibold mb-12">Manual Operations Slow Progress</h6>
                                      <h6 className="effectFade fadeUp title fw-semibold">/ 01</h6>
                                  </div>
                                  <div className="right">
                                      <div className="delay-progress mb-12">
                                          <div className="progress-line" data-progress="80"></div>
                                          <h4 className="number-progress fw-semibold text-white">80%</h4>
                                      </div>
                                      <div className="text text-secondary text-end">/Workload</div>
                                  </div>
                              </div>
                              <div className="delay-item">
                                  <div className="left">
                                      <h6 className="effectFade fadeUp title fw-semibold mb-12">Competitors Outpace Innovation</h6>
                                      <h6 className="effectFade fadeUp title fw-semibold">/ 02</h6>
                                  </div>
                                  <div className="right">
                                      <div className="delay-progress mb-12">
                                          <div className="progress-line" data-progress="65"></div>
                                          <h4 className="number-progress fw-semibold text-white">65%</h4>
                                      </div>
                                      <div className="text text-secondary text-end">/Growth</div>
                                  </div>
                              </div>
                              <div className="delay-item">
                                  <div className="left">
                                      <h6 className="effectFade fadeUp title fw-semibold mb-12">Automation Potential Remains Untapped</h6>
                                      <h6 className="effectFade fadeUp title fw-semibold">/ 03</h6>
                                  </div>
                                  <div className="right">
                                      <div className="delay-progress mb-12">
                                          <div className="progress-line" data-progress="70"></div>
                                          <h4 className="number-progress fw-semibold text-white">70%</h4>
                                      </div>
                                      <div className="text text-secondary text-end">/Opportunities</div>
                                  </div>
                              </div>
                              <div className="delay-item">
                                  <div className="left">
                                      <h6 className="effectFade fadeUp title fw-semibold mb-12">Repetition Replaces Creativity</h6>
                                      <h6 className="effectFade fadeUp title fw-semibold">/ 04</h6>
                                  </div>
                                  <div className="right">
                                      <div className="delay-progress mb-12">
                                          <div className="progress-line" data-progress="49"></div>
                                          <h4 className="number-progress fw-semibold text-white">49%</h4>
                                      </div>
                                      <div className="text text-secondary text-end">/Draining Time</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  {/* /section-delay */}
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
