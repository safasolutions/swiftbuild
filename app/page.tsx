import type { Metadata } from 'next'
import AuditCtaButton from '@/components/ui/AuditCtaButton'
import WorkspaceTimeline from '@/components/sections/WorkspaceTimeline'
import PricingSection from '@/components/sections/PricingSection'
import UnifiedOfferings from '@/components/sections/UnifiedOfferings'
import SelectedWorkSection from '@/components/SelectedWorkSection'
import ServicesSection from '@/components/sections/ServicesSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
    title: 'SwiftBuild - Web Design & Automation for Canadian Trades',
    description: 'Get more roofing, HVAC, and cleaning jobs. We build high-converting websites, manage local SEO, and automate operations for trades contractors across Canada.',
}

export default function HomePage() {
    return (
        <>
            {/* Hero Banner */}
            <div className="section-hero">
                <div className="hero-image" style={{ opacity: 0.7 }}></div>
                <div className="container">
                    <div className="content-wrap text-center">
                        <div className="sub fw-semibold effectFade fadeUp">
                            Digital Solutions for Trades Businesses
                        </div>
                        <div className="title text-display-2 effectFade fadeRotateX">
                            <span className="title1 fw-semibold text-gradient-1">Stand out.</span>
                            <br />
                            <div className="title2 d-flex gap-20 justify-content-center flex-wrap">
                                <span className="fw-semibold text-gradient-1">Stay booked.</span>
                            </div>
                        </div>
                        <p className="text effectFade fadeUp" style={{ maxWidth: 640, marginLeft: 'auto', marginRight: 'auto' }}>
                            We help roofing, HVAC, and cleaning companies across Canada get found online, look professional, and automate the admin that&apos;s eating your time — so you can focus on the work that pays.
                        </p>
                        <div className="bot-btns effectFade fadeRotateX">
                            <a
                                href="https://cal.com/swiftbuild/free-strategy-call"
                                className="tf-btn"
                                style={{ background: 'var(--brand)' }}
                            >
                                Book Your Automation Audit
                            </a>
                        </div>
                        <div className="effectFade fadeUp fw-semibold" style={{ marginTop: 16, fontSize: 13, color: 'var(--secondary)' }}>
                            Trusted by 35+ trades businesses across Canada &middot; Fixed-price quotes &middot; You own everything we build
                        </div>
                    </div>
                </div>
                <a href="#services" className="scroll-more">
                    <span className="fw-semibold link1">Scroll for more</span>
                    <i className="icon icon-long-arrow-alt-down-solid"></i>
                </a>
            </div>
            {/* /Hero Banner */}
            <div className="box-white">
                {/* section-who-we-are */}
                <div className="section-who-we-are" style={{ paddingTop: 80, paddingBottom: 40 }}>
                    <div className="container">
                        <div className="grid-collapse-lg who-we-are-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 64, alignItems: 'start' }}>
                            {/* LEFT */}
                            <div>
                                <div className="heading-section mb-24">
                                    <div className="heading-sub fw-semibold effectFade fadeUp">Who We Are</div>
                                </div>
                                <h2 className="effectFade fadeRotateX fw-semibold mb-24 who-we-are-heading" style={{ fontSize: 44, lineHeight: '52px', letterSpacing: '-0.02em' }}>
                                    Your <span className="text-brand">Strategic Partner</span> <br />for Digital Growth
                                </h2>
                                <p className="effectFade fadeUp mb-0 text-secondary" style={{ maxWidth: 520, fontSize: 15, lineHeight: '24px' }}>
                                    We build websites, SEO, and automations that book jobs, collect payments, and get you off the phone — so you can focus on the work that pays.
                                </p>
                            </div>
                            {/* RIGHT */}
                            <div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 32, rowGap: 24, marginBottom: 32 }}>
                                    <div className="effectFade fadeUp">
                                        <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>35+</div>
                                        <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>HAPPY CLIENTS</div>
                                    </div>
                                    <div className="effectFade fadeUp" data-delay="0.1">
                                        <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>180%</div>
                                        <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>AVG ROI</div>
                                    </div>
                                    <div className="effectFade fadeUp" data-delay="0.2">
                                        <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>400+</div>
                                        <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>SOLUTIONS BUILT</div>
                                    </div>
                                    <div className="effectFade fadeUp" data-delay="0.3">
                                        <div className="fw-semibold text-brand" style={{ fontSize: 44, lineHeight: 1.1, letterSpacing: '-0.02em' }}>6,000+</div>
                                        <div className="fw-semibold text-secondary" style={{ fontSize: 11, letterSpacing: '0.12em' }}>HOURS SAVED</div>
                                    </div>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', columnGap: 32, rowGap: 16, borderTop: '1px solid #E4E4E7', paddingTop: 24 }}>
                                    <div className="effectFade fadeUp d-flex align-items-center gap-12">
                                        <i className="icon icon-clipboard-check-solid text-brand" style={{ fontSize: 18 }}></i>
                                        <span className="fw-semibold" style={{ fontSize: 14 }}>Smart Invoicing</span>
                                    </div>
                                    <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.1">
                                        <i className="icon icon-user-check-solid text-brand" style={{ fontSize: 18 }}></i>
                                        <span className="fw-semibold" style={{ fontSize: 14 }}>CRM Integration</span>
                                    </div>
                                    <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.2">
                                        <i className="icon icon-search-solid text-brand" style={{ fontSize: 18 }}></i>
                                        <span className="fw-semibold" style={{ fontSize: 14 }}>Local SEO</span>
                                    </div>
                                    <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.3">
                                        <i className="icon icon-bolt-solid text-brand" style={{ fontSize: 18 }}></i>
                                        <span className="fw-semibold" style={{ fontSize: 14 }}>Custom Websites</span>
                                    </div>
                                    <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.4">
                                        <i className="icon icon-robot-solid text-brand" style={{ fontSize: 18 }}></i>
                                        <span className="fw-semibold" style={{ fontSize: 14 }}>Strategic Marketing</span>
                                    </div>
                                    <div className="effectFade fadeUp d-flex align-items-center gap-12" data-delay="0.5">
                                        <i className="icon icon-plug-solid text-brand" style={{ fontSize: 18 }}></i>
                                        <span className="fw-semibold" style={{ fontSize: 14 }}>Inbound Lead Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* problems band */}
                        <div className="problems-band effectFade fadeUp no-div">
                            <div className="problems-band-label fw-semibold">The Problems We Solve</div>
                            <div className="problems-row">
                                <div className="problems-band-item">
                                    <div className="problem-icon"><i className="icon icon-tty-solid"></i></div>
                                    <div>
                                        <div className="problem-title fw-semibold">Missed calls</div>
                                        <div className="problem-desc">Every missed call after 6pm is a job someone else booked.</div>
                                        <div className="fw-semibold" style={{ fontSize: 13, marginTop: 6, color: 'var(--brand)' }}>We route after-hours inquiries to automated follow-up so no lead falls through.</div>
                                    </div>
                                </div>
                                <div className="problems-band-item">
                                    <div className="problem-icon"><i className="icon icon-envelope-solid"></i></div>
                                    <div>
                                        <div className="problem-title fw-semibold">Cold quotes</div>
                                        <div className="problem-desc">Estimates sit in inboxes while the guy who called back first wins.</div>
                                        <div className="fw-semibold" style={{ fontSize: 13, marginTop: 6, color: 'var(--brand)' }}>We trigger automatic quote follow-ups so you&apos;re always first to respond.</div>
                                    </div>
                                </div>
                                <div className="problems-band-item">
                                    <div className="problem-icon"><i className="icon icon-clock-solid"></i></div>
                                    <div>
                                        <div className="problem-title fw-semibold">Manual chaos</div>
                                        <div className="problem-desc">Scheduling in your head, dispatch over text, invoices at midnight.</div>
                                        <div className="fw-semibold" style={{ fontSize: 13, marginTop: 6, color: 'var(--brand)' }}>We connect your calendar, dispatch, and invoicing into one automated flow.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /problems band */}
                    </div>
                </div>
                {/* /section-who-we-are */}

                {/* mid-page CTA 1 */}
                <div className="container effectFade fadeUp" style={{ paddingTop: 48, paddingBottom: 0, textAlign: 'center' }}>
                    <p className="fw-semibold mb-4" style={{ fontSize: 18, letterSpacing: '-0.01em' }}>
                        Every missed call is a job someone else booked.
                    </p>
                    <p className="text-secondary mb-20" style={{ fontSize: 15 }}>
                        We fix that — automated follow-up, 24/7.
                    </p>
                    <AuditCtaButton />
                </div>
                {/* /mid-page CTA 1 */}

                {/* section-services */}
                <ServicesSection />
                {/* /section-services */}
                {/* section-process */}
                <WorkspaceTimeline />
                {/* /section-process */}
                {/* section-features */}
                <UnifiedOfferings />
                {/* /section-features */}
                {/* section-featured-works */}
                <SelectedWorkSection noPaddingTop />
                {/* /section-featured-works */}
                {/* section-testimonials */}
                <TestimonialsSection />
                {/* /section-testimonials */}

                {/* mid-page CTA 2 */}
                <div className="effectFade fadeUp" style={{ paddingTop: 48, paddingBottom: 16, textAlign: 'center' }}>
                    <div className="container">
                        <p className="fw-semibold mb-20" style={{ fontSize: 22, letterSpacing: '-0.01em' }}>
                            Ready to stay booked?
                        </p>
                        <AuditCtaButton />
                    </div>
                </div>
                {/* /mid-page CTA 2 */}
            </div>

            {/* section-statistic — commented out
            <div className="box-black">
                <div className="light-box"></div>
                <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
                <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />

                <div className="section-statistic">
                    <div className="line"></div>
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <div className="heading-section mb-48">
                                    <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Results</div>
                                    <div className="heading-title text-white effectFade fadeRotateX">Real systems, <br /> measured results — <br /> from the work above</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="statistic-slider">
                                    <div className="text text-body-1 text-neutral-400 effectFade fadeUp">
                                        We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                                    </div>
                                    <div className="swiper swiper-progressbar">
                                        <div className="group-slider effectFade fadeUp">
                                            <div className="progress-bar">
                                                <div className="progress-fill" id="progressBar"></div>
                                            </div>
                                            <div className="group-btn-slider">
                                                <div className="btn-slider progressbar-prev">
                                                    <i className="icon icon-angle-left-solid"></i>
                                                </div>
                                                <div className="btn-slider progressbar-next">
                                                    <i className="icon icon-angle-right-solid"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-wrapper effectFade fadeUp">
                                            <div className="swiper-slide">
                                                <div className="title fw-semibold text-body-1">FOLLOW-UP RATE INCREASE &middot; AYLA CASE STUDY</div>
                                                <div className="statistic-number">
                                                    <span className="number text-white fw-semibold">300</span>
                                                    <span className="prefix text-brand">%</span>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="title fw-semibold text-body-1">TYPICAL SITE LAUNCH &middot; CLIENT WEBSITES</div>
                                                <div className="statistic-number">
                                                    <span className="number text-white fw-semibold">2&ndash;4</span>
                                                    <span className="prefix text-brand">wks</span>
                                                </div>
                                            </div>
                                            <div className="swiper-slide">
                                                <div className="title fw-semibold text-body-1">MANUAL INVOICE ENTRY &middot; INVOICE FLOW</div>
                                                <div className="statistic-number">
                                                    <span className="number text-white fw-semibold">0</span>
                                                    <span className="prefix text-brand">hrs</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            */}

            {/* section-pricing */}
            <PricingSection />
            {/* /section-pricing */}

            {/* section-faqs */}
            <FaqSection ptZero />
            {/* /section-faqs */}

            {/* section-contact */}
            <ContactSection />
            {/* /section-contact */}
        </>
    )
}
