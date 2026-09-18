import { useEffect, useState } from 'react'
import contactImage from '../assets/contact.png'

const certificateFiles = import.meta.glob('../assets/certification/*.{jpg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const certificateTitles = {
  '01.-Factory_License_AAA_page-0001.jpg': 'Factory License',
  '02.-ISO-Certificate_page-0001.jpg': 'ISO 9001:2015 Certification',
  '1.-DUNS-Certificate_page-0001.jpg': 'D-U-N-S Registration',
  '2.-ZED-Certificate.jpg': 'ZED Bronze Certification',
  '3.-Award_1.jpg': 'International Achievers Award',
  '4.-Award_2_page-0001-1.png': 'Business Excellence Award',
  '5.-Award_3.jpg': 'Industry Recognition Award',
  'Award_4-683x1024.png': 'Achievement Award',
  'Award_5-683x1024.png': 'Leadership Award',
  'Udyam-Registration-Certificate-AAA-Supports-images-0.jpg': 'Udyam Registration',
}

const certificates = Object.entries(certificateFiles)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([file, image]) => {
    const filename = file.split('/').pop()
    return { image, title: certificateTitles[filename] || 'Certificate & Award', alt: filename }
  })

const featuredCertificate = certificates.find(({ title }) => title.includes('ISO')) || certificates[0]

export function CertificationPage() {
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    if (activeIndex === null) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % certificates.length)
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + certificates.length) % certificates.length)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return <div className="certification-page">
    <section className="contact-banner certification-banner" aria-label="Certificates and Awards banner" style={{ '--contact-banner-image': `url(${contactImage})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-inner container">
        <div className="contact-banner-copy">
          <div className="contact-breadcrumb"><a href="#home">Home</a><span>/</span><strong>Certificates &amp; Awards</strong></div>
          <h1>Certificates <strong>&amp; Awards</strong></h1>
          <p>Our certifications and recognitions reflect our commitment to quality,<br className="desktop-break" /> engineering excellence and trusted industrial solutions.</p>
          <span className="contact-banner-rule" />
          <div className="contact-banner-tagline">QUALITY YOU CAN TRUST<br />EXCELLENCE WE DELIVER</div>
        </div>
      </div>
    </section>

    <main className="certification-main container">
      <div className="certification-heading">
        <span className="certification-kicker"><b />Our Credentials</span>
        <h2>Recognised for <strong>Quality &amp; Excellence</strong></h2>
        <p>Explore our official certifications, registrations and awards that support the standards behind every AAA Supports solution.</p>
      </div>

      <section className="certification-overview">
        <div className="certification-overview-copy">
          <span className="certification-overview-label">Built to meet higher standards</span>
          <h3>Confidence backed by <strong>proof.</strong></h3>
          <p>From quality systems and registrations to industry awards, every credential reflects our focus on dependable engineering, responsible manufacturing and long-term customer value.</p>
          <div className="certification-stats">
            <div><strong>{certificates.length}+</strong><span>Credentials</span></div>
            <div><strong>ISO</strong><span>Quality-led systems</span></div>
            <div><strong>100%</strong><span>Commitment</span></div>
          </div>
        </div>
        <button className="featured-certificate" type="button" onClick={() => setActiveIndex(certificates.indexOf(featuredCertificate))} aria-label={`Open ${featuredCertificate.title}`}>
          <span className="featured-certificate-badge">Featured certification</span>
          <div className="featured-certificate-image"><img src={featuredCertificate.image} alt={featuredCertificate.alt} /></div>
          <span className="featured-certificate-title">{featuredCertificate.title}</span>
          <span className="featured-certificate-open">View full certificate <b>↗</b></span>
        </button>
      </section>

      <div className="certificates-list-heading">
        <div><span className="certification-kicker"><b />Our Recognition</span><h3>Certificates <strong>&amp; Awards</strong></h3></div>
       
      </div>

      <div className="certificate-grid">
        {certificates.map((certificate, index) => <article className="certificate-card" key={certificate.image} role="button" tabIndex="0" onClick={() => setActiveIndex(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setActiveIndex(index) }}>
          <div className="certificate-image-wrap"><img src={certificate.image} alt={certificate.alt} loading="lazy" /><span className="certificate-view">↗</span></div>
          <h3>{certificate.title}</h3>
          <span>View certificate</span>
        </article>)}
      </div>

      <section className="certification-cta" style={{ backgroundImage: `linear-gradient(90deg, rgb(2 35 65 / 94%), rgb(2 35 65 / 70%)), url(${contactImage})` }}>
        <div><span className="certification-cta-kicker"><b />Let’s Work Together</span><h2>Built on <strong>Trust. Proven by Results.</strong></h2><p>Talk to our team about your next piping support requirement.</p></div>
        <a href="#contact">Contact Our Team <span>→</span></a>
      </section>
    </main>

    {activeIndex !== null ? <div className="certificate-lightbox" role="dialog" aria-modal="true" aria-label="Certificate viewer" onClick={() => setActiveIndex(null)}>
      <button className="certificate-lightbox-close" type="button" aria-label="Close certificate viewer" onClick={() => setActiveIndex(null)}>×</button>
      <button className="certificate-lightbox-arrow certificate-lightbox-arrow--left" type="button" aria-label="Previous certificate" onClick={(event) => { event.stopPropagation(); setActiveIndex((index) => (index - 1 + certificates.length) % certificates.length) }}>‹</button>
      <div className="certificate-lightbox-content" onClick={(event) => event.stopPropagation()}><img src={certificates[activeIndex].image} alt={certificates[activeIndex].alt} /><span>{activeIndex + 1} / {certificates.length}</span></div>
      <button className="certificate-lightbox-arrow certificate-lightbox-arrow--right" type="button" aria-label="Next certificate" onClick={(event) => { event.stopPropagation(); setActiveIndex((index) => (index + 1) % certificates.length) }}>›</button>
    </div> : null}
  </div>
}
