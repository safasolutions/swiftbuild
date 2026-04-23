'use client'
import { useEffect } from 'react'

// Script order matches the original HTML template exactly.
// ScrollSmoother.min.js is intentionally absent — it is not loaded by the
// original index.html and registering it with GSAP can interfere with
// ScrollTrigger's internal scroll-tracking.
const SCRIPTS = [
  '/assets/js/bootstrap.min.js',
  '/assets/js/jquery.nice-select.min.js',
  '/assets/js/swiper-bundle.min.js',
  '/assets/js/slick.min.js',
  '/assets/js/countto.js',
  '/assets/js/carousel.js',
  '/assets/js/infinityslide.js',
  '/assets/js/ScrollSmooth.js',
  '/assets/js/gsap.min.js',
  '/assets/js/ScrollTrigger.min.js',
  '/assets/js/ScrollToPlugin.min.js',
  '/assets/js/gsapAnimation.js',
  '/assets/js/main.js',
]

function loadScript(src: string): Promise<void> {
  return new Promise((resolve) => {
    if (document.querySelector(`script[src="${src}"]`)) { resolve(); return }
    const s = document.createElement('script')
    s.src = src
    s.onload = () => resolve()
    s.onerror = () => resolve()
    document.body.appendChild(s)
  })
}

export default function ScriptSequencer() {
  useEffect(() => {
    // window-level flag survives React StrictMode double-invocation and HMR
    // re-renders; a useRef resets when the component remounts.
    if ((window as any).__scriptsLoaded) return
    ;(window as any).__scriptsLoaded = true

    ;(async () => {
      for (const src of SCRIPTS) await loadScript(src)

      // Fire the jQuery load event so carousel.js initialises Swiper.
      if ((window as any).jQuery) {
        ;(window as any).jQuery(window).trigger('load')
      }

      // Two paint frames let the browser reflow Swiper's DOM changes before
      // GSAP measures element positions for ScrollTrigger.
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)))

      if ((window as any).runAnimations) {
        ;(window as any).runAnimations()
      }

      // scrollEffectFade() now directly animates in-viewport elements, so a
      // single refresh is enough to catch any late-measured positions.
      setTimeout(() => {
        if ((window as any).ScrollTrigger) {
          ;(window as any).ScrollTrigger.refresh()
        }
      }, 200)

      // Absolute last resort: 3 s after load, force any still-hidden
      // effectFade element visible (covers complete GSAP failure).
      setTimeout(() => {
        document.querySelectorAll('.effectFade').forEach((el: any) => {
          el.style.opacity = '1'
          el.style.visibility = 'visible'
        })
      }, 3000)
    })()
  }, [])

  return null
}
