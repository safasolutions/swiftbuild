// @ts-nocheck
import type { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'

export const metadata: Metadata = {
    title: 'Trades Marketing & Operations Services — SwiftBuild',
    description: 'Explore our web design, local SEO search visibility, workflow task automation, and automated voice agent services designed exclusively for service contractors.',
}

export default function ServicesPage() {
    return (
        <>
            {/* Hero Banner */}
            <div className="section-hero v1">
                <div className="hero-image">
                </div>
                <div className="container">
                    <div className="content-wrap text-center">
                        <div className="sub fw-semibold effectFade fadeUp">
                            What We Build for Trades
                        </div>
                        <div className="title text-display-2 effectFade fadeRotateX">
                            <span className="title1 fw-semibold text-gradient-1">Build smarter with</span>
                            <br />
                            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                <span className="fw-semibold text-gradient-1">full-stack delivery</span>
                            </div>
                        </div>
                        <p className="text effectFade fadeUp">
                            Unlock growth with our full-stack services, delivering smart, efficient solutions from <br /> strategy to deployment for trades businesses across Canada.
                        </p>
                    </div>
                </div>
            </div>
            {/* /Hero Banner */}
            {/* section-services */}
            <ServicesSection />
            {/* /section-services */}
            {/* section-faqs */}
            <FaqSection />
            {/* /section-faqs */}
            {/* section-contact */}
            <ContactSection />
            {/* /section-contact */}
        </>
    )
}
