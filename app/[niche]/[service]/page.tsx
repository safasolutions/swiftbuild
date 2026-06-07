import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  NICHE_SLUGS,
  SERVICE_SLUGS,
  getNiche,
  getService,
} from '@/lib/landing-content'
import type { NicheSlug, ServiceSlug } from '@/lib/landing-content'
import FaqItem from '@/components/FaqItem'

export const dynamicParams = false

const SITE_URL = 'https://swiftbuild.io'

const TIER_ICONS = ['icon-clipboard-check-solid', 'icon-bolt-solid', 'icon-robot-solid']

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
  const title = `${service.name} for ${niche.name} — SwiftBuild`
  const description = `${service.nicheCallouts[niche.slug as NicheSlug]} Find out how SwiftBuild's ${service.name} works for ${niche.name} businesses across Canada.`
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}/${niche.slug}/${service.slug}` },
    openGraph: { title, description, url: `${SITE_URL}/${niche.slug}/${service.slug}`, type: 'website' },
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
  const calUrl = `https://cal.com/${service.calLink}`

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: niche.name, item: `${SITE_URL}/${niche.slug}` },
      { '@type': 'ListItem', position: 3, name: service.name, item: `${SITE_URL}/${niche.slug}/${service.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <div className="section-hero v1">
        <div className="hero-image" />
        <div className="container">
          <div className="content-wrap text-center">
            <div className="sub fw-semibold effectFade fadeUp">
              <span className="dot" />
              For {niche.name} Businesses · Canada
            </div>
            <div className="title text-display-2 effectFade fadeRotateX">
              <span className="fw-semibold text-gradient-1">{service.name}</span>
            </div>
            <p className="text effectFade fadeUp" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              {service.nicheCallouts[niche.slug]}
            </p>
            <div className="bot-btns effectFade fadeRotateX">
              <a href="/contact" className="tf-btn" style={{ background: 'var(--brand)', borderRadius: '12px' }}>
                Get a Free Quote
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
                    The Problem
                  </div>
                  <p className="fw-semibold" style={{ marginBottom: 0, fontSize: 18, lineHeight: '28px' }}>
                    {service.problem}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What It Is + Deliverables */}
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
              <div className="col-lg-6 offset-lg-1">
                <div
                  className="effectFade fadeUp"
                  style={{
                    background: 'var(--neutral-50)',
                    border: '1px solid var(--neutral-200)',
                    borderRadius: 24,
                    padding: '32px 36px',
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between" style={{ marginBottom: 12 }}>
                    <h6 className="fw-semibold mb-0">What you get</h6>
                    <span className="fw-semibold text-brand text-body-3">
                      {String(service.deliverables.length).padStart(2, '0')} deliverables
                    </span>
                  </div>
                  <div>
                    {service.deliverables.map((d, i) => (
                      <div
                        key={i}
                        className="d-flex gap-16 align-items-start effectFade fadeUp"
                        style={{ padding: '16px 0', borderTop: i ? '1px solid var(--neutral-200)' : 'none' }}
                      >
                        <div
                          style={{
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            background: 'var(--white)',
                            border: '1px solid var(--neutral-200)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <i className="icon icon-check-solid" style={{ color: 'var(--brand)', fontSize: 13 }} />
                        </div>
                        <div>
                          <div className="fw-semibold" style={{ marginBottom: '2px', fontSize: 15 }}>
                            {d.title}
                          </div>
                          <div className="text-body-3 text-secondary">{d.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
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

        {/* FAQs */}
        <div className="section-faqs flat-spacing pt-0">
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
      </div>

      {/* CTA + Other Services */}
      <div className="flat-spacing pt-0">
        <div className="box-black" style={{ marginLeft: '16px', marginRight: '16px' }}>
          <div className="light-box" />
          <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
          <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />
          <div className="container">
            <div
              className="text-center effectFade fadeUp"
              style={{ padding: '80px 20px 40px', position: 'relative', zIndex: 1 }}
            >
              <h3 className="fw-semibold text-white" style={{ marginBottom: '20px' }}>
                {service.ctaOfferTitle}
              </h3>
              <p
                className="text-body-1"
                style={{ color: 'var(--neutral-400)', marginBottom: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}
              >
                {service.ctaOfferDesc}
              </p>
              <div className="d-flex gap-12 flex-wrap justify-content-center" style={{ marginBottom: '40px' }}>
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

              <div style={{ borderTop: '1px solid var(--neutral-800)', paddingTop: '40px', marginTop: '48px' }}>
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
