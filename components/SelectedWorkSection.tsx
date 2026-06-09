'use client'

import { useState, useEffect, type CSSProperties, type ReactNode } from 'react'
import { projects, Project } from '@/data/projects'

interface Props {
  noPaddingTop?: boolean
}

const SNAPSHOT_URL = 'https://cal.com/swiftbuild/free-strategy-call'

export default function SelectedWorkSection({ noPaddingTop = false }: Props) {
  const [selected, setSelected] = useState<Project | null>(null)

  const open = (project: Project) => {
    setSelected(project)
    document.body.style.overflow = 'hidden'
  }

  const close = () => {
    setSelected(null)
    document.body.style.overflow = ''
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const sectionClass = `section-featured-works flat-spacing${noPaddingTop ? ' pt-0' : ''}`

  return (
    <>
      <div id="works" className={sectionClass}>
        <div className="container">
          <div className="heading-section mb-0">
            <div className="heading-sub fw-semibold mx-auto effectFade fadeUp">Selected Work</div>
          </div>
          <div className="row" style={{ rowGap: '32px', marginTop: '32px' }}>
            {projects.map((project) => (
              <div key={project.name} className="col-xl-4 col-md-6 col-12" style={{ display: 'flex', flexDirection: 'column' }}>
                <div
                  className="featured-works-item"
                  style={{ cursor: 'pointer', flex: 1 }}
                  onClick={() => open(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${project.name} case study`}
                  onKeyDown={e => e.key === 'Enter' && open(project)}
                >
                  <div className="image main-mouse-hover" style={{ height: '240px', flexShrink: 0 }}>
                    {project.cover && (
                      <img src={project.cover} alt={project.name} />
                    )}
                    {project.href && project.href !== '#' ? (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="view-project h6"
                        onClick={e => e.stopPropagation()}
                        aria-label={`View ${project.name} live site`}
                      >
                        View Project <i className="icon icon-arrow-top-right" />
                      </a>
                    ) : (
                      <span className="view-project h6">
                        View Project <i className="icon icon-arrow-top-right" />
                      </span>
                    )}
                  </div>
                  <div style={{ padding: '24px 32px 28px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <h5
                      className="fw-semibold"
                      style={{
                        marginBottom: '8px',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {project.name}
                    </h5>
                    <p
                      className="text-body-3"
                      style={{
                        color: 'var(--secondary)',
                        marginBottom: 0,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {project.summary}
                    </p>
                    {project.outcome && (
                      <div
                        className="fw-semibold"
                        style={{
                          marginTop: 'auto',
                          paddingTop: '14px',
                          fontSize: '13px',
                          color: 'var(--brand)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <i className="icon icon-arrow-top-right" style={{ fontSize: '11px' }} />
                        {project.outcome}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(9,9,11,0.88)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflowY: 'auto',
            padding: '48px 16px 72px',
          }}
          onClick={close}
        >
          <div
            className="case-modal"
            style={{
              background: 'var(--neutral-50)',
              borderRadius: '40px',
              maxWidth: '860px',
              width: '100%',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0px 100px 80px 0px rgba(0,0,0,0.4)',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={close}
              aria-label="Close case study"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: 'none',
                background: 'rgba(0,0,0,0.55)',
                color: '#fff',
                fontSize: '14px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--brand)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.55)' }}
            >
              <i className="icon icon-times-solid" />
            </button>

            {/* Cover — diagonal cut, animated */}
            {selected.cover && (
              <div className="case-cover">
                <img src={selected.cover} alt={selected.name} />
              </div>
            )}

            {/* Content */}
            <div className="case-modal-body" style={{ padding: '40px 48px 56px' }}>
              {/* Header: client + one-line outcome */}
              <div
                className="fw-semibold"
                style={{
                  color: 'var(--brand)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontSize: '12px',
                  marginBottom: '12px',
                }}
              >
                Case Study
              </div>
              <h3 className="fw-semibold" style={{ marginBottom: '10px', color: 'var(--primary)' }}>
                {selected.name}
              </h3>
              {selected.outcome && (
                <p
                  className="fw-semibold"
                  style={{ fontSize: '20px', lineHeight: 1.4, marginBottom: '6px', color: 'var(--primary)' }}
                >
                  <span style={{ color: 'var(--brand)' }}>—</span> {selected.outcome}
                </p>
              )}
              <p className="text-body-1" style={{ color: 'var(--secondary)', marginBottom: '44px' }}>
                {selected.summary}
              </p>

              {/* The situation */}
              <div style={sectionWrap}>
                <SectionHeading>The Situation</SectionHeading>
                <p style={bodyText}>{selected.situation}</p>
              </div>

              {/* What we built — alternating image left/right */}
              <div style={sectionWrap}>
                <SectionHeading>What We Built</SectionHeading>
                {selected.built.map((item, i) => (
                  <div
                    key={item.title}
                    style={{ marginBottom: i < selected.built.length - 1 ? '52px' : 0 }}
                  >
                    <div
                      className="fw-semibold"
                      style={{ color: 'var(--brand)', fontSize: '14px', letterSpacing: '0.08em', marginBottom: '6px' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <h6 className="fw-semibold" style={{ color: 'var(--primary)', marginBottom: '8px' }}>
                      {item.title}
                    </h6>
                    <p style={{ ...bodyText, marginBottom: item.image ? '20px' : 0 }}>{item.description}</p>
                    {item.image && (
                      <div className="case-shot">
                        <div className="case-shot-bar" aria-hidden="true">
                          <span /><span /><span />
                        </div>
                        <img
                          src={item.image}
                          alt={`${selected.name} — ${item.title}`}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* The Results — commented out
              <div style={sectionWrap}>
                <SectionHeading>The Results</SectionHeading>
                <div
                  style={{
                    background: 'var(--primary)',
                    borderRadius: '24px',
                    padding: '16px 36px',
                  }}
                >
                  {selected.metrics.map((m, i) => (
                    <div
                      key={m.label}
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'baseline',
                        gap: '8px 24px',
                        padding: '20px 0',
                        borderBottom: i < selected.metrics.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                      }}
                    >
                      <div className="fw-semibold" style={{ color: '#fff', minWidth: '180px', flex: '1 1 180px', lineHeight: 1.5 }}>
                        {m.label}
                      </div>
                      <div style={{ flex: '2 1 300px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                        {m.before}
                        {' '}
                        <span style={{ color: 'var(--brand)' }}>→</span>
                        {' '}
                        <span className="fw-semibold" style={{ color: 'var(--brand)' }}>{m.after}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {selected.metricsNote && (
                  <p className="text-body-3" style={{ color: 'var(--secondary)', marginTop: '14px', marginBottom: 0, fontStyle: 'italic' }}>
                    {selected.metricsNote}
                  </p>
                )}
              </div>
              */}

              {/* Results */}
              <div style={sectionWrap}>
                <SectionHeading>Results</SectionHeading>
                <p style={{ ...bodyText, marginBottom: selected.metricsNote ? '14px' : 0 }}>{selected.results}</p>
                {selected.metricsNote && (
                  <p className="text-body-3" style={{ color: 'var(--secondary)', margin: 0, fontStyle: 'italic' }}>
                    {selected.metricsNote}
                  </p>
                )}
              </div>

              {/* Stack & timeline */}
              <div style={sectionWrap}>
                <SectionHeading>Stack &amp; Timeline</SectionHeading>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                  {selected.stack.map(tool => (
                    <span
                      key={tool}
                      className="text-body-3 fw-semibold"
                      style={{
                        padding: '7px 16px',
                        borderRadius: '999px',
                        background: 'var(--primary)',
                        color: '#fff',
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <p style={{ ...bodyText, marginBottom: 0 }}>{selected.timeline}</p>
              </div>

              {/* Client quote */}
              {selected.quote && (
                <div style={sectionWrap}>
                  <blockquote
                    style={{
                      borderLeft: '3px solid var(--brand)',
                      paddingLeft: '20px',
                      margin: 0,
                    }}
                  >
                    <p style={{ ...bodyText, fontStyle: 'italic', marginBottom: '8px' }}>
                      “{selected.quote.text}”
                    </p>
                    <div className="text-body-3 fw-semibold" style={{ color: 'var(--secondary)' }}>
                      — {selected.quote.author}
                    </div>
                  </blockquote>
                </div>
              )}

              {/* CTA */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
                <a href={SNAPSHOT_URL} className="tf-btn">
                  Book your free Snapshot
                  <i className="icon icon-arrow-top-right" style={{ fontSize: '18px' }} />
                </a>
                {selected.href !== '#' && (
                  <a
                    href={selected.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tf-btn-2"
                  >
                    View live project
                    <i className="icon icon-arrow-top-right" style={{ fontSize: '18px' }} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

/** Red-accented section heading: short brand bar + uppercase label */
function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
      <span style={{ width: '28px', height: '3px', background: 'var(--brand)', borderRadius: '2px', flexShrink: 0 }} />
      <span
        className="fw-semibold"
        style={{
          color: 'var(--primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontSize: '14px',
        }}
      >
        {children}
      </span>
    </div>
  )
}

const sectionWrap: CSSProperties = {
  paddingBottom: '44px',
  marginBottom: '44px',
  borderBottom: '1px solid var(--neutral-200)',
}

const bodyText: CSSProperties = {
  color: 'var(--primary)',
  lineHeight: '1.75',
  marginBottom: 0,
}
