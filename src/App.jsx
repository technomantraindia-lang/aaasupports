import { Header } from './components/Header.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { IndustryStrip } from './components/IndustryStrip.jsx'
import { AboutSection } from './components/AboutSection.jsx'
import { ProductRange } from './components/ProductRange.jsx'
import { WhyChooseUs } from './components/WhyChooseUs.jsx'
import { ProjectsSection } from './components/ProjectsSection.jsx'
import { PartnersStrip } from './components/PartnersStrip.jsx'
import { QuoteSection } from './components/QuoteSection.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <IndustryStrip />
        <AboutSection />
        <ProductRange />
        <WhyChooseUs />
        <ProjectsSection />
        <PartnersStrip />
        <QuoteSection />
      </main>
      <Footer />
    </>
  )
}

export default App
