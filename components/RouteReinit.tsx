
'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    jQuery: any
    $: any
    gsap: any
    ScrollTrigger: any
    Swiper: any
    infiniteslide: any
  }
}

function reinitPage() {
  if (typeof window === 'undefined' || !window.jQuery) return
  const $ = window.jQuery as any

  // Kill existing GSAP ScrollTrigger instances
  try {
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach((t: any) => t.kill())
    }
  } catch (_) {}

  // Destroy existing Swiper instances
  try {
    document.querySelectorAll('.tf-swiper,.sw-main-image,.swiper-testimonial,.swiper-progressbar').forEach((el: any) => {
      if (el.swiper) el.swiper.destroy(true, true)
    })
  } catch (_) {}

  // Reinit infiniteSlide
  try {
    if ($.fn.infiniteslide && $('.infiniteSlide').length > 0) {
      $('.infiniteSlide').each(function (this: any) {
        const $this = $(this)
        $this.find('.infiniteslide-clone').remove()
        $this.infiniteslide({
          speed: $this.data('speed') || 50,
          direction: $this.data('style') || 'left',
          clone: $this.data('clone') || 2,
          pauseonhover: false,
        })
      })
    }
  } catch (_) {}

  // Reinit Swipers (same logic as carousel.js)
  try {
    if (window.Swiper) {
      $('.tf-swiper').each(function (this: any) {
        const $this = $(this)
        const laptop = $this.data('laptop') || 1
        const preview = $this.data('preview') || 1
        const tablet = $this.data('tablet') || 1
        const mobile = $this.data('mobile') || 1
        const mobileSm = $this.data('mobile-sm') !== undefined ? $this.data('mobile-sm') : mobile

        let spacing = $this.data('space')
        let spacingMd = $this.data('space-md')
        let spacingLg = $this.data('space-lg')
        let spacingXxl = $this.data('space-xxl')

        if (spacing !== undefined && spacingMd === undefined && spacingLg === undefined) {
          spacingMd = spacing; spacingLg = spacing
        } else if (spacing === undefined && spacingMd !== undefined && spacingLg === undefined) {
          spacing = 0; spacingLg = spacingMd
        }
        spacing = spacing || 0; spacingMd = spacingMd || 0
        spacingLg = spacingLg || 0; spacingXxl = spacingXxl || 1

        new window.Swiper($this[0], {
          direction: $this.data('direction') || 'horizontal',
          speed: $this.data('speed') || 800,
          centeredSlides: $this.data('center') ?? false,
          slidesPerView: mobile,
          spaceBetween: spacing,
          slidesPerGroup: $this.data('pagination') || 1,
          grabCursor: $this.data('cursor') ?? false,
          loop: $this.data('loop') ?? false,
          effect: $this.data('effect') || 'slide',
          initialSlide: $this.data('init') || 0,
          slideToClickedSlide: $this.data('click-slide') ?? false,
          autoplay: $this.data('auto') ? { delay: $this.data('delay') || 1000, disableOnInteraction: false, pauseOnMouseEnter: true } : false,
          grid: { rows: $this.data('grid') || 1, fill: 'row' },
          pagination: {
            el: [$this.find('.tf-sw-pagination')[0], $this.closest('.tf-pag-swiper').find('.tf-sw-pagination')[0]],
            clickable: true,
          },
          observer: true, observeParents: true,
          navigation: {
            nextEl: [$this.closest('.tf-btn-swiper-main').find('.nav-next-swiper')[0], $this.closest('.container').find('.group-btn-slider .nav-next-swiper')[0]],
            prevEl: [$this.closest('.tf-btn-swiper-main').find('.nav-prev-swiper')[0], $this.closest('.container').find('.group-btn-slider .nav-prev-swiper')[0]],
          },
          breakpoints: {
            575: { slidesPerView: mobileSm, spaceBetween: spacing, slidesPerGroup: $this.data('pagination-sm') || 1, grid: { rows: $this.data('grid') || 1, fill: 'row' } },
            768: { slidesPerView: tablet, spaceBetween: spacingMd, slidesPerGroup: $this.data('pagination-md') || 1, grid: { rows: $this.data('grid') || 1, fill: 'row' } },
            1200: { slidesPerView: preview, spaceBetween: spacingLg, slidesPerGroup: $this.data('pagination-lg') || 1, grid: { rows: $this.data('grid') || 1, fill: 'row' } },
            1600: { slidesPerView: laptop === 1 ? preview : laptop, spaceBetween: spacingXxl === 1 ? spacingLg : spacingXxl, slidesPerGroup: $this.data('pagination-lg') || 1, grid: { rows: $this.data('grid') || 1, fill: 'row' } },
          },
        })
      })

      if ($('.section-testimonials').length > 0) {
        const thumbSwiper = new window.Swiper('.sw-main-image', { slidesPerView: 1, watchSlidesProgress: true, spaceBetween: 10, centeredSlides: true, autoplay: { delay: 4000, disableOnInteraction: false }, speed: 700 })
        const mainSwiper = new window.Swiper('.swiper-testimonial', { slidesPerView: 1, pagination: { el: '.testimonials-pagination', type: 'fraction' }, navigation: { nextEl: '.testimonials-next', prevEl: '.testimonials-prev' } })
        ;(thumbSwiper as any).controller.control = mainSwiper
        ;(mainSwiper as any).controller.control = thumbSwiper
      }

      if ($('.swiper-progressbar').length > 0) {
        const progressFill = document.getElementById('progressBar')
        const SLIDE_DURATION = 5000
        let startTime: number | null = null
        const swiper = new window.Swiper('.swiper-progressbar', {
          loop: true, speed: 600, grabCursor: true, allowTouchMove: true,
          navigation: { nextEl: '.progressbar-next', prevEl: '.progressbar-prev' },
          on: { slideChange: () => { startTime = null } }
        })
        const animateProgress = (ts: number) => {
          if (!startTime) startTime = ts
          const pct = Math.min(((ts - startTime) / SLIDE_DURATION) * 100, 100)
          if (progressFill) progressFill.style.width = pct + '%'
          if (pct >= 100) { (swiper as any).slideNext(); startTime = null }
          requestAnimationFrame(animateProgress)
        }
        requestAnimationFrame(animateProgress)
      }
    }
  } catch (_) {}

  // Reinit per-page jQuery functions
  try {
    $(function () {
      // services image switcher
      $('.services-image-btn').off('click').on('click', function (this: any) {
        if (!$(this).hasClass('active-img')) {
          $('.services-image-btn').removeClass('active-img')
          $(this).addClass('active-img')
          const newImg = $(this).data('img')
          $('.services-image').find('img').css('opacity', 0)
          setTimeout(() => { $('.services-image').find('img').attr('src', newImg).css('opacity', 1) }, 200)
        }
      })
      // pricing toggle
      const formatUSD = (n: number) => '$' + Number(n).toLocaleString('en-US')
      const updatePrices = (isYearly: boolean) => {
        $('.price-number').each(function (this: any) {
          const $p = $(this)
          $p.text(formatUSD(isYearly ? $p.data('year') : $p.data('month')))
          $p.next('.price-per').text(isYearly ? '/ year' : '/ month')
        })
      }
      $('#pricingSwitch').off('change').on('change', function (this: any) { updatePrices(this.checked) })
      updatePrices($('#pricingSwitch').is(':checked'))
    })
  } catch (_) {}

  // Re-run scrollEffectFade for the new page's DOM elements. ScrollTrigger
  // instances were killed above; this creates fresh ones with correct positions
  // (Swiper was already reinitialized synchronously in the block above).
  try {
    if ((window as any).scrollEffectFade) {
      // scrollEffectFade now animates in-viewport elements directly (no
      // ScrollTrigger dependency for above-the-fold content on the new page).
      ;(window as any).scrollEffectFade()

      setTimeout(() => {
        if ((window as any).ScrollTrigger) {
          ;(window as any).ScrollTrigger.refresh()
        }
      }, 200)

      // Last-resort fallback: 2 s after route change, force any still-hidden
      // effectFade element visible.
      setTimeout(() => {
        document.querySelectorAll('.effectFade').forEach((el: any) => {
          el.style.opacity = '1'
          el.style.visibility = 'visible'
        })
      }, 2000)
    }
  } catch (_) {}
}

export default function RouteReinit() {
  const pathname = usePathname()
  const isFirstRender = useRef(true)

  useEffect(() => {
    // Skip on initial mount — scripts handle first-load init themselves
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    // On route change, wait for DOM to settle then reinit
    const handle = requestAnimationFrame(() => requestAnimationFrame(reinitPage))
    return () => cancelAnimationFrame(handle)
  }, [pathname])

  return null
}
