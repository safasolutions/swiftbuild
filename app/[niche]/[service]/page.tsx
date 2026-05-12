import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import {
  NICHE_SLUGS,
  SERVICE_SLUGS,
  getNiche,
  getService,
} from '@/lib/landing-content'
import type { NicheSlug, ServiceSlug } from '@/lib/landing-content'
import FaqItem from '@/components/FaqItem'

export const dynamicParams = false

export function generateStaticParams() {
  return NICHE_SLUGS.flatMap(niche =>
    SERVICE_SLUGS.map(service => ({ niche, service }))
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ niche: string; service: string }>
}): Promise<Metadata> {
  const { niche: nicheSlug, service: serviceSlug } = await params
  const niche = getNiche(nicheSlug)
  const service = getService(serviceSlug)
  if (!niche || !service) return {}
  return {
    title: `${service.name} for ${niche.name} — SwiftBuild`,
    description: `${service.nicheCallouts[niche.slug as NicheSlug]} Find out how SwiftBuild's ${service.name} works for ${niche.name} businesses across Canada.`,
  }
}

export default async function NicheServicePage({
  params,
}: {
  params: Promise<{ niche: string; service: string }>
}) {
  const { niche: nicheSlug, service: serviceSlug } = await params
  const niche = getNiche(nicheSlug as NicheSlug)
  const service = getService(serviceSlug as ServiceSlug)
  if (!niche || !service) notFound()

  const otherServices = SERVICE_SLUGS.filter(s => s !== service.slug).map(s => getService(s)!)
  const allFaqs = [...service.faq, ...niche.extraFaqs]

  const calUrl = `https://cal.com/${service.calLink}`

  const lightCard = {
    background: 'var(--neutral-100)',
    borderRadius: '40px',
    padding: '40px',
    boxShadow:
      '0px -8px 0px 0px #EAEAEA inset, 0px 4px 0px 0px #FFFFFF99 inset, 0px 7.77px 2.21px 0px #0000000F, 0px 3px 3px 0px #0000001A',
  }

  const darkCard = {
    background: 'var(--neutral-950)',
    borderRadius: '40px',
    padding: '40px',
    boxShadow:
      '0px -8px 0px 0px #111111 inset, 0px 4px 0px 0px #FFFFFF1A inset, 0px 7.77px 2.21px 0px #0000000F, 0px 3px 3px 0px #0000001A',
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
              {niche.name} · {service.name}
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
              Find out exactly where your {niche.name} business is {service.heroSubline}.
            </p>
            <div className="bot-btns effectFade fadeRotateX">
              <a href={calUrl} className="tf-btn">
                {service.ctaButtonText}
              </a>
              <a href={`/${niche.slug}`} className="tf-btn-2">
                All {niche.name} Services
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pain Points */}
      <div className="flat-spacing">
        <div className="container">
          <div className="heading-section mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">The Problem</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              What It's Actually Costing You
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

      {/* What It Is + Process */}
      <div className="box-white">
        <div className="flat-spacing">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 lg-mb-24">
                <div className="heading-section mb-48">
                  <div className="heading-sub fw-semibold effectFade fadeUp">{service.name}</div>
                  <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                    What It Actually Is
                  </div>
                </div>
                <p className="effectFade fadeUp">{service.whatItIs}</p>
              </div>
              <div className="col-lg-7">
                <div className="row" style={{ rowGap: '20px' }}>
                  {service.process.map((step, i) => (
                    <div key={i} className="col-md-6">
                      <div style={{ ...lightCard, padding: '32px' }}>
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
                background: 'var(--neutral-50)',
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
      </div>

      {/* Who It's For */}
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
              <div style={lightCard}>
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
              <div style={darkCard}>
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

      {/* CTA Offer Card */}
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

      {/* Packages */}
      <div className="box-white">
        <div className="flat-spacing">
          <div className="container">
            <div className="heading-section center mb-64">
              <div className="heading-sub fw-semibold effectFade fadeUp">Pricing</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                What's Included
              </div>
            </div>
            <div className="row" style={{ rowGap: '24px' }}>
              {service.packages.map((pkg, i) => (
                <div key={i} className="col-lg-4 col-md-6 d-flex">
                  <div
                    style={{
                      ...(pkg.featured ? darkCard : lightCard),
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                    }}
                    className="effectFade fadeUp"
                  >
                    <div
                      className="fw-semibold text-body-3"
                      style={{
                        color: pkg.featured ? 'var(--brand)' : 'var(--secondary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        marginBottom: '8px',
                      }}
                    >
                      {pkg.tier} · {pkg.label}
                    </div>
                    <h5
                      className="fw-semibold"
                      style={{
                        color: pkg.featured ? 'var(--white)' : 'var(--black)',
                        marginBottom: '32px',
                      }}
                    >
                      {pkg.name}
                    </h5>
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'grid',
                        gap: '12px',
                        flexGrow: 1,
                        marginBottom: '32px',
                      }}
                    >
                      {pkg.includes.map((item, j) => (
                        <li key={j} className="d-flex gap-12 align-items-start">
                          <i
                            className="icon icon-check-solid"
                            style={{
                              color: pkg.featured ? 'var(--brand)' : 'var(--brand)',
                              marginTop: '3px',
                              flexShrink: 0,
                              fontSize: '12px',
                            }}
                          />
                          <span
                            className="text-body-3 fw-semibold"
                            style={{ color: pkg.featured ? 'var(--neutral-300)' : 'var(--primary)' }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={calUrl}
                      className={pkg.featured ? 'tf-btn' : 'tf-btn-2'}
                      style={{ textAlign: 'center' }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="section-faqs flat-spacing pt-0">
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
                  {allFaqs.map((faq, i) => (
                    <FaqItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Company */}
      <div className="flat-spacing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="heading-section center mb-48">
                <div className="heading-sub fw-semibold effectFade fadeUp">About SwiftBuild</div>
                <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                  We Build for Trades.
                  <br />
                  Nothing Else.
                </div>
              </div>
              <p className="effectFade fadeUp">
                SwiftBuild is a digital agency built exclusively for trades businesses across Canada. Every
                service we offer — AI systems, automations, websites, lead capture — is designed around how
                HVAC, roofing, plumbing, and cleaning businesses actually operate. We don't adapt generic
                solutions. We build from the ground up for your industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA + Internal Nav */}
      <div className="flat-spacing pt-0">
        <div className="box-black" style={{ marginLeft: '16px', marginRight: '16px' }}>
          <div className="light-box" />
          <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
          <div className="container">
            <div
              className="text-center effectFade fadeUp"
              style={{ padding: '80px 20px 40px', position: 'relative', zIndex: 1 }}
            >
              <p
                className="text-body-1"
                style={{ color: 'var(--neutral-400)', marginBottom: '32px', maxWidth: '580px', marginLeft: 'auto', marginRight: 'auto' }}
              >
                {niche.inactionCost}
              </p>
              <a href={calUrl} className="tf-btn" style={{ marginBottom: '48px', display: 'inline-flex' }}>
                {service.ctaButtonText}
              </a>

              <div
                style={{
                  borderTop: '1px solid var(--neutral-800)',
                  paddingTop: '40px',
                  marginTop: '40px',
                }}
              >
                <p
                  className="fw-semibold text-body-3 text-neutral-400"
                  style={{ marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.08em' }}
                >
                  Other {niche.name} Services
                </p>
                <div className="d-flex gap-12 flex-wrap justify-content-center">
                  {otherServices.map(s => (
                    <a key={s.slug} href={`/${niche.slug}/${s.slug}`} className="tf-btn-2">
                      {s.name}
                    </a>
                  ))}
                  <a href={`/${niche.slug}`} className="tf-btn-2">
                    ← All {niche.name} Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
