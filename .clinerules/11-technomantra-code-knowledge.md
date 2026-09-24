# Technomantra Local Code Knowledge Graph (V4.8.14)

> Structural local index. Read current source before editing. Secrets are intentionally excluded.

- Indexed source files: 42
- Structural edges: 64
- Matched end-to-end flows: 0
- Updated: 2026-09-24T08:23:13.557Z

## Dependency edges
- IMPORT index.html -> src/main.jsx
- IMPORT src/AboutPage.jsx -> src/components/ValuedClientsSection.jsx
- IMPORT src/App.jsx -> src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/TestimonialsSection.jsx, src/components/FaqClientsSection.jsx, src/components/AboutSection.jsx, src/components/ProductRange.jsx, src/components/ServicesSection.jsx
- IMPORT src/components/AboutSection.jsx -> src/data/homeData.js
- IMPORT src/components/Footer.jsx -> src/components/Logo.jsx, src/data/homeData.js
- IMPORT src/components/Header.jsx -> src/data/homeData.js, src/components/Logo.jsx
- IMPORT src/components/HeroSection.jsx -> src/data/homeData.js, src/components/Icon.jsx
- IMPORT src/components/index.js -> src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/PartnersStrip.jsx, src/components/MetricsBar.jsx, src/components/ProductRange.jsx
- IMPORT src/components/MetricsBar.jsx -> src/data/homeData.js
- IMPORT src/components/PartnersStrip.jsx -> src/data/homeData.js
- IMPORT src/components/ProjectsSection.jsx -> src/data/homeData.js, src/components/SectionHeading.jsx
- IMPORT src/components/TestimonialsSection.jsx -> src/components/testimonials/testimonials.css
- IMPORT src/components/WhyChooseUs.jsx -> src/components/SectionHeading.jsx, src/data/homeData.js
- IMPORT src/DesigningPipeSupportsPage.jsx -> src/hooks/useServiceReveal.js
- IMPORT src/main.jsx -> src/App.jsx, src/index.css
- IMPORT src/PipeStressAnalysisPage.jsx -> src/hooks/useServiceReveal.js
- IMPORT src/ProductDetailPage.jsx -> src/data/productsData.js
- IMPORT src/SiteSupervisionPage.jsx -> src/hooks/useServiceReveal.js
- REACT src/AboutPage.jsx: depends on src/components/ValuedClientsSection.jsx
- REACT src/App.jsx: used by src/main.jsx · depends on src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/TestimonialsSection.jsx, src/components/FaqClientsSection.jsx, src/components/AboutSection.jsx
- REACT src/components/AboutSection.jsx: used by src/App.jsx, src/components/index.js
- REACT src/components/FaqClientsSection.jsx: used by src/App.jsx
- REACT src/components/Footer.jsx: used by src/components/index.js · depends on src/components/Logo.jsx
- REACT src/components/Header.jsx: used by src/App.jsx, src/components/index.js · depends on src/components/Logo.jsx
- REACT src/components/HeroSection.jsx: used by src/App.jsx, src/components/index.js · depends on src/components/Icon.jsx
- REACT src/components/Icon.jsx: used by src/components/HeroSection.jsx
- REACT src/components/index.js: depends on src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/PartnersStrip.jsx
- REACT src/components/IndustryStrip.jsx: used by src/App.jsx, src/components/index.js
- REACT src/components/Logo.jsx: used by src/components/Footer.jsx, src/components/Header.jsx
- REACT src/components/MetricsBar.jsx: used by src/components/index.js
- REACT src/components/PartnersStrip.jsx: used by src/components/index.js
- REACT src/components/ProductRange.jsx: used by src/App.jsx, src/components/index.js
- REACT src/components/ProjectsSection.jsx: depends on src/components/SectionHeading.jsx
- REACT src/components/SectionHeading.jsx: used by src/components/ProjectsSection.jsx, src/components/WhyChooseUs.jsx
- REACT src/components/ServicesSection.jsx: used by src/App.jsx
- REACT src/components/TestimonialsSection.jsx: used by src/App.jsx · depends on src/components/testimonials/testimonials.css
- REACT src/components/ValuedClientsSection.jsx: used by src/AboutPage.jsx
- REACT src/components/WhyChooseUs.jsx: depends on src/components/SectionHeading.jsx
- REACT src/data/homeData.js: used by src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx
- REACT src/DesigningPipeSupportsPage.jsx: depends on src/hooks/useServiceReveal.js
- REACT src/hooks/useServiceReveal.js: used by src/DesigningPipeSupportsPage.jsx, src/SiteSupervisionPage.jsx
- REACT src/SiteSupervisionPage.jsx: depends on src/hooks/useServiceReveal.js

## Database references
- DB src/CertificationPage.jsx -> react, quality
- DB vite.config.js -> vite
- DB src/AboutPage.jsx -> react
- DB src/App.jsx -> react
- DB src/ClientsPage.jsx -> react, our
- DB src/components/EnquiryModal.jsx -> react
- DB src/components/FaqClientsSection.jsx -> react
- DB src/components/Header.jsx -> react
- DB src/components/IndustryStrip.jsx -> react
- DB src/components/TestimonialsSection.jsx -> react, design
- DB src/ContactPage.jsx -> react, You
- DB src/data/productsData.js -> cryogenic, overstress, atmospheric, a, structural, galvanic, concrete, underground, independent, excessive, expansion, certified, seamless, ASTM
- DB src/DesigningPipeSupportsPage.jsx -> react, the, Calculation, Brief, Design
- DB src/GalleryPage.jsx -> react
- DB src/hooks/useServiceReveal.js -> react
- DB src/main.jsx -> react
- DB src/PipeStressAnalysisPage.jsx -> react, practical, the, Analysis, Input, design
- DB src/ProductDetailPage.jsx -> react
- DB src/ProductsPage.jsx -> react, spring
- DB src/SiteSupervisionPage.jsx -> react, us, designing
- DB scripts/remove-bg-precise.js -> sharp, fs, path, all
- DB scripts/remove-bg.js -> sharp, fs, path, light, pure

## Symbols
- SYMBOL src/CertificationPage.jsx: CertificationPage, handleKeyDown
- SYMBOL src/AboutPage.jsx: StatIcon, StandardIcon, QualityIcon, AboutValueIcon, AboutPage
- SYMBOL src/App.jsx: currentPage, HomePage, App, syncPage, openEnquiryFromLink
- SYMBOL src/ClientsPage.jsx: ClientsPage
- SYMBOL src/components/AboutSection.jsx: AboutSection
- SYMBOL src/components/EnquiryModal.jsx: FieldIcon, EnquiryModal, handleSubmit, handleKeyDown
- SYMBOL src/components/FaqClientsSection.jsx: MiniIcon, FaqClientsSection
- SYMBOL src/components/Footer.jsx: FooterIcon, Footer
- SYMBOL src/components/Header.jsx: currentPageHash, Header, isActive, closeNavigation, navigateTo, navigateToHomeSection, syncHash, closeDropdownsOnOutsideClick
- SYMBOL src/components/HeroSection.jsx: HeroSection
- SYMBOL src/components/Icon.jsx: Icon
- SYMBOL src/components/IndustryStrip.jsx: IndustryIcon, IndustryStrip, moveCards, scrollToCard, handleScroll, handlePointerDown, handlePointerMove, stopDragging
- SYMBOL src/components/Logo.jsx: Logo
- SYMBOL src/components/MetricsBar.jsx: MetricIcon, MetricsBar
- SYMBOL src/components/PartnersStrip.jsx: PartnersStrip
- SYMBOL src/components/ProductRange.jsx: ProductRange
- SYMBOL src/components/ProjectsSection.jsx: ProjectsSection
- SYMBOL src/components/QuoteSection.jsx: QuoteSection
- SYMBOL src/components/SectionHeading.jsx: SectionHeading
- SYMBOL src/components/ServicesSection.jsx: ServiceIcon, ServicesSection
- SYMBOL src/components/testimonials/testimonials.js: isMobile, totalItems, mobileStep, updateDots, move, goTo, renderDots, startAutoSlide, setup
- SYMBOL src/components/TestimonialsSection.jsx: QuoteIcon, TestimonialCard, TestimonialsSection, update, handleTouchStart, handleTouchMove, handleTouchEnd
- SYMBOL src/components/ValuedClientsSection.jsx: MiniIcon, ValuedClientsSection
- SYMBOL src/components/WhyChooseUs.jsx: WhyChooseUs
- SYMBOL src/ContactPage.jsx: Icon, Label, ContactCard, ContactPage, handleSubmit
- SYMBOL src/data/productsData.js: getProductBySlug
- SYMBOL src/DesigningPipeSupportsPage.jsx: CheckIcon, ServiceKicker, ServiceVisual, DesigningPipeSupportsPage
- SYMBOL src/GalleryPage.jsx: GalleryPage, handleKeyDown
- SYMBOL src/hooks/useServiceReveal.js: useServiceReveal
- SYMBOL src/PipeStressAnalysisPage.jsx: CheckIcon, ServiceKicker, ServiceVisual, PipeStressAnalysisPage
- SYMBOL src/ProductDetailPage.jsx: ShieldIcon, GearIcon, LayersIcon, VerifiedIcon, PdfIcon, HeadsetIcon, QuickFeatureIcon, TechnicalDrawingSVG, ProductDetailPage, handlePrevThumb
- SYMBOL src/ProductsPage.jsx: ArrowIcon, ProductsPage
- SYMBOL src/SiteSupervisionPage.jsx: CheckIcon, ServiceKicker, ServiceVisual, SiteSupervisionPage
- SYMBOL scripts/remove-bg-precise.js: removeBackgroundPrecise, isPixelBgColor, checkNeighbor, run
- SYMBOL scripts/remove-bg.js: removeBackground, run, getPixel

## UI/style selectors
- UI index.html: #root
- UI src/components/testimonials/testimonials.css: .testimonials, #ff6419, #fff, .container, .testimonials-bg, .testimonials-heading, .section-label, #ffffff, .testimonials-sub, #b0cbe2, .testimonial-trust, .testimonial-slider-wrap, .testimonial-slider, .testimonial-track
- UI src/components/testimonials/testimonials.html: #testimonials-heading, .testimonials, .testimonials-bg, .container, .section-heading, .testimonials-heading, .section-label, .testimonials-sub, .testimonial-slider-wrap, .testimonial-slider, .testimonial-track, .testimonial-slide, .testimonial-card, .testimonial-quote
