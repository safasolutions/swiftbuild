'use client'

import React from 'react'

interface FaqSectionProps {
  ptZero?: boolean
}

export default function FaqSection({ ptZero = false }: FaqSectionProps) {
  const containerClass = `section-faqs flat-spacing${ptZero ? ' pt-0' : ''}`

  return (
    <div className={containerClass}>
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
              {/* FAQ 1 */}
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

              {/* FAQ 2 */}
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

              {/* FAQ 3 */}
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

              {/* FAQ 4 */}
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

              {/* FAQ 5 */}
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

              {/* FAQ 6 */}
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

              {/* FAQ 7 */}
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
  )
}
