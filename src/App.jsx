import { useEffect, useState } from 'react'
import { Header } from './components/Header.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { IndustryStrip } from './components/IndustryStrip.jsx'
import { TestimonialsSection } from './components/TestimonialsSection.jsx'
import { FaqClientsSection } from './components/FaqClientsSection.jsx'
import { AboutSection } from './components/AboutSection.jsx'
import { ProductRange } from './components/ProductRange.jsx'
import { Footer } from './components/Footer.jsx'
import { ContactPage } from './ContactPage.jsx'
import { GalleryPage } from './GalleryPage.jsx'
import { CertificationPage } from './CertificationPage.jsx'
import { ClientsPage } from './ClientsPage.jsx'
import { EnquiryModal } from './components/EnquiryModal.jsx'

function currentPage() {
  const path = window.location.pathname.replace(/\/$/, '')
  const hash = window.location.hash
  if (hash === '#home') return 'home'
  if (hash === '#gallery') return 'gallery'
  if (hash === '#certificates') return 'certificates'
  if (hash === '#clients') return 'clients'
  if (hash === '#contact') return 'contact'
  if (path === '/gallery') return 'gallery'
  if (path === '/certificates') return 'certificates'
  if (path === '/clients') return 'clients'
  if (path === '/contact') return 'contact'
  return 'home'
}

function HomePage() {
  return <>
    <HeroSection />
    <AboutSection />
    <ProductRange />
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
    <Header isContact={page === 'contact' || page === 'gallery' || page === 'certificates' || page === 'clients'} onRequestQuote={() => setIsEnquiryOpen(true)} />
    <main>{page === 'gallery' ? <GalleryPage /> : page === 'certificates' ? <CertificationPage /> : page === 'clients' ? <ClientsPage /> : page === 'contact' ? <ContactPage hideContactFooter /> : <HomePage />}</main>
    <Footer />
    <EnquiryModal open={isEnquiryOpen} onClose={() => setIsEnquiryOpen(false)} />
  </>
}

export default App
