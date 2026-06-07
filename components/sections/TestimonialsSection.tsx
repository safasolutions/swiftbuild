import type { CSSProperties } from 'react'

interface Testimonial {
  quote: string
  author: string
  business: string
  location: string
  rating: 5
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "SwiftBuild had our site live in under two weeks. We went from invisible on Google to getting four or five more quote requests a week — some even come through the booking form after hours.",
    author: "Jason M.",
    business: "Maple Ridge Roofing",
    location: "Calgary, AB",
    rating: 5,
  },
  {
    quote: "The missed-call text-back alone paid for itself within the first month. I used to lose jobs because I couldn't answer on the roof. Now every lead gets a reply within seconds.",
    author: "Priya K.",
    business: "ComfortLine HVAC",
    location: "Toronto, ON",
    rating: 5,
  },
  {
    quote: "Professional, fast, and they actually understand the trades. Our quote follow-ups are fully automated now — no more chasing clients at the end of a long day.",
    author: "Mike T.",
    business: "SpotlessPro Cleaning",
    location: "Ottawa, ON",
    rating: 5,
  },
  {
    quote: "We had a dated website and no real online presence. SwiftBuild fixed both. Our Google ranking went up and clients now tell us the site looks more professional than our competitors.",
    author: "Dave R.",
    business: "Northern Shield Landscaping",
    location: "Edmonton, AB",
    rating: 5,
  },
  {
    quote: "The automated review requests alone have tripled our Google reviews. We're showing up where we weren't before and the phone hasn't stopped ringing since the site launched.",
    author: "Sarah L.",
    business: "Brightworks Electrical",
    location: "Vancouver, BC",
    rating: 5,
  },
]

const TRUSTPILOT_URL = 'https://www.trustpilot.com/review/swiftbuild.ca'

function StarRating({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
      {Array.from({ length: count }).map((_, i) => (
        <i key={i} className="icon icon-star-solid" style={{ fontSize: '14px', color: 'var(--brand)' }} />
      ))}
    </div>
  )
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div style={cardStyle}>
      <StarRating count={item.rating} />
      <p style={quoteStyle}>&ldquo;{item.quote}&rdquo;</p>
      <hr style={dividerStyle} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div>
          <div className="fw-semibold text-body-3" style={{ color: 'var(--primary)', lineHeight: 1.5 }}>
            {item.author} &middot; {item.business}
          </div>
          <div className="text-body-3" style={{ color: 'var(--secondary)', marginTop: '2px' }}>
            {item.location}
          </div>
        </div>
        <span style={verifiedBadgeStyle}>
          <i className="icon icon-check-solid" style={{ fontSize: '9px' }} />
          <span>Verified</span>
        </span>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  return (
    <div className="section-testimonials-new flat-spacing">
      <div className="container">

        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Testimonials</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            What our clients say
          </div>
        </div>

        {/*
          Swiper is initialized by carousel.js on window load via .tf-swiper + data attributes.
          align-items: stretch on the wrapper + height: auto on each slide achieves equal card height.
        */}
        <div
          dir="ltr"
          className="swiper tf-swiper effectFade fadeUp"
          data-loop="true"
          data-auto="true"
          data-delay="4000"
          data-speed="700"
          data-mobile="1"
          data-mobile-sm="1"
          data-tablet="2"
          data-preview="3"
          data-laptop="3"
          data-space="24"
          data-space-md="24"
          data-space-lg="30"
          data-cursor="true"
        >
          <div className="swiper-wrapper" style={{ alignItems: 'stretch' }}>
            {TESTIMONIALS.map((item) => (
              <div key={item.author} className="swiper-slide" style={{ height: 'auto' }}>
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        <div style={trustpilotFooterStyle}>
          <span className="text-body-3" style={{ color: 'var(--secondary)' }}>
            Reviews verified on
          </span>
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={trustpilotLinkStyle}
            aria-label="View SwiftBuild reviews on Trustpilot"
          >
            <i className="icon icon-star-solid" style={{ fontSize: '13px', color: '#00B67A' }} />
            <span>Trustpilot</span>
            <i className="icon icon-arrow-top-right" style={{ fontSize: '10px' }} />
          </a>
        </div>

      </div>
    </div>
  )
}

const cardStyle: CSSProperties = {
  background: 'var(--neutral-100)',
  borderRadius: '24px',
  padding: '32px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxShadow:
    '0px -8px 0px 0px #EAEAEA inset, 0px 4px 0px 0px #FFFFFF99 inset, 0px 7.77px 2.21px 0px #0000000F, 0px 3px 3px 0px #0000001A',
}

const quoteStyle: CSSProperties = {
  fontSize: '15px',
  lineHeight: '26px',
  color: 'var(--primary)',
  margin: '0 0 24px',
  flexGrow: 1,
}

const dividerStyle: CSSProperties = {
  border: 'none',
  borderTop: '1px solid var(--neutral-200)',
  margin: '0 0 20px',
}

const verifiedBadgeStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '4px',
  background: '#F0FDF9',
  border: '1px solid #C4F3E2',
  borderRadius: '6px',
  padding: '4px 8px',
  fontSize: '11px',
  fontWeight: 600,
  color: '#00B67A',
  letterSpacing: '0.03em',
  flexShrink: 0,
  whiteSpace: 'nowrap',
}

const trustpilotFooterStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  marginTop: '48px',
}

const trustpilotLinkStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '5px',
  color: '#00B67A',
  fontWeight: 600,
  fontSize: '14px',
  textDecoration: 'none',
  letterSpacing: '-0.01em',
}
