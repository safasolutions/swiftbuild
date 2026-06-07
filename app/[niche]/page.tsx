import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Fragment } from 'react'
import { NICHE_SLUGS, SERVICE_SLUGS, getNiche, getService } from '@/lib/landing-content'
import type { NicheSlug } from '@/lib/landing-content'
import FaqItem from '@/components/FaqItem'

export const dynamicParams = false

const SITE_URL = 'https://swiftbuild.io'
const CAL_LINK = 'https://cal.com/swiftbuild/free-strategy-call'

const PAIN_ICONS = [
  'icon-bolt-solid',
  'icon-envelope-solid',
  'icon-clock-solid',
  'icon-tty-solid',
  'icon-clipboard-check-solid',
  'icon-user-check-solid',
]

const SERVICE_IMAGES = [
  '/assets/images/section/service-1.png',
  '/assets/images/section/service-2.png',
  '/assets/images/section/service-3.png',
  '/assets/images/section/service-4.png',
  '/assets/images/section/service-5.jpg',
]

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
    title: niche.seoTitle,
    description: niche.seoDescription,
    alternates: { canonical: `${SITE_URL}/${niche.slug}` },
    openGraph: {
      title: niche.seoTitle,
      description: niche.seoDescription,
      url: `${SITE_URL}/${niche.slug}`,
      type: 'website',
    },
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
  const allFaqs = [...niche.hubFaqs, ...niche.extraFaqs]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${niche.name} Websites, SEO & Lead Automation`,
    serviceType: `Websites, local SEO, and lead automation for ${niche.name.toLowerCase()} businesses`,
    description: niche.seoDescription,
    provider: { '@type': 'Organization', name: 'SwiftBuild', email: 'info@swiftbuild.io', url: SITE_URL },
    areaServed: { '@type': 'Country', name: 'Canada' },
    url: `${SITE_URL}/${niche.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: niche.name, item: `${SITE_URL}/${niche.slug}` },
    ],
  }

  const goodFitCard = {
    background: 'var(--neutral-900)',
    borderRadius: '40px',
    padding: '40px',
    boxShadow:
      '0px -8px 0px 0px #111111 inset, 0px 4px 0px 0px #FFFFFF1A inset, 0px 7.77px 2.21px 0px #0000000F, 0px 3px 3px 0px #0000001A',
    height: '100%',
  }

  const outlineCard = {
    background: 'var(--white)',
    borderRadius: '40px',
    padding: '40px',
    border: '1px solid var(--neutral-200)',
    height: '100%',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Hero */}
      <div className="section-hero v1">
        <div className="hero-image" />
        <div className="container">
          <div className="content-wrap text-center">
            <div className="sub fw-semibold effectFade fadeUp">
              <span className="dot" />
              {niche.descriptor} · Canada
            </div>
            <div className="title text-display-2 effectFade fadeRotateX">
              {niche.heroLines.map((line, i) => (
                <Fragment key={i}>
                  <span className="fw-semibold text-gradient-1">{line}</span>
                  {i < niche.heroLines.length - 1 && <br />}
                </Fragment>
              ))}
            </div>
            <p className="text effectFade fadeUp" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
              {niche.heroSubline}
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
        {/* Who We Are (trade intro) */}
        <div className="flat-spacing">
          <div className="container">
            <div
              className="grid-collapse-lg who-we-are-grid"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 64, alignItems: 'start' }}
            >
              <div>
                <div className="heading-section mb-24">
                  <div className="heading-sub fw-semibold effectFade fadeUp">Who We Are</div>
                </div>
                <h2
                  className="effectFade fadeRotateX fw-semibold mb-24 who-we-are-heading"
                  style={{ fontSize: 44, lineHeight: '52px', letterSpacing: '-0.02em' }}
                >
                  Built for <span className="text-brand">{niche.name}</span>
                  <br />
                  Businesses Across Canada
                </h2>
                <p className="effectFade fadeUp mb-0 text-secondary" style={{ maxWidth: 520, fontSize: 15, lineHeight: '24px' }}>
                  {niche.context}
                </p>
                <div className="effectFade fadeUp" style={{ marginTop: 32 }}>
                  <div
                    className="fw-semibold text-secondary"
                    style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 14 }}
                  >
                    Tools we integrate with
                  </div>
                  <div className="d-flex flex-wrap gap-12">
                    {niche.tools.map(tool => (
                      <span
                        key={tool}
                        className="fw-semibold text-body-3"
                        style={{
                          padding: '8px 16px',
                          borderRadius: '99px',
                          background: 'var(--white)',
                          border: '1px solid var(--brand)',
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="effectFade fadeUp"
                  style={{
                    background: 'var(--neutral-50)',
                    border: '1px solid var(--neutral-200)',
                    borderRadius: 24,
                    padding: 32,
                    marginTop: 48,
                  }}
                >
                  <h6 className="fw-semibold" style={{ marginBottom: 24 }}>What we provide</h6>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 24, rowGap: 20 }}>
                    {niche.provides.map((item, i) => (
                      <div key={i} className="d-flex align-items-center gap-12">
                        <div
                          style={{
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: 'var(--neutral-100)',
                            border: '1px solid var(--neutral-200)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <i className={`icon ${item.icon} text-brand`} style={{ fontSize: 16 }} />
                        </div>
                        <span className="fw-semibold" style={{ fontSize: 14 }}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Problems */}
        <div className="flat-spacing pt-0">
          <div className="container">
            <div className="heading-section center">
              <div className="heading-sub fw-semibold effectFade fadeUp">The Problems</div>
              <div className="heading-title text-gradient-3 effectFade fadeRotateX">
                Sound Familiar?
              </div>
            </div>
            <div className="problems-band effectFade fadeUp no-div" style={{ maxWidth: 1100 }}>
              <div className="problems-band-label fw-semibold">Where {niche.name} Businesses Lose Jobs</div>
              <div className="problems-row">
                {niche.painPoints.slice(0, 3).map((pp, i) => (
                  <div key={i} className="problems-band-item">
                    <div className="problem-icon"><i className={`icon ${PAIN_ICONS[i]}`} /></div>
                    <div>
                      <div className="problem-title fw-semibold">{pp.title}</div>
                      <div className="problem-desc">{pp.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="problems-row" style={{ borderTop: '1px solid var(--neutral-300)', marginTop: 24, paddingTop: 24 }}>
                {niche.painPoints.slice(3, 6).map((pp, i) => (
                  <div key={i} className="problems-band-item">
                    <div className="problem-icon"><i className={`icon ${PAIN_ICONS[i + 3]}`} /></div>
                    <div>
                      <div className="problem-title fw-semibold">{pp.title}</div>
                      <div className="problem-desc">{pp.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* What We Do — services accordion */}
        <div className="section-services flat-spacing pt-0">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xxl-4 col-lg-6">
                <div className="d-flex flex-column justify-content-between h-100">
                  <div className="col-left">
                    <div className="heading-section mb-48">
                      <div className="heading-sub fw-semibold effectFade fadeUp">Our Services</div>
                      <div className="heading-title text-gradient-3 effectFade fadeRotateX">What we do</div>
                    </div>
                    <p className="effectFade fadeUp">{niche.servicesIntro}</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6 col-lg-6">
                <div className="accordion-faq_list" id="accordion-niche-services">
                  {allServices.map((service, i) => (
                    <div key={service.slug} className="accordion-faq_item effectFade fadeUp" role="presentation">
                      <div
                        className={`accordion-action services-image-btn${i === 0 ? ' active-img' : ' collapsed'}`}
                        data-img={SERVICE_IMAGES[i]}
                        data-bs-target={`#svc-${i + 1}`}
                        role="button"
                        data-bs-toggle="collapse"
                        aria-controls={`svc-${i + 1}`}
                        aria-expanded={i === 0}
                      >
                        <div className="accordion-title">
                          {service.name}
                          <div className="text-body-1 num">({String(i + 1).padStart(2, '0')})</div>
                        </div>
                      </div>
                      <div id={`svc-${i + 1}`} className={`collapse${i === 0 ? ' show' : ''}`} data-bs-parent="#accordion-niche-services">
                        <div className="accordion-content">
                          <div className="text-body-3 text-neutral-300 text">
                            {service.nicheCallouts[niche.slug]}
                          </div>
                          <div className="list-tags">
                            <a href={`/${niche.slug}/${service.slug}`} className="tags-item fw-semibold">
                              Learn more →
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="services-image effectFade fadeUp">
                <img src={SERVICE_IMAGES[0]} alt={`${niche.name} services`} />
              </div>
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
              <div style={goodFitCard}>
                <h5 className="fw-semibold text-white" style={{ marginBottom: '32px' }}>
                  Good fit if…
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                  {niche.whoFor.good.map((item, i) => (
                    <li key={i} className="d-flex gap-12 align-items-start effectFade fadeUp">
                      <i
                        className="icon icon-check-solid"
                        style={{ color: 'var(--brand)', marginTop: '3px', flexShrink: 0 }}
                      />
                      <span className="text-body-3 fw-semibold text-white">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div style={outlineCard}>
                <h5 className="fw-semibold" style={{ marginBottom: '32px' }}>
                  Not for you if…
                </h5>
                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                  {niche.whoFor.notFor.map((item, i) => (
                    <li key={i} className="d-flex gap-12 align-items-start effectFade fadeUp">
                      <i
                        className="icon icon-times-solid"
                        style={{ color: 'var(--brand)', marginTop: '3px', flexShrink: 0 }}
                      />
                      <span className="text-body-3 fw-semibold text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
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
              <a href={CAL_LINK} className="tf-btn" style={{ background: 'var(--brand)' }}>
                Book a Free Strategy Call →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="section-faqs flat-spacing pt-0">
        <div className="container">
          <div className="heading-section center mb-64">
            <div className="heading-sub fw-semibold effectFade fadeUp">FAQs</div>
            <div className="heading-title text-gradient-3 effectFade fadeRotateX">
              {niche.name} Questions, Answered
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
    </>
  )
}
