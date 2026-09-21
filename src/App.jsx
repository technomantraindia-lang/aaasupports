import { useEffect, useState } from 'react'
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
  return <>
    <HeroSection />
    <AboutSection />
    <ProductRange />
    <ServicesSection />
    <IndustryStrip />
    <TestimonialsSection />
    <FaqClientsSection />
  </>
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
