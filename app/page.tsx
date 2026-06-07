import type { Metadata } from 'next'
import WorkspaceTimeline from '@/components/sections/WorkspaceTimeline'
import PricingSection from '@/components/sections/PricingSection'
import UnifiedOfferings from '@/components/sections/UnifiedOfferings'
import SelectedWorkSection from '@/components/SelectedWorkSection'
import ServicesSection from '@/components/sections/ServicesSection'
import FaqSection from '@/components/sections/FaqSection'
import ContactSection from '@/components/sections/ContactSection'

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
                                    We combine technical expertise with strategic vision to transform your digital presence into a high-performance engine. As your reliable strategic partner, we are committed to building long-term value through engineering excellence and consistent delivery.
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
                                    </div>
                                </div>
                                <div className="problems-band-item">
                                    <div className="problem-icon"><i className="icon icon-envelope-solid"></i></div>
                                    <div>
                                        <div className="problem-title fw-semibold">Cold quotes</div>
                                        <div className="problem-desc">Estimates sit in inboxes while the guy who called back first wins.</div>
                                    </div>
                                </div>
                                <div className="problems-band-item">
                                    <div className="problem-icon"><i className="icon icon-clock-solid"></i></div>
                                    <div>
                                        <div className="problem-title fw-semibold">Manual chaos</div>
                                        <div className="problem-desc">Scheduling in your head, dispatch over text, invoices at midnight.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /problems band */}
                    </div>
                </div>
                {/* /section-who-we-are */}
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
            </div>

            <div className="box-black">
                <div className="light-box"></div>
                <img className="light-top" src="/assets/images/item/light-top.png" alt="" />
                <img className="light-bot" src="/assets/images/item/light-bot.png" alt="" />

                {/* section-statistic */}
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
                {/* /section-statistic */}

                {/* section-testimonials */}
                <div className="section-testimonials flat-spacing">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-lg-5">
                                <div className="col-left">
                                    <div className="heading-section mb-48">
                                        <div className="heading-sub fw-semibold style-1 effectFade fadeUp">Testimonials</div>
                                        <div className="heading-title text-white effectFade fadeRotateX">What Our <br /> Clients Says</div>
                                    </div>
                                    <div className="swiper-testimonial_wrap effectFade fadeUp">
                                        <div dir="ltr" className="swiper tf-swiper swiper-testimonial">
                                            <div className="swiper-wrapper">
                                                <div className="swiper-slide">
                                                    <div>
                                                        <div className="top-icon d-flex gap-4">
                                                            <i className="icon icon-star-solid"></i>
                                                            <i className="icon icon-star-solid"></i>
                                                            <i className="icon icon-star-solid"></i>
                                                            <i className="icon icon-star-solid"></i>
                                                            <i className="icon icon-star-solid"></i>
                                                        </div>
                                                        <div className="text-body-1 text-white desc">
                                                            We shipped our first copilot in 7 weeks and cut support tickets by 31%. The eval dashboards made every decision obvious.
                                                        </div>
                                                        <div className="cite">
                                                            <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                                                            <div className="name text-body-3 text-neutral-400 fw-semibold">Elena Ruiz</div>
                                                            <div className="line"></div>
                                                            <div className="sub text-body-3 text-neutral-400">Cantos SaaS’s VP Product</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div>
                                                        <div className="top-icon">
                                                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#FD3A25" />
                                                            </svg>
                                                        </div>
                                                        <div className="text-body-1 text-white desc">
                                                            SSO/SAML and RBAC landed smoothly. Latency stayed &lt;300 ms on p95—huge win for our agents.
                                                        </div>
                                                        <div className="cite">
                                                            <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                                                            <div className="name text-body-3 text-neutral-400 fw-semibold">Marcus Tan</div>
                                                            <div className="line"></div>
                                                            <div className="sub text-body-3 text-neutral-400">VectorPay’s CTO</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide">
                                                    <div>
                                                        <div className="top-icon">
                                                            <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M12.9375 20V10.3597C12.9375 7.72182 13.824 5.51559 15.5969 3.74101C17.4177 1.91847 19.8854 0.671463 23 0V6.40288C21.8021 6.78657 21.0115 7.26619 20.6281 7.84173C20.2448 8.3693 20.0292 9.04077 19.9813 9.85612H23V20H12.9375ZM0 20V10.3597C0 7.72182 0.886459 5.51559 2.65938 3.74101C4.48021 1.91847 6.94792 0.671463 10.0625 0V6.40288C8.9125 6.78657 8.12187 7.26619 7.69062 7.84173C7.30729 8.3693 7.09167 9.04077 7.04375 9.85612H10.0625V20H0Z" fill="#FD3A25" />
                                                            </svg>
                                                        </div>
                                                        <div className="text-body-1 text-white desc">
                                                            The best partner for agentic work. Multi-step planning, tool use, and audit trails—done right the first time.
                                                        </div>
                                                        <div className="cite">
                                                            <img className="line-left" src="/assets/images/item/line-1.png" alt="" />
                                                            <div className="name text-body-3 text-neutral-400 fw-semibold">David Kim</div>
                                                            <div className="line"></div>
                                                            <div className="sub text-body-3 text-neutral-400">Northway's Ecommerce Director</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="group-slider">
                                            <div className="group-btn-slider">
                                                <div className="btn-slider nav-prev-swiper testimonials-prev">
                                                    <i className="icon icon-angle-left-solid"></i>
                                                </div>
                                                <div className="btn-slider nav-next-swiper testimonials-next">
                                                    <i className="icon icon-angle-right-solid"></i>
                                                </div>
                                            </div>
                                            <div className="testimonials-pagination"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div dir="ltr" className="swiper sw-main-image effectFade fadeUp">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="testimonial-image">
                                                <img src="/assets/images/section/tes-1.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-image">
                                                <img src="/assets/images/section/tes-2.jpg" alt="" />
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="testimonial-image">
                                                <img src="/assets/images/section/tes-3.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /section-testimonials */}
            </div>

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
