import { useEffect } from 'react'

const revealSelectors = [
  '.service-banner-copy',
  '.service-banner-note',
  '.service-overview-copy',
  '.service-overview-visual',
  '.service-section-intro',
  '.service-benefit',
  '.service-detail-inner > .service-visual',
  '.service-detail-copy',
  '.service-findings-copy',
  '.service-findings > .service-visual',
  '.service-process > .service-kicker',
  '.service-process > h2',
  '.service-process-grid > article',
  '.design-service-gallery > .service-visual',
  '.service-industries > .service-kicker',
  '.service-industries > h2',
  '.service-industry-grid > article',
  '.service-cta-inner > div',
  '.service-cta-inner > .service-button',
]

export function useServiceReveal(pageRef) {
  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined

    const sections = [
      page.querySelector('.service-banner'),
      ...page.querySelectorAll(':scope > .service-page-content > section, :scope > section'),
    ].filter(Boolean)
    const items = [...page.querySelectorAll(revealSelectors.join(','))]

    sections.forEach((section) => section.classList.add('service-reveal-section'))
    items.forEach((item, index) => {
      item.classList.add('service-reveal-item')
      item.style.setProperty('--service-item-order', index % 6)
    })

    const revealTargets = [...sections, ...items]
    const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 900px)').matches
    const reducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isMobile || reducedMotion || !('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-service-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-service-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.05, rootMargin: '60px 0px 60px 0px' })

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [pageRef])
}

