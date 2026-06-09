// @ts-nocheck

const PROJECTS = [
  {
    slug: 'support-copilot',
    title1: 'Support Copilot',
    title2: 'for SaaS',
    heroText: 'Deployed an smart copilot that drafts replies and pulls account context, reducing first-response time by 38% and significantly improving customer satisfaction scores.',
    heroImage: '/assets/images/section/featured-works-1.jpg',
    details: `Support Copilot for SaaS is an smart assistant designed to help support teams respond to customer queries faster and more accurately. It automatically retrieves account context, surfaces relevant knowledge-base articles, and drafts suggested replies — enabling agents to focus on empathy and complex problem-solving rather than repetitive lookups. Leveraging large language models and retrieval-augmented generation (RAG), the copilot integrates directly with existing ticketing systems and CRMs, ensuring every agent has full context before responding.

Key features include real-time account context surfacing, tone-matched reply drafting, escalation detection, and a feedback loop that continuously improves suggestion quality. The system also provides analytics on deflection rates, agent override patterns, and customer satisfaction trends.

By combining generated drafts with human review, the copilot maintains brand voice and accuracy while dramatically reducing handle times. Teams reported a 38% decrease in first-response time and measurable improvements in CSAT scores within the first quarter of deployment.`,
    research: `The project began with a deep-dive into the support team's workflow — mapping ticket categories, escalation triggers, and the most common knowledge-base queries. We found that agents spent 40–50% of their time on repetitive lookups and copy-paste responses, leaving limited bandwidth for genuinely complex issues.

We evaluated multiple RAG architectures before settling on a hybrid dense-sparse retrieval approach that balanced precision and recall across the client's heterogeneous knowledge base. Prompt engineering iterations focused on tone consistency and reducing hallucinated account details — a critical safety requirement for customer-facing outputs.

Shadow-mode testing ran for three weeks before live deployment, allowing us to measure draft acceptance rates and identify edge cases without any customer impact.`,
    results: `Deploying Support Copilot for SaaS delivered measurable gains within weeks. First-response time dropped by 38%, agent-handle time fell by 22%, and the rate of escalations requiring senior review decreased by 15%. Draft acceptance rates stabilised at 71% after the second iteration of prompt tuning, indicating strong alignment with agent preferences.

Customer satisfaction scores improved by 9 points (NPS) over the first quarter. Support leadership highlighted the reduction in onboarding time for new agents — with the copilot surfacing context and suggested replies, new hires reached full productivity in roughly half the previous timeline. The system continues to improve through weekly fine-tuning cycles driven by agent feedback.`,
    deliverables: ['Strategy', 'UX flows', 'LLM agent', 'RAG'],
    industry: ['SaaS'],
    nextSlug: 'underwriting-risk-copilot',
    nextTitle1: 'Underwriting',
    nextTitle2: 'Risk Copilot',
    nextImage: '/assets/images/section/featured-works-2.jpg',
    nextDesc: 'Built a triage assistant to summarize claims; cut manual review time by 42%.',
    nextDeliverables: 'Use-case mapping, Prompt & UI patterns',
    nextIndustry: 'Fintech',
    nextDot: [false, true, false, false],
  },
  {
    slug: 'underwriting-risk-copilot',
    title1: 'Underwriting',
    title2: 'Risk Copilot',
    heroText: 'Built a triage assistant that summarizes insurance claims and flags risk signals, cutting manual underwriter review time by 42% and accelerating policy decisions.',
    heroImage: '/assets/images/section/featured-works-2.jpg',
    details: `Underwriting Risk Copilot is an triage system built for a mid-size insurance carrier to accelerate the review of incoming claims and new-business applications. The copilot ingests unstructured documents — PDFs, medical records, financial statements — and produces structured summaries highlighting risk signals, missing data, and recommended next steps. Underwriters see the most critical information first, reducing time spent reading raw documents.

The system integrates with the carrier's existing policy administration platform, pulling historical loss data to contextualize each application. A confidence-scoring layer flags low-certainty extractions for human review, ensuring accuracy on high-stakes decisions without sacrificing speed.

Key capabilities include multi-document summarization, risk-factor extraction, missing-data detection, and a natural-language Q&A interface allowing underwriters to drill into any claim detail without leaving their workflow.`,
    research: `Initial discovery revealed that underwriters spent an average of 2.4 hours per complex application simply reading and organizing documents. We mapped the full review workflow across three product lines — personal lines, commercial lines, and specialty risks — to identify where automation could add the most leverage.

Data sensitivity was a primary constraint: all processing had to remain on-premises. We designed a hybrid architecture using a fine-tuned open-weight model for extraction and a proprietary classifier for risk scoring, ensuring no PHI or financially sensitive data left the carrier's environment.

Pilot testing with 12 underwriters over six weeks validated the confidence-scoring thresholds and identified two additional risk signals (prior-claim frequency and geographic concentration) that improved model precision by 8 percentage points.`,
    results: `Manual review time per complex application dropped by 42% in the first month post-launch. Underwriters processed 30% more applications per day without additional headcount. Error rates in risk-factor capture fell by 35% compared to manual extraction, and the rate of incomplete submissions returned to applicants decreased by 19% as the copilot automatically flagged missing documents upfront.

Senior underwriters reported higher job satisfaction, spending more time on nuanced risk judgement and less on administrative data gathering. The carrier is now extending the system to two additional product lines, with plans to add a real-time risk-scoring API for broker portals.`,
    deliverables: ['Use-case mapping', 'Prompt & UI patterns'],
    industry: ['Fintech'],
    nextSlug: 'clinical-note-summarizer',
    nextTitle1: 'Clinical Note',
    nextTitle2: 'Summarizer',
    nextImage: '/assets/images/section/featured-works-3.jpg',
    nextDesc: 'Clinic-lobby assistant answering pre-visit questions; decreased front-desk calls by 28%.',
    nextDeliverables: 'PHI-safe RAG, HIPAA-aligned workflows',
    nextIndustry: 'Healthcare',
    nextDot: [false, false, true, false],
  },
  {
    slug: 'clinical-note-summarizer',
    title1: 'Clinical Note',
    title2: 'Summarizer',
    heroText: 'Deployed a clinic-lobby smart assistant that answers pre-visit patient questions, reducing front-desk call volume by 28% and freeing clinical staff for higher-value interactions.',
    heroImage: '/assets/images/section/featured-works-3.jpg',
    details: `Clinical Note Summarizer is a HIPAA-compliant smart assistant designed for outpatient clinic environments. Deployed on lobby kiosks and a patient-facing web portal, it answers common pre-visit questions — appointment preparation, medication instructions, insurance verification, and clinic directions — without requiring front-desk staff intervention.

The system is built on a PHI-safe RAG architecture that retrieves information solely from the clinic's approved knowledge base, ensuring no patient data is used in model responses. All interactions are logged for compliance review, and the system escalates to a human agent for any query outside its confidence threshold.

Key features include natural-language question answering, appointment reminder confirmation, pre-visit checklist delivery, and seamless handoff to front-desk staff with full conversation context when escalation is needed.`,
    research: `Discovery workshops with clinic managers and front-desk staff identified four question categories accounting for 73% of all pre-visit calls: appointment prep, medication questions, insurance/billing, and directions. These became the initial scope for the knowledge base.

HIPAA alignment required a privacy-by-design approach: the RAG pipeline retrieves only from curated, de-identified content, and conversation logs are stored in the clinic's own HIPAA-compliant infrastructure. We conducted a formal risk assessment and threat-modelling exercise before finalising the architecture.

Beta testing ran across two clinic locations for eight weeks, with front-desk staff reviewing escalated conversations daily to identify knowledge gaps and retrain the retrieval model. Patient satisfaction surveys showed high comfort with the automated interface across age groups.`,
    results: `Front-desk call volume related to pre-visit questions dropped by 28% within the first six weeks of deployment. Staff time freed from repetitive calls was reallocated to more complex patient needs and administrative tasks, with no increase in headcount. Patient no-show rates declined by 6% as automated reminders and preparation checklists improved appointment readiness.

Escalation rates dropped from 34% in the first week to 11% by week eight as the knowledge base was refined. Clinic managers reported measurable improvements in front-desk staff wellbeing, citing reduced interruption frequency as a key factor. The system is now being extended to post-visit follow-up and prescription refill status queries.`,
    deliverables: ['PHI-safe RAG', 'HIPAA-aligned workflows'],
    industry: ['Healthcare'],
    nextSlug: 'catalog-intelligence-engine',
    nextTitle1: 'Catalog Intelligence',
    nextTitle2: 'Engine',
    nextImage: '/assets/images/section/featured-works-4.jpg',
    nextDesc: 'Launched a shopping copilot that understands attributes; raised add-to-cart by 12%.',
    nextDeliverables: 'Data cleaning & embeddings',
    nextIndustry: 'Ecommerce/Retail',
    nextDot: [false, false, false, true],
  },
  {
    slug: 'catalog-intelligence-engine',
    title1: 'Catalog Intelligence',
    title2: 'Engine',
    heroText: 'Launched a shopping copilot that interprets product attributes, boosting add-to-cart rates by 12% and enhancing the overall customer experience.',
    heroImage: '/assets/images/section/featured-works-4.jpg',
    details: `Catalog Intelligence Engine is an smart platform designed to optimize product catalog management for e-commerce and retail businesses. It automates product classification, attribute extraction, enrichment, and consistency checks, reducing manual effort and improving customer experience. Leveraging natural language processing, computer vision, and machine learning, the engine identifies product categories, extracts key attributes (e.g., size, color, material), and detects anomalies or missing information. It integrates with existing catalog management systems, PIM platforms, and marketplaces to ensure seamless updates and synchronization across channels.

Key features include automatic product tagging, duplicate detection, attribute standardization, and real-time catalog analytics.

By continuously learning from historical data and market trends, the system improves accuracy and efficiency over time. The solution enables teams to manage large and complex catalogs, reduce errors, and accelerate time-to-market for new products. With enhanced catalog quality, businesses can deliver better search, filtering, and recommendation experiences, ultimately boosting conversion and customer satisfaction. Overall, Catalog Intelligence Engine transforms catalog management into a smarter, faster, and more reliable process, empowering teams to scale operations while maintaining high-quality product data.`,
    research: `Catalog Intelligence Engine is an smart platform designed to optimize product catalog management for e-commerce and retail businesses. It automates product classification, attribute extraction, enrichment, and consistency checks, reducing manual effort and improving customer experience. Leveraging natural language processing, computer vision, and machine learning, the engine identifies product categories, extracts key attributes (e.g., size, color, material), and detects anomalies or missing information. It integrates with existing catalog management systems, PIM platforms, and marketplaces to ensure seamless updates and synchronization across channels.

Key features include automatic product tagging, duplicate detection, attribute standardization, and real-time catalog analytics.

efficiency over time. The solution enables teams to manage large and complex catalogs, reduce errors, and accelerate time-to-market for new products. With enhanced catalog quality, businesses can deliver better search, filtering, and recommendation experiences, ultimately boosting conversion and customer satisfaction. Overall, Catalog Intelligence Engine transforms catalog management into a smarter, faster, and more reliable process, empowering teams to scale operations while maintaining high-quality product data.`,
    results: `The deployment of Catalog Intelligence Engine delivered measurable improvements in catalog management efficiency and quality. Manual effort for product classification and attribute entry decreased by 50%, while duplicate listings and inconsistencies dropped by over 40%. Automated tagging and attribute standardization enhanced search accuracy and recommendation relevance, contributing to higher user engagement and conversion rates. Real-time analytics allowed managers to monitor catalog health, identify gaps, and make data-driven decisions.The engine also improved scalability, enabling businesses to onboard large numbers of products quickly without compromising data quality. Feedback from catalog teams highlighted a significant reduction in operational workload, faster time-to-market for new products, and improved confidence in product information accuracy.Overall, the Catalog Intelligence Engine transformed catalog management into a smarter, faster, and more reliable process, driving operational efficiency, better customer experiences, and measurable business value for e-commerce organizations.`,
    deliverables: ['Data cleaning', 'Embeddings'],
    industry: ['Ecommerce/Retail'],
    nextSlug: 'support-copilot',
    nextTitle1: 'Support Copilot',
    nextTitle2: 'for SaaS',
    nextImage: '/assets/images/section/featured-works-1.jpg',
    nextDesc: 'Draft replies and pulls account context; reduced first-response time by 38%.',
    nextDeliverables: 'Strategy, UX flows, LLM agent, RAG',
    nextIndustry: 'SaaS',
    nextDot: [true, false, false, false],
  },
]

export default async function WorksSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug) ?? PROJECTS[3]

  return (
    <>
      {/* Hero Banner */}
      <div className="section-hero v2">
        <div className="hero-image"></div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="title1 fw-semibold text-gradient-1">{project.title1}</span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">{project.title2}</span>
              </div>
            </div>
            <p className="text effectFade fadeUp">{project.heroText}</p>
          </div>
        </div>
      </div>
      {/* /Hero Banner */}
      {/* section-work-single */}
      <div id="works" className="section-work-single flat-spacing pt-0">
        <div className="container">
          <div className="row mb-32">
            <div className="col-12">
              <div className="wrap-image mb-60 effectFade fadeZoom">
                <img src="/assets/images/section/work-single-1.jpg" alt="" />
              </div>
              <h2 className="heading fw-semibold mb-32 effectFade fadeUp">Project Details</h2>
              <p className="text-secondary effectFade fadeUp" style={{ whiteSpace: 'pre-line' }}>
                {project.details}
              </p>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-md-8 md-mb-24">
              <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp">DELIVERABLES</div>
              <div className="list-tags effectFade fadeUp">
                {project.deliverables.map((d) => (
                  <a key={d} href="#" className="tags-item fw-semibold">{d}</a>
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-body-1 fw-semibold text-secondary mb-15 effectFade fadeUp" data-delay="0.1">INDUSTRY</div>
              <div className="list-tags effectFade fadeUp" data-delay="0.1">
                {project.industry.map((i) => (
                  <a key={i} href="#" className="tags-item fw-semibold">{i}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-12">
              <div className="wrap-image effectFade fadeZoom">
                <img src="/assets/images/section/work-single-2.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Project Research</h2>
              <p className="text-secondary effectFade fadeUp" style={{ whiteSpace: 'pre-line' }}>
                {project.research}
              </p>
            </div>
          </div>
          <div className="row mb-60">
            <div className="col-12">
              <h2 className="heading fw-semibold mb-20 effectFade fadeUp">Project Results</h2>
              <p className="text-secondary effectFade fadeUp">
                {project.results}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 md-mb-24">
              <div className="image effectFade fadeUp">
                <img src="/assets/images/section/work-single-3.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="image effectFade fadeUp" data-delay="0.1">
                <img src="/assets/images/section/work-single-4.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /section-work-single */}
      {/* box-black (testimonials) — commented out
      <div className="box-black">
        <div className="light-box"></div>
        <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
        <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
        <div className="section-testimonials flat-spacing">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Testimonials</div>
              <div className="heading-title text-white effectFade fadeRotateX">What Our Clients Says</div>
            </div>
            <div className="testimonials-v2-wrap">
              <div className="col-left">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.375 70.4063V41.0938C44.375 33.0729 47.0729 26.3646 52.4687 20.9688C58.0104 15.4271 65.5208 11.6354 75 9.59375V29.0625C71.3542 30.2292 68.9479 31.6875 67.7812 33.4375C66.6146 35.0417 65.9583 37.0833 65.8125 39.5625H75V70.4063H44.375ZM5 70.4063V41.0938C5 33.0729 7.69792 26.3646 13.0938 20.9688C18.6354 15.4271 26.1458 11.6354 35.625 9.59375V29.0625C32.125 30.2292 29.7187 31.6875 28.4062 33.4375C27.2396 35.0417 26.5833 37.0833 26.4375 39.5625H35.625V70.4063H5Z" fill="#27272A" />
                </svg>
                <div className="swiper-testimonial_wrap">
                  <div dir="ltr" className="swiper tf-swiper swiper-testimonial">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div>
                          <div className="top-icon d-flex gap-4">
                            <i className="icon icon-star-solid"></i><i className="icon icon-star-solid"></i>
                            <i className="icon icon-star-solid"></i><i className="icon icon-star-solid"></i>
                            <i className="icon icon-star-solid"></i>
                          </div>
                          <div className="text-body-1 text-white desc">
                            We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                          </div>
                          <div className="cite mb-0">
                            <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                            <div className="name text-body-3 text-neutral-400 fw-semibold">Elena Ruiz</div>
                            <div className="line"></div>
                            <div className="sub text-body-3 text-neutral-400">Cantos SaaS's VP Product</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <div className="top-icon d-flex gap-4">
                            <i className="icon icon-star-solid"></i><i className="icon icon-star-solid"></i>
                            <i className="icon icon-star-solid"></i><i className="icon icon-star-solid"></i>
                            <i className="icon icon-star-solid"></i>
                          </div>
                          <div className="text-body-1 text-white desc">
                            SSO/SAML and RBAC landed smoothly. Latency stayed below 300ms on p95 — huge win for our agents.
                          </div>
                          <div className="cite mb-0">
                            <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                            <div className="name text-body-3 text-neutral-400 fw-semibold">Marcus Tan</div>
                            <div className="line"></div>
                            <div className="sub text-body-3 text-neutral-400">VectorPay's CTO</div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <div className="top-icon d-flex gap-4">
                            <i className="icon icon-star-solid"></i><i className="icon icon-star-solid"></i>
                            <i className="icon icon-star-solid"></i><i className="icon icon-star-solid"></i>
                            <i className="icon icon-star-solid"></i>
                          </div>
                          <div className="text-body-1 text-white desc">
                            The best partner for agentic work. Multi-step planning, tool use, and audit trails—done right the first time.
                          </div>
                          <div className="cite mb-0">
                            <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                            <div className="name text-body-3 text-neutral-400 fw-semibold">David Kim</div>
                            <div className="line"></div>
                            <div className="sub text-body-3 text-neutral-400">Northway's Ecommerce Director</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-right">
                <div dir="ltr" className="swiper sw-main-image">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <div className="testimonial-image-v2"><img src="/assets/images/section/tes-1.jpg" alt="" /></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-image-v2"><img src="/assets/images/section/tes-2.jpg" alt="" /></div>
                    </div>
                    <div className="swiper-slide">
                      <div className="testimonial-image-v2"><img src="/assets/images/section/tes-3.jpg" alt="" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */}
      {/* Next Project */}
      <div className="section-featured-works flat-spacing">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">Project</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">Next Project</div>
          </div>
          <div className="featured-works-list position-relative">
            <div className="element effectFade fadeUp">
              <div className="featured-works-item">
                <div className="image main-mouse-hover">
                  <img src={project.nextImage} alt="" />
                  <a href={`/works/${project.nextSlug}`} className="tf-mouse view-project h6">
                    View Project
                    <i className="icon icon-arrow-top-right"></i>
                  </a>
                </div>
                <div className="content">
                  <div className="pagi-dot">
                    {project.nextDot.map((active, i) => (
                      <span key={i} className={active ? 'active' : ''}></span>
                    ))}
                  </div>
                  <div className="bot">
                    <h4 className="heading fw-semibold">{project.nextTitle1} <br /> {project.nextTitle2}</h4>
                    <div className="grid-text">
                      <div className="item">
                        <div className="title text-secondary">DESCRIPTION</div>
                        <div className="text-body-3 fw-semibold">{project.nextDesc}</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">DELIVERABLES</div>
                        <div className="fw-semibold">{project.nextDeliverables}</div>
                      </div>
                      <div className="item">
                        <div className="title text-secondary">INDUSTRY</div>
                        <div className="fw-semibold">{project.nextIndustry}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Next Project */}
    </>
  )
}
