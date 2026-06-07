import type { Metadata } from 'next'
import ContactSection from '@/components/sections/ContactSection'
import FaqSection from '@/components/sections/FaqSection'

export const metadata: Metadata = {
    title: 'Contact SwiftBuild - Automate & Grow Your Trades Business',
    description: 'Ready to get found online and automate the admin eating your time? Reach out to SwiftBuild today. We help HVAC, roofing, and cleaning contractors across Canada.',
}

export default function ContactPage() {
    return (
        <>
            {/* Hero Banner */}
            <div className="section-hero v1">
                <div className="hero-image">
                </div>
                <div className="container">
                    <div className="content-wrap text-center">
                        <div className="title text-display-2 effectFade fadeRotateX">
                            <span className="title1 fw-semibold text-gradient-1">Ready to stand out?</span>
                            <br />
                            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                <span className="fw-semibold text-gradient-1">Let’s talk</span>
                            </div>
                        </div>
                        <p className="text effectFade fadeUp">
                            Let&apos;s get your trades business booked out. Send us a message or schedule your discovery call below.
                        </p>
                        <div className="bot-btns effectFade fadeRotateX" style={{ marginTop: '24px' }}>
                            <a
                                href="https://cal.com/swiftbuild/free-strategy-call"
                                className="tf-btn"
                                style={{ background: 'var(--brand)', borderRadius: '12px' }}
                            >
                                Book Your Strategy Call
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Hero Banner */}
            {/* section-contact */}
            <ContactSection />
            {/* /section-contact */}
            {/* map */}
            <div className="wg-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178784.87786483424!2d-73.85055050854425!3d45.559981504938634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a5412f36b79%3A0x35b02c375e1a15c7!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1719221598456!5m2!1sen!2sca"
                    height="660" style={{ border: "0" }} allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* /map */}
            {/* section-faqs */}
            <FaqSection />
            {/* /section-faqs */}
        </>
    )
}
