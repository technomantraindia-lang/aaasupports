import { useEffect, useRef, useState } from 'react'
import contactImage from '../assets/contact.png'

const galleryFiles = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const categoryByFile = {
  'generated-pipe-clamp.png': ['Pipe Supports', 'Pipe Support Detail'],
  'generated-overhead-piping.png': ['Hangers', 'Overhead Hanger Installation'],
  'generated-steel-structure.png': ['Installation', 'Steel Structure Application'],
  'generated-hardware.png': ['Clamps', 'Fabricated Clamp Hardware'],
  'generated-pipe-rack.png': ['Projects', 'Industrial Pipe Rack'],
  'generated-refinery-support.png': ['Fabrication', 'Refinery Support System'],
}

const galleryItems = Object.entries(galleryFiles)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([file, image]) => {
    const filename = file.split('/').pop()
    const [category, title] = categoryByFile[filename] || ['Projects', 'Industrial Application']
    return {
    image,
    title,
    category,
    alt: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
  }
  })

export function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState(null)
  const galleryRef = useRef(null)

  useEffect(() => {
    const page = galleryRef.current
    if (!page) return undefined

    const sections = [page.querySelector('.gallery-banner'), page.querySelector('.gallery-cta')].filter(Boolean)
    const items = [...page.querySelectorAll('.gallery-banner .contact-banner-copy, .gallery-card, .gallery-cta > div, .gallery-cta > a')]
    const directions = ['gallery-reveal-left', 'gallery-reveal-up', 'gallery-reveal-right', 'gallery-reveal-down']

    sections.forEach((section) => section.classList.add('gallery-reveal-section'))
    items.forEach((item, index) => {
      item.classList.add('gallery-reveal-item', directions[index % directions.length])
      item.style.setProperty('--gallery-item-order', index % 6)
    })

    const revealTargets = [...sections, ...items]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-gallery-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-gallery-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (activeIndex === null) return undefined
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null)
      if (event.key === 'ArrowRight') setActiveIndex((index) => (index + 1) % galleryItems.length)
      if (event.key === 'ArrowLeft') setActiveIndex((index) => (index - 1 + galleryItems.length) % galleryItems.length)
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  return <div className="gallery-page" ref={galleryRef}>
    <section className="contact-banner gallery-banner" aria-label="Gallery banner" style={{ '--contact-banner-image': `url(${contactImage})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-inner container">
        <div className="contact-banner-copy">
          <div className="contact-breadcrumb"><a href="#home">Home</a><span>/</span><strong>Gallery</strong></div>
          <h1>Gallery <strong>Showcase</strong></h1>
          <p>A glimpse of our products, projects and real-world applications.<br className="desktop-break" /> Quality. Strength. Reliability.</p>
          <span className="contact-banner-rule" />
          <div className="contact-banner-tagline">SUPPORTING<br />INDUSTRIES WORLDWIDE</div>
        </div>
      </div>
    </section>

    <main className="gallery-main container">
      <div className="gallery-grid">
        {galleryItems.map((item, index) => <figure className="gallery-card" key={`${item.image}-${index}`} role="button" tabIndex="0" aria-label={`Open image ${index + 1}`} onClick={() => setActiveIndex(index)} onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') setActiveIndex(index) }}>
          <img src={item.image} alt={item.alt} loading="lazy" />
        </figure>)}
      </div>

      <section className="gallery-cta" style={{ backgroundImage: `linear-gradient(90deg, rgb(3 39 72 / 92%), rgb(4 56 93 / 75%)), url(${contactImage})` }}>
        <div><span className="gallery-cta-kicker"><b />Let’s Connect</span><h2>Have a <strong>Project in Mind?</strong></h2><p>Let’s discuss how we can support your piping system needs.</p></div>
        <a href="#contact">Get In Touch <span>→</span></a>
      </section>

    </main>

    {activeIndex !== null ? <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer" onClick={() => setActiveIndex(null)}>
      <button className="gallery-lightbox-close" type="button" aria-label="Close image viewer" onClick={() => setActiveIndex(null)}>×</button>
      <button className="gallery-lightbox-arrow gallery-lightbox-arrow--left" type="button" aria-label="Previous image" onClick={(event) => { event.stopPropagation(); setActiveIndex((index) => (index - 1 + galleryItems.length) % galleryItems.length) }}>‹</button>
      <div className="gallery-lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={galleryItems[activeIndex].image} alt={galleryItems[activeIndex].alt} />
        <span>{activeIndex + 1} / {galleryItems.length}</span>
      </div>
      <button className="gallery-lightbox-arrow gallery-lightbox-arrow--right" type="button" aria-label="Next image" onClick={(event) => { event.stopPropagation(); setActiveIndex((index) => (index + 1) % galleryItems.length) }}>›</button>
    </div> : null}
  </div>
}
