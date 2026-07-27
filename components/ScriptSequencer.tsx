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

// Appending every tag in one go with `async = false` lets the browser fetch all
// of them in parallel while still executing them in DOM order. Awaiting each
// script one at a time cost a full round-trip per file, which left the page's
// .effectFade elements sitting at opacity 0 for seconds before GSAP existed.
function loadScriptsInOrder(srcs: string[]): Promise<void> {
  return new Promise((resolve) => {
    let remaining = srcs.length
    if (remaining === 0) { resolve(); return }
    const done = () => { if (--remaining === 0) resolve() }

    const frag = document.createDocumentFragment()
    for (const src of srcs) {
      if (document.querySelector(`script[src="${src}"]`)) { done(); continue }
      const s = document.createElement('script')
      s.src = src
      s.async = false // preserves execution order across the parallel fetches
      s.onload = done
      s.onerror = done
      frag.appendChild(s)
    }
    document.body.appendChild(frag)
  })
}

export default function ScriptSequencer() {
  useEffect(() => {
    // window-level flag survives React StrictMode double-invocation and HMR
    // re-renders; a useRef resets when the component remounts.
    if ((window as any).__scriptsLoaded) return
    ;(window as any).__scriptsLoaded = true

    ;(async () => {
      await loadScriptsInOrder(SCRIPTS)

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

      // Absolute last resort: 3 s after load, reveal effectFade elements that
      // GSAP never picked up (covers complete GSAP failure).
      //
      // Only elements *without* data-fade-init are touched. Previously this
      // swept every .effectFade, which forced below-the-fold elements to
      // opacity 1 while leaving GSAP's start transform (translateY(50px),
      // rotationX(45deg)) applied — that is what made grid rows sit staggered
      // and headings look squashed until their scroll trigger fired.
      // The transform is cleared too, since a never-initialised element may
      // still be carrying one.
      setTimeout(() => {
        document.querySelectorAll('.effectFade:not([data-fade-init])').forEach((el: any) => {
          el.style.opacity = '1'
          el.style.visibility = 'visible'
          el.style.transform = 'none'
        })
      }, 3000)
    })()
  }, [])

  return null
}
