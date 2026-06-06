// @ts-nocheck
import type { Metadata } from 'next'
import SelectedWorkSection from '@/components/SelectedWorkSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Our Work - Case Studies & Trades Projects — SwiftBuild',
  description: 'See how SwiftBuild helps Canadian HVAC, roofing, and cleaning companies get booked and automate operations. Read our latest client success stories.',
}

export default function WorksPage() {
  return (
    <>
      {/* Hero Banner */}
      <div className="section-hero v1">
        <div className="hero-image"></div>
        <div className="container">
          <div className="content-wrap text-center">
            <div className="title text-display-2 effectFade fadeZoom">
              <span className="title1 fw-semibold text-gradient-1">Projects That</span>
              <br />
              <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                <span className="fw-semibold text-gradient-1">Drive Results</span>
              </div>
            </div>

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

      {/* section-faqs */}
      <FaqSection />
      {/* /section-faqs */}

      {/* section-contact */}
      <ContactSection />
      {/* /section-contact */}
    </>
  )
}
