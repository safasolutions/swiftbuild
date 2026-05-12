import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import {
  SERVICE_SLUGS,
  NICHE_SLUGS,
  getService,
  getNiche,
} from '@/lib/landing-content'
import type { ServiceSlug } from '@/lib/landing-content'
import FaqItem from '@/components/FaqItem'

export const dynamicParams = false

export function generateStaticParams() {
  return SERVICE_SLUGS.map(service => ({ service }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>
}): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: `${service.name} for Trades Businesses — SwiftBuild`,
    description: `${service.descriptor}. SwiftBuild builds ${service.name} systems for HVAC, roofing, plumbing, and cleaning businesses across Canada.`,
  }
}

export default async function ServiceHubPage({
  params,
}: {
  params: Promise<{ service: string }>
}) {
  const { service: slug } = await params
  const service = getService(slug as ServiceSlug)
  if (!service) notFound()

  const niches = NICHE_SLUGS.map(n => getNiche(n)!)
  const calUrl = `https://cal.com/${service.calLink}`

  const lightCard = {
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
              {service.descriptor}
            </div>
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="fw-semibold text-gradient-1">{service.name}</span>
              <br />
              <span className="fw-semibold text-gradient-1">for Trades</span>
            </div>
            <p className="text effectFade fadeUp">
              Find out exactly where your business is {service.heroSubline}.
            </p>
            <div className="bot-btns effectFade fadeRotateX">
              <a href={calUrl} className="tf-btn">
                {service.ctaButtonText}
              </a>
              <a href="/services" className="tf-btn-2">
                All Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* What It Is + Process */}
      <div className="box-white">
        <div className="flat-spacing">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-5 lg-mb-24">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">What It Is</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                    In Plain Language
                  </div>
                </div>
                <p className="effectFade fadeUp">{service.whatItIs}</p>
              </div>
              <div className="col-lg-7">
                <div className="row" style={{ rowGap: '20px' }}>
                  {service.process.map((step, i) => (
                    <div key={i} className="col-md-6">
                      <div
                        style={{
                          background: 'var(--neutral-100)',
                          borderRadius: '32px',
                          padding: '32px',
                          boxShadow:
                            '0px -8px 0px 0px #EAEAEA inset, 0px 4px 0px 0px #FFFFFF99 inset',
                        }}
                      >
                        <div
                          className="fw-semibold"
                          style={{
                            fontSize: '48px',
                            lineHeight: 1,
                            color: 'var(--neutral-400)',
                            letterSpacing: '-0.02em',
                            marginBottom: '24px',
                          }}
                        >
                          {step.num}
                        </div>
                        <h6 className="fw-semibold" style={{ marginBottom: '12px' }}>
                          {step.title}
                        </h6>
                        <p className="text-body-3 text-secondary" style={{ marginBottom: 0 }}>
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Niches Grid */}
        <div className="flat-spacing pt-0">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Trades We Serve</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                {service.name}
                <br />
                Across Every Trade
              </div>
            </div>
            <div className="row" style={{ rowGap: '24px' }}>
              {niches.map(niche => (
                <div key={niche.slug} className="col-md-6 d-flex">
                  <div style={lightCard} className="effectFade fadeUp">
                    <div
                      className="heading-sub fw-semibold"
                      style={{ marginBottom: '16px' }}
                    >
                      {niche.name}
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
                      {service.name} for {niche.name}{' '}
                      <i className="icon icon-arrow-top-right" style={{ color: 'var(--brand)' }} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className="flat-spacing">
        <div className="container">
          <div className="heading-section mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">Deliverables</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              What You Actually Get
            </div>
          </div>
          <div className="row" style={{ rowGap: '24px' }}>
            {service.deliverables.map((d, i) => (
              <div key={i} className="col-md-6">
                <div className="d-flex gap-16 align-items-start effectFade fadeUp">
                  <i
                    className="icon icon-check-solid"
                    style={{ color: 'var(--brand)', fontSize: '18px', marginTop: '4px', flexShrink: 0 }}
                  />
                  <div>
                    <div className="fw-semibold" style={{ marginBottom: '4px' }}>
                      {d.title}
                    </div>
                    <div className="text-body-3 text-secondary">{d.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="effectFade fadeUp"
            style={{
              marginTop: '40px',
              padding: '32px 40px',
              borderRadius: '24px',
              border: '1px solid var(--neutral-200)',
            }}
          >
            <div
              className="fw-semibold text-body-3"
              style={{
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--secondary)',
                marginBottom: '10px',
              }}
            >
              The Outcome
            </div>
            <p style={{ marginBottom: 0 }}>{service.outcome}</p>
          </div>
        </div>
      </div>

      {/* CTA Offer */}
      <div className="flat-spacing pt-0">
        <div className="box-black" style={{ marginLeft: '16px', marginRight: '16px' }}>
          <div className="light-box" />
          <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
          <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
          <div className="container">
            <div
              style={{ padding: '80px 20px', position: 'relative', zIndex: 1 }}
              className="effectFade fadeUp"
            >
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h3 className="fw-semibold text-white" style={{ marginBottom: '20px' }}>
                    {service.ctaOfferTitle}
                  </h3>
                  <p
                    className="text-body-1"
                    style={{ color: 'var(--neutral-400)', marginBottom: '32px' }}
                  >
                    {service.ctaOfferDesc}
                  </p>
                  <div
                    className="d-flex gap-12 flex-wrap justify-content-center"
                    style={{ marginBottom: '40px' }}
                  >
                    {service.ctaOfferBadges.map((badge, i) => (
                      <span
                        key={i}
                        className="fw-semibold text-body-3"
                        style={{
                          padding: '8px 20px',
                          borderRadius: '99px',
                          border: '1px solid var(--neutral-700)',
                          color: 'var(--neutral-300)',
                        }}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  <a href={calUrl} className="tf-btn">
                    {service.ctaButtonText}
                  </a>
                </div>
              </div>
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
                {service.faq.map((faq, i) => (
                  <FaqItem key={i} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Internal Nav */}
      <div className="flat-spacing pt-0">
        <div className="container">
          <div className="text-center">
            <p
              className="fw-semibold text-body-3 text-secondary"
              style={{ marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}
            >
              Explore by Trade
            </p>
            <div className="d-flex gap-12 flex-wrap justify-content-center">
              {niches.map(niche => (
                <a key={niche.slug} href={`/${niche.slug}/${service.slug}`} className="tf-btn-2">
                  {service.name} for {niche.name}
                </a>
              ))}
              <a href="/services" className="tf-btn-2">
                ← All Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
