import { Header } from './components/Header.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { IndustryStrip } from './components/IndustryStrip.jsx'
import { TestimonialsSection } from './components/TestimonialsSection.jsx'
import { FaqClientsSection } from './components/FaqClientsSection.jsx'
import { AboutSection } from './components/AboutSection.jsx'
import { ProductRange } from './components/ProductRange.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductRange />
        <IndustryStrip />
        <TestimonialsSection />
        <FaqClientsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
