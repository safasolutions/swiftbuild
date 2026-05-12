import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import { NICHE_SLUGS, SERVICE_SLUGS, getNiche, getService } from '@/lib/landing-content'
import type { NicheSlug } from '@/lib/landing-content'
import FaqItem from '@/components/FaqItem'

export const dynamicParams = false

export function generateStaticParams() {
  return NICHE_SLUGS.map(niche => ({ niche }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string }>
}): Promise<Metadata> {
  const { niche: slug } = await params
  const niche = getNiche(slug)
  if (!niche) return {}
  return {
    title: `${niche.name} AI Solutions — SwiftBuild`,
    description: `SwiftBuild builds AI systems, automations, websites, and lead systems specifically for ${niche.name} businesses across Canada. Find out what's right for your operation.`,
  }
}

export default async function NicheHubPage({
  params,
}: {
  params: Promise<{ niche: string }>
}) {
  const { niche: slug } = await params
  const niche = getNiche(slug as NicheSlug)
  if (!niche) notFound()

  const allServices = SERVICE_SLUGS.map(s => getService(s)!)

  const cardBox = {
    background: 'var(--neutral-100)',
    borderRadius: '40px',
    padding: '40px',
    boxShadow:
      '0px -8px 0px 0px #EAEAEA inset, 0px 4px 0px 0px #FFFFFF99 inset, 0px 7.77px 2.21px 0px #0000000F, 0px 3px 3px 0px #0000001A',
    height: '100%',
  }

  return (
    <>
      {/* Hero */}
      <div className="section-hero v1">
        <div className="hero-image" />
        <div className="container">
          <div className="content-wrap text-center">
            <div className="sub fw-semibold effectFade fadeUp">
              <span className="dot" />
              {niche.descriptor}
            </div>
            <div className="title text-display-2 effectFade fadeRotateX">
              {niche.heroLines.map((line, i) => (
                <Fragment key={i}>
                  <span className="fw-semibold text-gradient-1">{line}</span>
                  {i < niche.heroLines.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
            <p className="text effectFade fadeUp">
              We build AI systems, automations, and websites specifically for {niche.name} businesses across Canada.
            </p>
            <div className="bot-btns effectFade fadeRotateX">
              <a href="https://cal.com/devxai/ai-snapshot-call" className="tf-btn">
                Get a Free AI Snapshot →
              </a>
              <a href="/contact" className="tf-btn-2">
                Talk to Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Context + Tools */}
      <div className="box-white">
        <div className="flat-spacing">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-7 lg-mb-24">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">{niche.name}</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                    Built for {niche.name}.
                  </div>
                </div>
                <p className="effectFade fadeUp">{niche.context}</p>
              </div>
              <div className="col-lg-5">
                <h6 className="fw-semibold mb-16">Tools we integrate with</h6>
                <div className="d-flex flex-wrap gap-12">
                  {niche.tools.map(tool => (
                    <span
                      key={tool}
                      className="fw-semibold text-body-3"
                      style={{
                        padding: '8px 16px',
                        borderRadius: '99px',
                        background: 'var(--neutral-50)',
                        border: '1px solid var(--neutral-300)',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flat-spacing pt-0">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Our Services</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                What We Build for {niche.name}
              </div>
            </div>
            <div className="row" style={{ rowGap: '24px' }}>
              {allServices.map(service => (
                <div key={service.slug} className="col-xl-4 col-md-6 col-12 d-flex">
                  <div style={cardBox}>
                    <div
                      className="heading-sub fw-semibold effectFade fadeUp"
                      style={{ marginBottom: '16px' }}
                    >
                      {service.name}
                    </div>
                    <p
                      className="text-body-3"
                      style={{ color: 'var(--secondary)', marginBottom: '24px', flexGrow: 1 }}
                    >
                      {service.nicheCallouts[niche.slug]}
                    </p>
                    <a
                      href={`/${niche.slug}/${service.slug}`}
                      className="d-flex align-items-center gap-8 fw-semibold text-body-3"
                    >
                      Learn more{' '}
                      <i className="icon icon-arrow-top-right" style={{ color: 'var(--brand)' }} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="flat-spacing">
        <div className="container">
          <div className="heading-section mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">The Problems</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              Why {niche.name} Businesses
              <br />
              Are Stuck
            </div>
          </div>
          <div className="delay-wrap">
            {niche.painPoints.map((pp, i) => (
              <div key={i} className="delay-item">
                <div className="left">
                  <h6 className="fw-semibold mb-12 effectFade fadeUp">{pp.title}</h6>
                  <h6 className="fw-semibold effectFade fadeUp">/ {String(i + 1).padStart(2, '0')}</h6>
                </div>
                <div className="right">
                  <p className="text-secondary">{pp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who It's For */}
      <div className="box-white">
        <div className="flat-spacing">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Fit</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                Is This Right for You?
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 lg-mb-24">
                <div style={cardBox}>
                  <h5 className="fw-semibold" style={{ marginBottom: '32px' }}>
                    Good fit if…
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                    {niche.whoFor.good.map((item, i) => (
                      <li key={i} className="d-flex gap-12 align-items-start effectFade fadeUp">
                        <i
                          className="icon icon-check-solid"
                          style={{ color: 'var(--brand)', marginTop: '3px', flexShrink: 0 }}
                        />
                        <span className="text-body-3 fw-semibold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  style={{
                    ...cardBox,
                    background: 'var(--neutral-900)',
                    boxShadow:
                      '0px -8px 0px 0px #111111 inset, 0px 4px 0px 0px #FFFFFF1A inset, 0px 7.77px 2.21px 0px #0000000F, 0px 3px 3px 0px #0000001A',
                  }}
                >
                  <h5 className="fw-semibold text-white" style={{ marginBottom: '32px' }}>
                    Not for you if…
                  </h5>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                    {niche.whoFor.notFor.map((item, i) => (
                      <li key={i} className="d-flex gap-12 align-items-start effectFade fadeUp">
                        <i
                          className="icon icon-times-solid"
                          style={{ color: 'var(--secondary)', marginTop: '3px', flexShrink: 0 }}
                        />
                        <span className="text-body-3 fw-semibold text-neutral-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="flat-spacing pt-0">
        <div className="box-black" style={{ marginLeft: '16px', marginRight: '16px' }}>
          <div className="light-box" />
          <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
          <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
          <div className="container">
            <div
              className="text-center effectFade fadeUp"
              style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}
            >
              <h3 className="fw-semibold text-white" style={{ marginBottom: '20px' }}>
                {niche.ctaLine}
              </h3>
              <p
                className="text-body-1"
                style={{ color: 'var(--neutral-400)', marginBottom: '40px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
              >
                {niche.inactionCost}
              </p>
              <a href="https://cal.com/devxai/ai-snapshot-call" className="tf-btn">
                Book My Free Snapshot Call →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="section-faqs flat-spacing">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              Common Questions
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion-asked">
                {niche.hubFaqs.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
