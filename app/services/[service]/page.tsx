import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  SERVICE_SLUGS,
  NICHE_SLUGS,
  getService,
  getNiche,
} from '@/lib/landing-content'
import type { ServiceSlug } from '@/lib/landing-content'
import FaqItem from '@/components/FaqItem'

export const dynamicParams = false

const SITE_URL = 'https://swiftbuild.io'
const TIER_ICONS = ['icon-clipboard-check-solid', 'icon-bolt-solid', 'icon-robot-solid']

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
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
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
              SwiftBuild Trades Solutions
            </div>
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="fw-semibold text-gradient-1">{service.name}</span>
            </div>
            <p className="text effectFade fadeUp" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              {service.descriptor}
            </p>
            <div className="bot-btns effectFade fadeRotateX">
              <a href={calUrl} className="tf-btn" style={{ background: 'var(--brand)' }}>
                {service.ctaButtonText}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="box-white">
        {/* The Problem */}
        <div className="flat-spacing" style={{ paddingBottom: 0 }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div
                  className="effectFade fadeUp"
                  style={{
                    background: 'var(--neutral-100)',
                    borderRadius: 24,
                    padding: '32px 40px',
                    borderLeft: '4px solid var(--brand)',
                  }}
                >
                  <div
                    className="fw-semibold text-body-3"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 10 }}
                  >
                    The Problem We Solve
                  </div>
                  <p className="fw-semibold" style={{ marginBottom: 0, fontSize: 18, lineHeight: '28px' }}>
                    {service.problem}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What It Is + Process */}
        <div className="flat-spacing">
          <div className="container">
            <div className="row align-items-start">
              <div className="col-lg-5 lg-mb-24">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">The Service</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                    What It Is
                  </div>
                </div>
                <p className="effectFade fadeUp text-secondary" style={{ fontSize: 16, lineHeight: '27px' }}>
                  {service.whatItIs}
                </p>
                
                <div
                  className="effectFade fadeUp"
                  style={{
                    marginTop: 32,
                    padding: '24px 28px',
                    borderRadius: '20px',
                    background: 'var(--neutral-100)',
                    borderLeft: '4px solid var(--brand)',
                  }}
                >
                  <div
                    className="fw-semibold text-body-3"
                    style={{ textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--brand)', marginBottom: 8 }}
                  >
                    The Outcome
                  </div>
                  <p className="fw-semibold" style={{ marginBottom: 0, fontSize: 15, lineHeight: '24px' }}>
                    {service.outcome}
                  </p>
                </div>
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
                          height: '100%',
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

        {/* Deliverables */}
        <div className="flat-spacing pt-0">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Deliverables</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                What You Actually Get
              </div>
            </div>
            <div className="row" style={{ rowGap: '24px' }}>
              {service.deliverables.map((d, i) => (
                <div key={i} className="col-md-6 d-flex">
                  <div
                    className="effectFade fadeUp"
                    style={{
                      background: 'var(--neutral-50)',
                      border: '1px solid var(--neutral-200)',
                      borderRadius: '24px',
                      padding: '24px',
                      width: '100%',
                      display: 'flex',
                      gap: '16px',
                      alignItems: 'start',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'var(--white)',
                        border: '1px solid var(--neutral-200)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <i className="icon icon-check-solid" style={{ color: 'var(--brand)', fontSize: '13px' }} />
                    </div>
                    <div>
                      <div className="fw-semibold" style={{ marginBottom: '4px', fontSize: '16px' }}>
                        {d.title}
                      </div>
                      <div className="text-body-3 text-secondary" style={{ lineHeight: '1.6' }}>{d.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="section-pricing flat-spacing pt-0">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Pricing</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                Clear Scope. <br />Transparent Costs.
              </div>
              <p
                className="effectFade fadeUp text-secondary"
                style={{ marginTop: 16, maxWidth: 560, marginLeft: 'auto', marginRight: 'auto', fontSize: 15, lineHeight: '24px' }}
              >
                Every project starts with a fixed quote — no hourly surprises. Pick the scope that fits your operation.
              </p>
            </div>
            <div className="row">
              {service.packages.map((pkg, i) => (
                <div key={i} className={`col-lg-4${i < 2 ? ' lg-mb-24' : ''}`}>
                  <div
                    className={`pricing-item h-100 d-flex flex-column effectFade fadeUp no-div${pkg.featured ? ' style-black' : ''}`}
                    data-delay={i ? `0.${i}` : undefined}
                  >
                    {pkg.featured && <div className="pricing-badge fw-semibold">Most Popular</div>}
                    <div className="top d-flex gap-12 align-items-center">
                      <div className="d-flex gap-8 align-items-center">
                        <i className={`icon ${TIER_ICONS[i % TIER_ICONS.length]} fs-24`} />
                        <div className="fw-semibold text">{pkg.label}</div>
                      </div>
                      <div className="line" />
                      <div className={`fw-semibold ${pkg.featured ? 'text-neutral-400' : 'text-secondary'}`}>
                        Tier {pkg.tier}
                      </div>
                    </div>
                    <div className="heading">
                      <div>
                        <div className="price-number fw-bold" style={{ fontSize: 28, lineHeight: '36px' }}>
                          {pkg.name}
                        </div>
                        <h6 className="price-per" style={{ marginTop: 8 }}>fixed-price quote</h6>
                      </div>
                    </div>
                    <div className="line" />
                    <div className="content" style={{ flexDirection: 'column', flexGrow: 1 }}>
                      <ul className="list-text type-check" style={{ width: '100%' }}>
                        {pkg.includes.map((item, j) => (
                          <li key={j}><i className="icon icon-check-solid" />{item}</li>
                        ))}
                      </ul>
                    </div>
                    <a
                      href="/contact"
                      className="tf-btn"
                      style={{ marginTop: 32, justifyContent: 'center', ...(pkg.featured ? { background: 'var(--brand)' } : {}) }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
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
                  <a href={calUrl} className="tf-btn" style={{ background: 'var(--brand)' }}>
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
              Questions, Answered
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
