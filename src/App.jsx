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
import { EnquiryModal } from './components/EnquiryModal.jsx'

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '')
  const route = path.split('/').pop()
  const hash = window.location.hash
  if (hash === '#home') return 'home'
  if (hash === '#about' || hash === '#about-us') return 'about'
  if (hash === '#gallery') return 'gallery'
  if (hash === '#certificates') return 'certificates'
  if (hash === '#clients') return 'clients'
  if (hash === '#contact') return 'contact'
  if (route === 'gallery') return 'gallery'
  if (route === 'about') return 'about'
  if (route === 'certificates') return 'certificates'
  if (route === 'clients') return 'clients'
  if (route === 'contact') return 'contact'
  if (route === 'site-supervision') return 'site-supervision'
  if (route === 'designing-of-pipe-supports' || route === 'custom-pipe-supports') return 'designing-pipe-supports'
  if (route === 'pipe-stress-analysis' || route === 'pipe-stress-analysis-service') return 'pipe-stress-analysis'
  if (route === 'products') return 'products'
  return 'home'
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
    const syncPage = () => setPage(currentPage())
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

  return <>
    <Header isContact={page === 'contact' || page === 'gallery' || page === 'certificates' || page === 'clients' || page === 'about' || page === 'site-supervision' || page === 'designing-pipe-supports' || page === 'pipe-stress-analysis' || page === 'products'} onRequestQuote={() => setIsEnquiryOpen(true)} />
    <main>{page === 'gallery' ? <GalleryPage /> : page === 'certificates' ? <CertificationPage /> : page === 'clients' ? <ClientsPage /> : page === 'about' ? <AboutPage /> : page === 'contact' ? <ContactPage hideContactFooter /> : page === 'site-supervision' ? <SiteSupervisionPage /> : page === 'designing-pipe-supports' ? <DesigningPipeSupportsPage /> : page === 'pipe-stress-analysis' ? <PipeStressAnalysisPage /> : page === 'products' ? <ProductsPage /> : <HomePage />}</main>
    <Footer />
    <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
  </>
}

export default App
