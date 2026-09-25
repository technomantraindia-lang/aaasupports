# Technomantra Project Memory

> This is a persistent locator map, not a claim that file contents are current. Read each target only once per task and rely on normal invalidation after edits.

- Workspace: AAA
- Technology: React, Vite, Node.js/npm
- Active file at refresh: None
- Local code graph: 43 files · 67 edges · 0 matched flows
- Refreshed: 2026-09-25T03:34:23.412Z

## Framework Intelligence (V4.7.8)
- Profiles: react
- Package manager: npm

### Entry / bootstrap candidates
- src/main.jsx
- src/App.jsx
- index.html

### Components
- src/components/testimonials/README.md
- src/components/AboutSection.jsx
- src/components/EnquiryModal.jsx
- src/components/FaqClientsSection.jsx
- src/components/Footer.jsx
- src/components/Header.jsx
- src/components/HeroSection.jsx
- src/components/Icon.jsx
- src/components/index.js
- src/components/IndustryStrip.jsx
- src/components/Logo.jsx
- src/components/MetricsBar.jsx
- src/components/PartnersStrip.jsx
- src/components/ProductRange.jsx
- src/components/ProjectsSection.jsx
- src/components/QuoteSection.jsx

### React component symbols
- src/CertificationPage.jsx: CertificationPage
- src/AboutPage.jsx: AboutPage, StatIcon, StandardIcon, QualityIcon, AboutValueIcon
- src/App.jsx: HomePage, App
- src/ClientsPage.jsx: ClientsPage
- src/components/AboutSection.jsx: AboutSection
- src/components/EnquiryModal.jsx: EnquiryModal, FieldIcon
- src/components/FaqClientsSection.jsx: FaqClientsSection, MiniIcon
- src/components/Footer.jsx: Footer, FooterIcon
- src/components/Header.jsx: Header
- src/components/HeroSection.jsx: HeroSection
- src/components/Icon.jsx: Icon
- src/components/IndustryStrip.jsx: IndustryStrip, IndustryIcon
- src/components/Logo.jsx: Logo
- src/components/MetricsBar.jsx: MetricsBar, MetricIcon
- src/components/PartnersStrip.jsx: PartnersStrip
- src/components/ProductRange.jsx: ProductRange
- src/components/ProjectsSection.jsx: ProjectsSection
- src/components/QuoteSection.jsx: QuoteSection
- src/components/SectionHeading.jsx: SectionHeading
- src/components/ServicesSection.jsx: ServicesSection, ServiceIcon
- src/components/TestimonialsSection.jsx: TestimonialsSection, QuoteIcon, TestimonialCard
- src/components/ValuedClientsSection.jsx: ValuedClientsSection, MiniIcon
- src/components/WhyChooseUs.jsx: WhyChooseUs
- src/ContactPage.jsx: ContactPage, Icon, Label, ContactCard
- src/DesigningPipeSupportsPage.jsx: DesigningPipeSupportsPage, CheckIcon, ServiceKicker, ServiceVisual
- src/GalleryPage.jsx: GalleryPage
- src/PipeStressAnalysisPage.jsx: PipeStressAnalysisPage, CheckIcon, ServiceKicker, ServiceVisual
- src/ProductDetailPage.jsx: ProductDetailPage, ShieldIcon, GearIcon, LayersIcon, VerifiedIcon
- src/ProductsPage.jsx: ProductsPage, ArrowIcon
- src/SiteSupervisionPage.jsx: SiteSupervisionPage, CheckIcon, ServiceKicker, ServiceVisual

### React dependency / API chains
- src/AboutPage.jsx: depends on src/components/ValuedClientsSection.jsx
- src/App.jsx: used by src/main.jsx · depends on src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/TestimonialsSection.jsx, src/components/FaqClientsSection.jsx, src/components/AboutSection.jsx
- src/components/AboutSection.jsx: used by src/App.jsx, src/components/index.js
- src/components/FaqClientsSection.jsx: used by src/App.jsx
- src/components/Footer.jsx: used by src/components/index.js · depends on src/components/Logo.jsx
- src/components/Header.jsx: used by src/App.jsx, src/components/index.js · depends on src/components/Logo.jsx
- src/components/HeroSection.jsx: used by src/App.jsx, src/components/index.js · depends on src/components/Icon.jsx
- src/components/Icon.jsx: used by src/components/HeroSection.jsx
- src/components/index.js: depends on src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/PartnersStrip.jsx
- src/components/IndustryStrip.jsx: used by src/App.jsx, src/components/index.js
- src/components/Logo.jsx: used by src/components/Footer.jsx, src/components/Header.jsx
- src/components/MetricsBar.jsx: used by src/components/index.js
- src/components/PartnersStrip.jsx: used by src/components/index.js
- src/components/ProductRange.jsx: used by src/App.jsx, src/components/index.js
- src/components/ProjectsSection.jsx: depends on src/components/SectionHeading.jsx
- src/components/SectionHeading.jsx: used by src/components/ProjectsSection.jsx, src/components/WhyChooseUs.jsx
- src/components/ServicesSection.jsx: used by src/App.jsx
- src/components/TestimonialsSection.jsx: used by src/App.jsx · depends on src/components/testimonials/testimonials.css
- src/components/ValuedClientsSection.jsx: used by src/AboutPage.jsx
- src/components/WhyChooseUs.jsx: depends on src/components/SectionHeading.jsx
- src/data/homeData.js: used by src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx
- src/data/web3forms.js: used by src/components/EnquiryModal.jsx, src/ContactPage.jsx
- src/DesigningPipeSupportsPage.jsx: depends on src/hooks/useServiceReveal.js
- src/hooks/useServiceReveal.js: used by src/DesigningPipeSupportsPage.jsx, src/SiteSupervisionPage.jsx
- src/SiteSupervisionPage.jsx: depends on src/hooks/useServiceReveal.js

### Styles
- src/components/testimonials/testimonials.css
- src/index.css

### Available validation scripts
- dev: vite
- build: vite build
- preview: vite preview

### Local dependency hints
- src/AboutPage.jsx -> src/components/ValuedClientsSection.jsx
- src/App.jsx -> src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/TestimonialsSection.jsx, src/components/FaqClientsSection.jsx, src/components/AboutSection.jsx, src/components/ProductRange.jsx, src/components/ServicesSection.jsx
- src/components/AboutSection.jsx -> src/data/homeData.js
- src/components/EnquiryModal.jsx -> src/data/web3forms.js
- src/components/Footer.jsx -> src/components/Logo.jsx, src/data/homeData.js
- src/components/Header.jsx -> src/data/homeData.js, src/components/Logo.jsx
- src/components/HeroSection.jsx -> src/data/homeData.js, src/components/Icon.jsx
- src/components/index.js -> src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx, src/components/IndustryStrip.jsx, src/components/PartnersStrip.jsx, src/components/MetricsBar.jsx, src/components/ProductRange.jsx
- src/components/MetricsBar.jsx -> src/data/homeData.js
- src/components/PartnersStrip.jsx -> src/data/homeData.js
- src/components/ProjectsSection.jsx -> src/data/homeData.js, src/components/SectionHeading.jsx
- src/components/TestimonialsSection.jsx -> src/components/testimonials/testimonials.css
- src/components/WhyChooseUs.jsx -> src/components/SectionHeading.jsx, src/data/homeData.js
- src/ContactPage.jsx -> src/data/web3forms.js
- src/DesigningPipeSupportsPage.jsx -> src/hooks/useServiceReveal.js
- src/main.jsx -> src/App.jsx, src/index.css
- src/ProductDetailPage.jsx -> src/data/productsData.js
- src/SiteSupervisionPage.jsx -> src/hooks/useServiceReveal.js

### Reverse dependency hints
- src/components/ValuedClientsSection.jsx <- src/AboutPage.jsx
- src/components/Header.jsx <- src/App.jsx, src/components/index.js
- src/components/HeroSection.jsx <- src/App.jsx, src/components/index.js
- src/components/IndustryStrip.jsx <- src/App.jsx, src/components/index.js
- src/components/TestimonialsSection.jsx <- src/App.jsx
- src/components/FaqClientsSection.jsx <- src/App.jsx
- src/components/AboutSection.jsx <- src/App.jsx, src/components/index.js
- src/components/ProductRange.jsx <- src/App.jsx, src/components/index.js
- src/components/ServicesSection.jsx <- src/App.jsx
- src/data/homeData.js <- src/components/AboutSection.jsx, src/components/Footer.jsx, src/components/Header.jsx, src/components/HeroSection.jsx, src/components/MetricsBar.jsx, src/components/PartnersStrip.jsx, src/components/ProjectsSection.jsx, src/components/WhyChooseUs.jsx
- src/data/web3forms.js <- src/components/EnquiryModal.jsx, src/ContactPage.jsx
- src/components/Logo.jsx <- src/components/Footer.jsx, src/components/Header.jsx
- src/components/Icon.jsx <- src/components/HeroSection.jsx
- src/components/Footer.jsx <- src/components/index.js
- src/components/PartnersStrip.jsx <- src/components/index.js
- src/components/MetricsBar.jsx <- src/components/index.js
- src/components/SectionHeading.jsx <- src/components/ProjectsSection.jsx, src/components/WhyChooseUs.jsx
- src/components/testimonials/testimonials.css <- src/components/TestimonialsSection.jsx
- src/hooks/useServiceReveal.js <- src/DesigningPipeSupportsPage.jsx, src/SiteSupervisionPage.jsx
- src/App.jsx <- src/main.jsx

## Recently edited files
- src/CertificationPage.jsx

## High-value project files
- src/CertificationPage.jsx
- index.html
- package.json
- README.md
- src/components/testimonials/README.md
- vite.config.js
- src/AboutPage.jsx
- src/App.jsx
- src/ClientsPage.jsx
- src/components/AboutSection.jsx
- src/components/EnquiryModal.jsx
- src/components/FaqClientsSection.jsx
- src/components/Footer.jsx
- src/components/Header.jsx
- src/components/HeroSection.jsx
- src/components/Icon.jsx
- src/components/index.js
- src/components/IndustryStrip.jsx
- src/components/Logo.jsx
- src/components/MetricsBar.jsx
- src/components/PartnersStrip.jsx
- src/components/ProductRange.jsx
- src/components/ProjectsSection.jsx
- src/components/QuoteSection.jsx
- src/components/SectionHeading.jsx
- src/components/ServicesSection.jsx
- src/components/testimonials/testimonials.css
- src/components/testimonials/testimonials.html
- src/components/testimonials/testimonials.js
- src/components/TestimonialsSection.jsx
- src/components/ValuedClientsSection.jsx
- src/components/WhyChooseUs.jsx
- src/ContactPage.jsx
- src/data/homeData.js
- src/data/productsData.js
- src/data/web3forms.js
- src/DesigningPipeSupportsPage.jsx
- src/GalleryPage.jsx
- src/hooks/useServiceReveal.js
- src/index.css
- src/main.jsx
- src/PipeStressAnalysisPage.jsx
- src/ProductDetailPage.jsx
- src/ProductsPage.jsx
- src/SiteSupervisionPage.jsx
- .clinerules/05-technomantra-execution-mode.md
- .clinerules/06-technomantra-developer-mode.md
- .clinerules/07-technomantra-eco-execution.md
- .clinerules/08-technomantra-task-watchdog.md
- .clinerules/09-technomantra-multitask-isolation.md
- .clinerules/10-technomantra-project-memory.md
- .clinerules/11-technomantra-code-knowledge.md
- .clinerules/12-technomantra-task-capsules.md
- .clinerules/13-technomantra-runtime-price-optimizer.md
- .clinerules/14-technomantra-adaptive-cost-optimizer.md
- .clinerules/15-technomantra-fast-coding-engine.md
- .clinerules/90-technomantra-selected-agent.md
- .vscode/technomantra-project.json
- package-lock.json
- scripts/remove-bg-precise.js
- scripts/remove-bg.js
- vercel.json
