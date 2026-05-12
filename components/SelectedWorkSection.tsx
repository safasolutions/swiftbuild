'use client'

import { useState, useEffect, type CSSProperties } from 'react'
import { projects, Project } from '@/data/projects'

interface Props {
  noPaddingTop?: boolean
}

export default function SelectedWorkSection({ noPaddingTop = false }: Props) {
  const [selected, setSelected] = useState<Project | null>(null)
  const [imgIdx, setImgIdx] = useState(0)

  const open = (project: Project) => {
    setSelected(project)
    setImgIdx(0)
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

  const images: string[] = selected?.images?.length
    ? selected.images
    : selected?.cover
    ? [selected.cover]
    : []

  const prev = () => setImgIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setImgIdx(i => (i + 1) % images.length)

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
                    <span className="view-project h6">
                      View Project <i className="icon icon-arrow-top-right" />
                    </span>
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: 'auto', paddingTop: '20px' }}>
                      <span className="fw-semibold text-body-3">View case study</span>
                      <i className="icon icon-arrow-top-right" style={{ color: 'var(--brand)', fontSize: '14px' }} />
                    </div>
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
              }}
            >
              <i className="icon icon-times-solid" />
            </button>

            {/* Image slider */}
            {images.length > 0 && (
              <div style={{ position: 'relative', overflow: 'hidden', lineHeight: 0 }}>
                <div
                  style={{
                    display: 'flex',
                    transform: `translateX(-${imgIdx * 100}%)`,
                    transition: 'transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  {images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${selected.name} ${i + 1}`}
                      style={{
                        width: '100%',
                        flexShrink: 0,
                        maxHeight: '480px',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                    />
                  ))}
                </div>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={e => { e.stopPropagation(); prev() }}
                      style={{ ...navBtn, left: '16px' }}
                      aria-label="Previous image"
                    >
                      <i className="icon icon-angle-left-solid" />
                    </button>
                    <button
                      onClick={e => { e.stopPropagation(); next() }}
                      style={{ ...navBtn, right: '16px' }}
                      aria-label="Next image"
                    >
                      <i className="icon icon-angle-right-solid" />
                    </button>
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '16px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        gap: '8px',
                        zIndex: 2,
                      }}
                    >
                      {images.map((_, i) => (
                        <button
                          key={i}
                          onClick={e => { e.stopPropagation(); setImgIdx(i) }}
                          aria-label={`Go to image ${i + 1}`}
                          style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            padding: 0,
                            border: 'none',
                            background: i === imgIdx ? 'var(--brand)' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'background 0.2s',
                          }}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Content */}
            <div style={{ padding: '40px 48px 56px' }}>
              <h3 className="fw-semibold" style={{ marginBottom: '8px' }}>{selected.name}</h3>
              <p className="text-body-1" style={{ color: 'var(--secondary)', marginBottom: '40px' }}>
                {selected.summary}
              </p>

              {[
                { label: 'The Problem', content: selected.problem },
                { label: 'What We Did', content: selected.solution },
                { label: 'The Result', content: selected.result },
              ].map(({ label, content }, i, arr) => (
                <div
                  key={label}
                  style={{
                    paddingBottom: i < arr.length - 1 ? '32px' : 0,
                    marginBottom: i < arr.length - 1 ? '32px' : '40px',
                    borderBottom: i < arr.length - 1
                      ? '1px solid var(--neutral-200)'
                      : 'none',
                  }}
                >
                  <div
                    className="fw-semibold text-body-3"
                    style={{
                      color: 'var(--secondary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      marginBottom: '10px',
                    }}
                  >
                    {label}
                  </div>
                  <p style={{ color: 'var(--primary)', lineHeight: '1.75', marginBottom: 0 }}>
                    {content}
                  </p>
                </div>
              ))}

              {selected.href !== '#' && (
                <a
                  href={selected.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tf-btn-2"
                >
                  View project
                  <i className="icon icon-arrow-top-right" style={{ fontSize: '18px' }} />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const navBtn: CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '44px',
  height: '44px',
  borderRadius: '50%',
  border: 'none',
  background: 'rgba(0,0,0,0.4)',
  backdropFilter: 'blur(8px)',
  color: '#fff',
  fontSize: '16px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
}
