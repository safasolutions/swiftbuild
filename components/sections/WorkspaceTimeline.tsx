'use client'

import React, { useEffect, useRef } from 'react'

export interface TimelinePhase {
  phaseNum: string;
  title: string;
  duration: string;
  description: string;
  iconClass: string;
  details: string[];
}

const PHASES: TimelinePhase[] = [
  {
    phaseNum: '01',
    title: 'Strategy Meeting & Systems Audit',
    duration: '3–5 Business Days',
    description: 'We map your existing workflows without tearing down what works. We inspect your dispatch boards, booking tools, quoting systems, and customer channels to find bottlenecks.',
    iconClass: 'icon-search-solid',
    details: [
      'Core Operational Bottleneck Mapping',
      'Integration compatibility audits (Jobber, ServiceTitan, etc.)',
      'High-ROI automation opportunity identification'
    ]
  },
  {
    phaseNum: '02',
    title: 'Blueprint & Fixed-Scope Alignment',
    duration: '5–7 Business Days',
    description: 'No vague estimates or hourly runaway costs. We translate the audit into a concrete technical blueprint mapping database architecture, API points, and page flows.',
    iconClass: 'icon-clipboard-check-solid',
    details: [
      'Exact database & sync architecture diagramming',
      'User interface wireframe previews',
      'Guaranteed fixed-price and delivery date contract'
    ]
  },
  {
    phaseNum: '03',
    title: 'Build & Seamless Integration',
    duration: '2–4 Weeks',
    description: 'Our team handles the engineering behind the scenes with zero operational disruption. We build your high-speed site, configure secure database webhooks, and program automations.',
    iconClass: 'icon-bolt-solid',
    details: [
      'High-performance, mobile-first website coding',
      'Live CRM webhook and database integration',
      'Canadian regional search (Google Maps) optimization'
    ]
  },
  {
    phaseNum: '04',
    title: 'Live Handover & Onboarding Support',
    duration: '1 Week + Active Support',
    description: 'We don\'t just ship code and disappear. We run a live test run with your team, train your dispatch crew, configure admin dashboards, and provide video playbooks.',
    iconClass: 'icon-user-check-solid',
    details: [
      'Crew dispatch and tablet sync test verification',
      'Office team live onboarding and training sessions',
      '30-day technical support tuning window'
    ]
  }
]

export default function WorkspaceTimeline() {
  const wrapperRef = useRef<HTMLDivElement>(null)

  // Highlight the timeline card that is currently in the middle of the viewport
  useEffect(() => {
    const items = wrapperRef.current?.querySelectorAll('.timeline-item')
    if (!items?.length) return
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          entry.target.classList.toggle('is-active', entry.isIntersecting)
        })
      },
      { rootMargin: '-35% 0px -35% 0px' }
    )
    items.forEach(item => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="timeline-section" id="process">
      <div className="container">
        <div className="heading-section center mb-64">
          <div className="heading-sub fw-semibold effectFade fadeUp">Our Working Process</div>
          <div className="heading-title text-gradient-3 effectFade fadeRotateX">
            Simple process. Coded for speed.
          </div>
        </div>

        <div className="timeline-wrapper" ref={wrapperRef}>
          {/* Main timeline line */}
          <div className="timeline-conduit-line" />
          
          {/* Glowing pulse indicator */}
          <div className="timeline-conduit-pulse" />

          {PHASES.map((phase, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={phase.phaseNum}
                className={`timeline-item ${isLeft ? 'left' : 'right'} effectFade fadeUp`}
                data-delay={idx * 0.1}
              >
                <div className="timeline-node">
                  {phase.phaseNum}
                </div>
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <h4 className="timeline-card-title">{phase.title}</h4>
                    <span className="timeline-card-duration">{phase.duration}</span>
                  </div>
                  <p className="timeline-card-desc mb-16">
                    {phase.description}
                  </p>
                  <ul className="list-text type-check ps-0 mb-0">
                    {phase.details.map((detail, index) => (
                      <li key={index} className="text-body-3 d-flex align-items-center gap-8 mb-8" style={{ textAlign: 'left' }}>
                        <i className="icon icon-check-solid text-brand" style={{ fontSize: '14px', flexShrink: 0 }}></i>
                        <span style={{ fontSize: '14px', color: 'var(--neutral-600)' }}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
