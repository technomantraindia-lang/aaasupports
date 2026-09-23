import { useEffect, useRef, useState } from 'react'
import heroImage from '../assets/pipe-support-hero.png'
import { getProductBySlug } from './data/productsData.js'

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function LayersIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  )
}

function VerifiedIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function PdfIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  )
}

function HeadsetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}

function QuickFeatureIcon({ type }) {
  if (type === 'standard') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    )
  }
  if (type === 'insulated') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    )
  }
  if (type === 'custom') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
}

function TechnicalDrawingSVG({ type }) {
  if (type === 'welded-shoe') {
    return (
      <svg viewBox="0 0 320 280" className="technical-drawing-svg" aria-label="Welded Pipe Shoe Diagram">
        {/* Outer Dimension Lines */}
        <line x1="30" y1="70" x2="30" y2="230" stroke="#607d94" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="22" y1="70" x2="38" y2="70" stroke="#607d94" strokeWidth="1.5" />
        <line x1="22" y1="230" x2="38" y2="230" stroke="#607d94" strokeWidth="1.5" />
        <text x="14" y="155" fill="#1b4965" fontSize="13" fontWeight="700" fontFamily="sans-serif">H</text>

        <line x1="60" y1="255" x2="260" y2="255" stroke="#607d94" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="60" y1="248" x2="60" y2="262" stroke="#607d94" strokeWidth="1.5" />
        <line x1="260" y1="248" x2="260" y2="262" stroke="#607d94" strokeWidth="1.5" />
        <text x="156" y="272" fill="#1b4965" fontSize="13" fontWeight="700" fontFamily="sans-serif">B</text>

        {/* OD Dimension */}
        <line x1="95" y1="42" x2="225" y2="42" stroke="#607d94" strokeWidth="1.2" strokeDasharray="3 3" />
        <line x1="95" y1="36" x2="95" y2="48" stroke="#607d94" strokeWidth="1.5" />
        <line x1="225" y1="36" x2="225" y2="48" stroke="#607d94" strokeWidth="1.5" />
        <text x="150" y="32" fill="#1b4965" fontSize="13" fontWeight="700" fontFamily="sans-serif">OD</text>

        {/* Pipe Circle */}
        <circle cx="160" cy="130" r="65" fill="#f0f6fa" stroke="#163e5e" strokeWidth="2.5" />
        <circle cx="160" cy="130" r="54" fill="#ffffff" stroke="#789cb4" strokeWidth="1.5" strokeDasharray="4 2" />

        {/* Saddle Cradle */}
        <path d="M85 110 Q160 185 235 110 L245 118 Q160 205 75 118 Z" fill="#b9d6e8" stroke="#123652" strokeWidth="2" />

        {/* Vertical Web Ribs */}
        <rect x="105" y="152" width="12" height="78" fill="#d2e4f0" stroke="#123652" strokeWidth="2" />
        <rect x="203" y="152" width="12" height="78" fill="#d2e4f0" stroke="#123652" strokeWidth="2" />

        {/* Base Plate */}
        <rect x="60" y="222" width="200" height="12" rx="2" fill="#9ec4dc" stroke="#123652" strokeWidth="2.5" />

        {/* Bolt Holes on Base */}
        <circle cx="78" cy="228" r="3" fill="#123652" />
        <circle cx="242" cy="228" r="3" fill="#123652" />

        {/* Thickness callout 't' */}
        <line x1="262" y1="185" x2="285" y2="185" stroke="#ff6419" strokeWidth="1.5" />
        <circle cx="262" cy="185" r="2.5" fill="#ff6419" />
        <text x="290" y="190" fill="#ff6419" fontSize="13" fontWeight="800" fontFamily="sans-serif">t</text>
      </svg>
    )
  }

  // Clamped / Insulated Shoe
  return (
    <svg viewBox="0 0 320 280" className="technical-drawing-svg" aria-label="Clamped Pipe Shoe Diagram">
      {/* Outer Dimension Lines */}
      <line x1="25" y1="55" x2="25" y2="230" stroke="#607d94" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="17" y1="55" x2="33" y2="55" stroke="#607d94" strokeWidth="1.5" />
      <line x1="17" y1="230" x2="33" y2="230" stroke="#607d94" strokeWidth="1.5" />
      <text x="9" y="148" fill="#1b4965" fontSize="13" fontWeight="700" fontFamily="sans-serif">H</text>

      <line x1="55" y1="255" x2="265" y2="255" stroke="#607d94" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="55" y1="248" x2="55" y2="262" stroke="#607d94" strokeWidth="1.5" />
      <line x1="265" y1="248" x2="265" y2="262" stroke="#607d94" strokeWidth="1.5" />
      <text x="156" y="272" fill="#1b4965" fontSize="13" fontWeight="700" fontFamily="sans-serif">B</text>

      {/* OD Dimension */}
      <line x1="90" y1="36" x2="230" y2="36" stroke="#607d94" strokeWidth="1.2" strokeDasharray="3 3" />
      <line x1="90" y1="30" x2="90" y2="42" stroke="#607d94" strokeWidth="1.5" />
      <line x1="230" y1="30" x2="230" y2="42" stroke="#607d94" strokeWidth="1.5" />
      <text x="150" y="26" fill="#1b4965" fontSize="13" fontWeight="700" fontFamily="sans-serif">OD</text>

      {/* Insulation Ring */}
      <circle cx="160" cy="125" r="70" fill="#e4eff7" stroke="#89a9c2" strokeWidth="1.5" strokeDasharray="4 2" />
      {/* Pipe Body */}
      <circle cx="160" cy="125" r="52" fill="#ffffff" stroke="#163e5e" strokeWidth="2.5" />

      {/* Top Clamp Half */}
      <path d="M78 125 A 82 82 0 0 1 242 125" fill="none" stroke="#123652" strokeWidth="5.5" strokeLinecap="round" />
      {/* Bottom Clamp Half */}
      <path d="M78 135 A 82 82 0 0 0 242 135" fill="none" stroke="#123652" strokeWidth="5.5" strokeLinecap="round" />

      {/* Clamping Flange Tabs & Bolts */}
      <rect x="62" y="118" width="22" height="24" rx="2" fill="#b9d6e8" stroke="#123652" strokeWidth="2" />
      <rect x="236" y="118" width="22" height="24" rx="2" fill="#b9d6e8" stroke="#123652" strokeWidth="2" />
      {/* Bolt Studs */}
      <line x1="73" y1="110" x2="73" y2="150" stroke="#123652" strokeWidth="3" />
      <line x1="247" y1="110" x2="247" y2="150" stroke="#123652" strokeWidth="3" />

      {/* Support Web */}
      <rect x="110" y="165" width="12" height="60" fill="#d2e4f0" stroke="#123652" strokeWidth="2" />
      <rect x="198" y="165" width="12" height="60" fill="#d2e4f0" stroke="#123652" strokeWidth="2" />

      {/* Base Plate */}
      <rect x="55" y="222" width="210" height="12" rx="2" fill="#9ec4dc" stroke="#123652" strokeWidth="2.5" />

      {/* Thickness 't' Callout */}
      <line x1="258" y1="102" x2="280" y2="102" stroke="#ff6419" strokeWidth="1.5" />
      <circle cx="258" cy="102" r="2.5" fill="#ff6419" />
      <text x="286" y="106" fill="#ff6419" fontSize="13" fontWeight="800" fontFamily="sans-serif">t</text>
    </svg>
  )
}

export function ProductDetailPage({ productSlug = 'pipe-shoe-saddles', onRequestQuote }) {
  const pageRef = useRef(null)
  const product = getProductBySlug(productSlug)
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  // Scroll to top when product changes
  useEffect(() => {
    setActiveImageIndex(0)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [productSlug])

  // Scroll reveal observer
  useEffect(() => {
    const page = pageRef.current
    if (!page) return undefined

    const revealItems = [
      page.querySelector('.product-detail-hero-copy'),
      page.querySelector('.product-detail-hero-badges'),
      page.querySelector('.product-gallery-card'),
      page.querySelector('.product-overview-content'),
      page.querySelector('.product-specs-card'),
      page.querySelector('.product-drawing-card'),
      page.querySelector('.product-features-navy-section'),
      page.querySelector('.product-related-section'),
      page.querySelector('.product-cta-bottom-banner'),
    ].filter(Boolean)

    revealItems.forEach((item, index) => {
      item.classList.add('pdp-reveal-item')
      item.style.setProperty('--pdp-order', index % 6)
    })

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach((target) => target.classList.add('is-pdp-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-pdp-visible')
          currentObserver.unobserve(entry.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    )

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [productSlug])

  const galleryImages = product.galleryImages || []
  const currentImage = galleryImages[activeImageIndex] || galleryImages[0]
  const sideImage1 = galleryImages[(activeImageIndex + 1) % galleryImages.length] || galleryImages[0]
  const sideImage2 = galleryImages[(activeImageIndex + 2) % galleryImages.length] || galleryImages[0]

  const handlePrevThumb = () => {
    setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const handleNextThumb = () => {
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)
  }

  return (
    <div className="product-detail-page" ref={pageRef}>
      {/* 1. Header Banner matching Contact Page Design & Size */}
      <section
        className="contact-banner pdp-hero-banner"
        aria-label={`${product.title} banner`}
        style={{ '--contact-banner-image': `url(${heroImage})` }}
      >
        <div className="contact-banner-overlay" />
        <div className="contact-banner-inner container">
          <div className="contact-banner-copy">
            <div className="contact-breadcrumb">
              <a href="#home">Home</a>
              <span>/</span>
              <a href="#products">Products</a>
              <span>/</span>
              <strong>{product.title}</strong>
            </div>

            <div className="pdp-category-pill">
              <span className="pdp-category-pill-dot" />
              <span>{product.category}</span>
            </div>

            <h1>
              {product.title.split(product.highlightWord)[0]}
              <strong>{product.highlightWord}</strong>
              {product.title.split(product.highlightWord)[1]}
            </h1>

            <p>{product.tagline || product.heroDescription}</p>

            <span className="contact-banner-rule" />

            <div className="contact-banner-tagline">
              ENGINEERED SUPPORTS<br />BUILT FOR RELIABILITY
            </div>
          </div>
        </div>
      </section>

      {/* 2. Product Gallery & Overview Section (2-Column Grid) */}
      <section className="product-detail-main-section">
        <div className="container product-detail-main-grid">
          {/* Left Column: Gallery */}
          <div className="product-gallery-card">
            <div className="product-gallery-stage">
              <div className="pdp-stage-badge">
                <span className="pdp-stage-dot" />
                <span>Industrial Grade Spec</span>
              </div>
              <div className="pdp-stage-counter">
                <span>{activeImageIndex + 1} / {galleryImages.length}</span>
              </div>

              {/* Main Image Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    className="pdp-stage-arrow pdp-stage-arrow--left"
                    type="button"
                    onClick={handlePrevThumb}
                    aria-label="Previous image"
                  >
                    &#8249;
                  </button>
                  <button
                    className="pdp-stage-arrow pdp-stage-arrow--right"
                    type="button"
                    onClick={handleNextThumb}
                    aria-label="Next image"
                  >
                    &#8250;
                  </button>
                </>
              )}

              <div className="product-gallery-main-view">
                <img src={currentImage} alt={`${product.title} Primary View`} loading="eager" />
              </div>
            </div>

            {/* Thumbnail Strip (Direct clickable thumbnails) */}
            {galleryImages.length > 1 && (
              <div className="product-gallery-thumbs-row">
                <div className="product-gallery-thumbs-track">
                  {galleryImages.map((img, idx) => (
                    <button
                      className={`pdp-thumb-btn ${idx === activeImageIndex ? 'is-active' : ''}`}
                      key={`thumb-${idx}`}
                      onClick={() => setActiveImageIndex(idx)}
                      type="button"
                      aria-label={`Show image ${idx + 1}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Product Overview */}
          <div className="product-overview-content">
            <div className="pdp-section-kicker">
              <span className="pdp-kicker-dash" />
              <span>PRODUCT OVERVIEW</span>
            </div>
            <h2 className="pdp-overview-title">
              {product.title.split(product.highlightWord)[0]}
              <strong>{product.highlightWord}</strong>
              {product.title.split(product.highlightWord)[1]}
            </h2>
            <p className="pdp-overview-paragraph">{product.overviewText}</p>

            {/* 4 Quick Spec Feature Cards (Compact 2x2 Grid) */}
            <div className="pdp-quick-features-grid">
              {product.quickFeatures.map((feat) => (
                <div className="pdp-quick-feature-card" key={feat.title}>
                  <div className="pdp-quick-feature-icon-box">
                    <QuickFeatureIcon type={feat.icon} />
                  </div>
                  <div className="pdp-quick-feature-text">
                    <strong>{feat.title}</strong>
                    <small>{feat.subtitle}</small>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pdp-action-buttons">
              <button
                className="pdp-btn-primary"
                type="button"
                onClick={() => onRequestQuote?.()}
              >
                Request a Quote <span>&rarr;</span>
              </button>
              <a
                className="pdp-btn-secondary"
                href="tel:+918460722294"
              >
                <span>Direct Contact</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technical Specifications & Dimensional Drawing (2-Column Grid) */}
      <section className="product-specs-drawings-section">
        <div className="container product-specs-drawings-grid">
          {/* Left: Technical Specifications */}
          <div className="product-specs-card">
            <span className="pdp-section-kicker">
              <b className="pdp-kicker-dash" />Technical Specifications
            </span>
            <div className="pdp-specs-table-wrap">
              <table className="pdp-specs-table">
                <tbody>
                  {product.specs.map((item) => (
                    <tr key={item.label}>
                      <th>{item.label}</th>
                      <td>{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right: Dimensional Drawing */}
          <div className="product-drawing-card">
            <span className="pdp-section-kicker">
              <b className="pdp-kicker-dash" />Dimensional Drawing
            </span>
            <div className="pdp-drawings-container">
              {product.drawings.map((draw) => (
                <div className="pdp-drawing-item" key={draw.type}>
                  <div className="pdp-drawing-header">
                    <strong>{draw.type}</strong>
                    <span>{draw.title}</span>
                  </div>
                  <div className="pdp-drawing-canvas">
                    <TechnicalDrawingSVG type={draw.diagramType} />
                  </div>
                </div>
              ))}
            </div>
            <p className="pdp-drawing-disclaimer">
              Note: Dimensions are indicative. Detailed drawings will be provided for specific projects.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Key Features (Dedicated Full-Width Section) */}
      <section className="product-features-navy-section">
        <div className="container">
          <div className="pdp-section-heading pdp-section-heading--light">
            <span className="pdp-section-kicker pdp-section-kicker--light">
              <b className="pdp-kicker-dash" />Key Engineering Features
            </span>
            <h2>Engineered for <strong>Reliability &amp; Longevity</strong></h2>
            <p>Designed in accordance with ASME and MSS standards for maximum structural stability in demanding industrial lines.</p>
          </div>

          <div className="pdp-features-cards-grid">
            {product.keyFeatures.map((feat, index) => (
              <div className="pdp-feature-card" key={feat}>
                <div className="pdp-feature-card-header">
                  <span className="pdp-feature-card-icon">
                    {index % 4 === 0 && <ShieldIcon />}
                    {index % 4 === 1 && <GearIcon />}
                    {index % 4 === 2 && <LayersIcon />}
                    {index % 4 === 3 && <VerifiedIcon />}
                  </span>
                  <span className="pdp-feature-card-num">0{index + 1}</span>
                </div>
                <div className="pdp-feature-card-content">
                  <strong>{feat}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Applications (Dedicated Full-Width Section) */}
      <section className="product-applications-section">
        <div className="container">
          <div className="pdp-section-heading">
            <span className="pdp-section-kicker">
              <b className="pdp-kicker-dash" />Applications
            </span>
            <h2>Industrial <strong>Sectors &amp; Environments</strong></h2>
            <p>Proven operational excellence across power plants, refineries, heavy process industries, and offshore marine setups.</p>
          </div>

          <div className="pdp-applications-grid-full">
            {product.applications.map((app) => (
              <div className="pdp-app-card-full" key={app.title}>
                <div className="pdp-app-img-box">
                  <img src={app.image} alt={app.title} loading="lazy" />
                  <div className="pdp-app-img-overlay" />
                  <span className="pdp-app-badge-overlay">Certified</span>
                </div>
                <div className="pdp-app-card-bottom">
                  <h4>{app.title}</h4>
                  <span className="pdp-app-badge">Engineered Setup</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related Products Section */}
      <section className="product-related-section">
        <div className="container">
          <div className="pdp-related-header">
            <div>
              <span className="pdp-section-kicker">
                <b className="pdp-kicker-dash" />Related Products
              </span>
              <h2 className="pdp-related-title">
                Explore Other <strong>Engineered Supports</strong>
              </h2>
            </div>
            <div className="pdp-related-nav-arrows">
              <button
                className="pdp-thumb-arrow"
                type="button"
                onClick={() => {
                  const el = document.getElementById('pdp-related-track')
                  if (el) el.scrollBy({ left: -300, behavior: 'smooth' })
                }}
                aria-label="Previous related products"
              >
                &lsaquo;
              </button>
              <button
                className="pdp-thumb-arrow"
                type="button"
                onClick={() => {
                  const el = document.getElementById('pdp-related-track')
                  if (el) el.scrollBy({ left: 300, behavior: 'smooth' })
                }}
                aria-label="Next related products"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          <div className="pdp-related-track" id="pdp-related-track">
            {product.relatedSlugs.map((relSlug) => {
              const relProd = getProductBySlug(relSlug)
              const relImg = relProd.galleryImages?.[0] || heroImage
              return (
                <article className="pdp-related-card" key={relSlug}>
                  <div className="pdp-related-img-wrap">
                    <img src={relImg} alt={relProd.title} loading="lazy" />
                  </div>
                  <div className="pdp-related-info">
                    <span className="pdp-related-cat">{relProd.category}</span>
                    <h4>{relProd.title}</h4>
                    <a
                      className="pdp-related-link"
                      href={`#product-${relSlug}`}
                      onClick={() => {
                        window.location.hash = `#product-${relSlug}`
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }}
                    >
                      View Details <span>&rarr;</span>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Bottom CTA Banner */}
      <section className="product-cta-bottom-banner">
        <div className="product-cta-bottom-overlay" />
        <div className="container product-cta-bottom-inner">
          <div className="product-cta-bottom-left">
            <div className="pdp-headset-circle">
              <HeadsetIcon />
            </div>
            <div>
              <h3>
                Need the Right Support for <strong>Your Project?</strong>
              </h3>
              <p>Get in touch with our engineering team for technical guidance and competitive pricing.</p>
            </div>
          </div>
          <button
            className="pdp-cta-pill-btn"
            type="button"
            onClick={() => onRequestQuote?.()}
          >
            Talk to Our Experts <span>&rarr;</span>
          </button>
        </div>
      </section>
    </div>
  )
}
