import { useEffect, useRef, useState } from 'react'
import { Header } from './components/Header.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { IndustryStrip } from './components/IndustryStrip.jsx'
import { TestimonialsSection } from './components/TestimonialsSection.jsx'
import { FaqClientsSection } from './components/FaqClientsSection.jsx'
import { AboutSection } from './components/AboutSection.jsx'
import { ProductRange } from './components/ProductRange.jsx'
import { ServicesSection } from './components/ServicesSection.jsx'
import { Footer } from './components/Footer.jsx'
import { ContactPage } from './ContactPage.jsx'
import { GalleryPage } from './GalleryPage.jsx'
import { CertificationPage } from './CertificationPage.jsx'
import { ClientsPage } from './ClientsPage.jsx'
import { AboutPage } from './AboutPage.jsx'
import { SiteSupervisionPage } from './SiteSupervisionPage.jsx'
import { DesigningPipeSupportsPage } from './DesigningPipeSupportsPage.jsx'
import { PipeStressAnalysisPage } from './PipeStressAnalysisPage.jsx'
import { ProductsPage } from './ProductsPage.jsx'
import { ProductDetailPage } from './ProductDetailPage.jsx'
import { EnquiryModal } from './components/EnquiryModal.jsx'

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '')
  const route = path.split('/').pop()
  const hash = window.location.hash
  if (hash.startsWith('#product-')) return { type: 'product-detail', slug: hash.replace('#product-', '') }
  if (path.startsWith('/products/') && route && route !== 'products') return { type: 'product-detail', slug: route }
  if (hash === '#home') return { type: 'home' }
  if (hash === '#about' || hash === '#about-us') return { type: 'about' }
  if (hash === '#gallery') return { type: 'gallery' }
  if (hash === '#certificates') return { type: 'certificates' }
  if (hash === '#clients') return { type: 'clients' }
  if (hash === '#contact') return { type: 'contact' }
  if (route === 'gallery') return { type: 'gallery' }
  if (route === 'about') return { type: 'about' }
  if (route === 'certificates') return { type: 'certificates' }
  if (route === 'clients') return { type: 'clients' }
  if (route === 'contact') return { type: 'contact' }
  if (route === 'site-supervision') return { type: 'site-supervision' }
  if (route === 'designing-of-pipe-supports' || route === 'custom-pipe-supports') return { type: 'designing-pipe-supports' }
  if (route === 'pipe-stress-analysis' || route === 'pipe-stress-analysis-service') return { type: 'pipe-stress-analysis' }
  if (route === 'products') return { type: 'products' }
  return { type: 'home' }
}

function HomePage() {
  const homeRef = useRef(null)

  useEffect(() => {
    const home = homeRef.current
    if (!home) return undefined

    const sections = [...home.querySelectorAll(':scope > section')]
    const itemSelectors = [
      '.hero-copy',
      '.about-modern-visual',
      '.about-modern-content',
      '.product-section-heading',
      '.product-card',
      '.product-section-footer',
      '.home-services-heading',
      '.home-service-card',
      '.industry-showcase-heading',
      '.industry-carousel',
      '.industry-bottom-strip',
      '.testimonials-heading',
      '.testimonial-slider-wrap',
      '.faq-copy',
      '.faq-accordion',
      '.faq-image-panel',
      '.clients-panel',
      '.client-cta-panel',
    ]
    const items = [...home.querySelectorAll(itemSelectors.join(','))]
    const leftSelectors = [
      '.about-modern-visual',
      '.product-card:nth-child(odd)',
      '.home-service-card:nth-child(odd)',
      '.industry-showcase-heading',
      '.faq-copy',
      '.clients-panel',
    ]
    const rightSelectors = [
      '.hero-copy',
      '.about-modern-content',
      '.product-card:nth-child(even)',
      '.home-service-card:nth-child(even)',
      '.industry-carousel',
      '.faq-accordion',
      '.faq-image-panel',
      '.client-cta-panel',
    ]

    sections.forEach((section, index) => {
      section.classList.add('home-reveal-section')
      section.style.setProperty('--home-section-order', index)
    })
    items.forEach((item, index) => {
      item.classList.add('home-reveal-item')
      item.style.setProperty('--home-item-order', index % 7)
    })
    home.querySelectorAll(leftSelectors.join(',')).forEach((item) => item.classList.add('home-reveal-left'))
    home.querySelectorAll(rightSelectors.join(',')).forEach((item) => item.classList.add('home-reveal-right'))

    const revealTargets = [...sections, ...items]
    const isMobile = window.matchMedia('(max-width: 900px)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')

    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-home-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-home-visible')
        currentObserver.unobserve(entry.target)
      })
    }, {
      threshold: isMobile ? 0.01 : 0.08,
      rootMargin: isMobile ? '120px 0px 50px 0px' : '0px 0px -4% 0px',
    })

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return <div className="home-page" ref={homeRef}>
    <HeroSection />
    <AboutSection />
    <ProductRange />
    <ServicesSection />
    <IndustryStrip />
    <TestimonialsSection />
    <FaqClientsSection />
  </div>
}

function App() {
  const [page, setPage] = useState(currentPage)
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false)

  useEffect(() => {
    const syncPage = () => {
      setPage(currentPage())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', syncPage)
    window.addEventListener('popstate', syncPage)
    return () => {
      window.removeEventListener('hashchange', syncPage)
      window.removeEventListener('popstate', syncPage)
    }
  }, [])

  useEffect(() => {
    const openEnquiryFromLink = (event) => {
      const trigger = event.target.closest?.('a[href="#quote"], [data-open-enquiry]')
      if (!trigger) return
      event.preventDefault()
      setIsEnquiryOpen(true)
    }

    document.addEventListener('click', openEnquiryFromLink)
    return () => document.removeEventListener('click', openEnquiryFromLink)
  }, [])

  const pageType = page?.type || 'home'
  const isInnerPage = pageType !== 'home'

  return <>
    <Header isContact={isInnerPage} onRequestQuote={() => setIsEnquiryOpen(true)} />
    <main>
      {pageType === 'gallery' ? <GalleryPage /> :
       pageType === 'certificates' ? <CertificationPage /> :
       pageType === 'clients' ? <ClientsPage /> :
       pageType === 'about' ? <AboutPage /> :
       pageType === 'contact' ? <ContactPage hideContactFooter /> :
       pageType === 'site-supervision' ? <SiteSupervisionPage /> :
       pageType === 'designing-pipe-supports' ? <DesigningPipeSupportsPage /> :
       pageType === 'pipe-stress-analysis' ? <PipeStressAnalysisPage /> :
       pageType === 'products' ? <ProductsPage /> :
       pageType === 'product-detail' ? <ProductDetailPage productSlug={page.slug} onRequestQuote={() => setIsEnquiryOpen(true)} /> :
       <HomePage />}
    </main>
    <Footer />
    <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
  </>
}

export default App
