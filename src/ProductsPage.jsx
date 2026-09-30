import { useEffect, useRef } from 'react'
import heroImage from '../assets/pipe-support-hero.png'
import constantSpringHangers from '../assets/product-constant-spring-hangers.png'
import constantSpringSupports from '../assets/product-constant-spring-supports.png'
import customFabrication from '../assets/product-custom-fabrication.png'
import marinePipeSupports from '../assets/product-marine-pipe-supports.png'
import pipeClampsUBolts from '../assets/product-pipe-clamps-u-bolts.png'
import oilGasSolutions from '../assets/product-oil-gas-solutions.png'
import slidesGuides from '../assets/product-slides-guides.png'
import variableSpringSupports from '../assets/product-variable-spring-supports.png'
import pufSupportPhoto1 from '../assets/Primary Supports/puff-supports/WhatsApp Image 2026-09-25 at 16.06.55565.jpeg'
import guideSupport1 from '../assets/Primary Supports/5. Guide Shoe/Guide support 300 NB-1.png'
import slideSupport1 from '../assets/Primary Supports/5. Guide Shoe/Slide support 300 NB-1.png'
import pipeShoeImage1 from '../assets/Primary Supports/1. Pipe Shoe  Saddles/1.png'
import pipeClampImage1 from '../assets/Primary Supports/pipe clamps/1.png'
import trunnionImage1 from '../assets/Primary Supports/Trunnions/1.png'
import restSupportImage1 from '../assets/Primary Supports/Rest Supports/1.png'
import fixSupportImage1 from '../assets/Primary Supports/Fix Supports/fix-support.png'
import anchorSupportImage1 from '../assets/Primary Supports/Anchor Supports/1.png'
import uClampImage1 from '../assets/Primary Supports/U Clamps - U Bolts/1.png'
import generatedSlideSupportsImage from '../assets/Primary Supports/Slide Supports/generated-slide-supports.png'
import ptfeSlideImage1 from '../assets/Primary Supports/PTFE Slide Supports/1.png'
import rollerSupportsImage1 from '../assets/Primary Supports/Roller Supports/1.png'
import variableSpringImage1 from '../assets/Primary Supports/Variable Spring Hangers & Supports/1.png'
import constantSpringImage1 from '../assets/Primary Supports/Constant Spring Hangers & Supports/1.png'
import rigidHangerImage1 from '../assets/Primary Supports/Rigid Hangers/1.png'
import rigidStrutImage1 from '../assets/Primary Supports/Rigid Struts/rigid strut_1.jpg'
import flangeImage1 from '../assets/Primary Supports/Flanges/1.png'
import foundationBoltImage1 from '../assets/Primary Supports/Foundation Bolts/1.png'
import generatedLineStopsImage from '../assets/Primary Supports/Line Stops/generated-line-stops.png'
import hydraulicSnubberImage1 from '../assets/Primary Supports/Hydraulic Snubbers/1.png'
import structuralBeamImage1 from '../assets/Primary Supports/Structural Beams/1.png'
import structuralColumnImage1 from '../assets/Primary Supports/Structural Columns/1.png'
import structuralFrameImage1 from '../assets/Primary Supports/Structural Frames/1.png'
import structuralMembersImage from '../assets/Primary Supports/Structural Members/generated-structural-members.png'
import bracketImage1 from '../assets/Primary Supports/Brackets/1.png'
import pipeFittingImage1 from '../assets/Primary Supports/Pipe Fittings/1.png'
import pipingSpoolImage1 from '../assets/Primary Supports/Piping Spools/1.png'

const productImageSet = {
  clamps: uClampImage1,
  pipeClamps: pipeClampImage1,
  trunnions: trunnionImage1,
  restSupports: restSupportImage1,
  fixSupports: fixSupportImage1,
  anchorSupports: anchorSupportImage1,
  spring: variableSpringImage1,
  constant: constantSpringImage1,
  hanger: rigidHangerImage1,
  slides: slidesGuides,
  guide: guideSupport1,
  slide: generatedSlideSupportsImage,
  ptfe: ptfeSlideImage1,
  puff: pufSupportPhoto1,
  pipeShoe: pipeShoeImage1,
  structure: customFabrication,
  rigidStrut: rigidStrutImage1,
  flanges: flangeImage1,
  foundationBolts: foundationBoltImage1,
  lineStops: generatedLineStopsImage,
  hydraulicSnubbers: hydraulicSnubberImage1,
  structuralBeams: structuralBeamImage1,
  structuralColumns: structuralColumnImage1,
  structuralFrames: structuralFrameImage1,
  structuralMembers: structuralMembersImage,
  brackets: bracketImage1,
  pipeFittings: pipeFittingImage1,
  pipingSpools: pipingSpoolImage1,
  support: rollerSupportsImage1,
  spools: oilGasSolutions,
}

const categoryGroups = [
  {
    number: '01',
    name: 'Primary Supports',
    description: 'Load-bearing and movement-control components engineered for dependable primary pipe support.',
    products: [
      ['Pipe Shoe / Saddles', 'pipeShoe', 'pipe-shoe-saddles'],
      ['Pipe Clamps', 'pipeClamps', 'pipe-clamps'],
      ['Trunnions', 'trunnions', 'trunnions'],
      ['Rest Supports', 'restSupports', 'rest-supports'],
      ['Guide Shoe', 'guide', 'guide-shoe'],
      ['Puff Supports', 'puff', 'puff-supports'],
      ['Fix Supports', 'fixSupports'],
      ['Line Stops', 'lineStops'],
      ['Anchor', 'anchorSupports'],
      ['U Clamps / U Bolts', 'clamps'],
      ['Foundation Bolts', 'foundationBolts'],
      ['Slide Supports', 'slide'],
      ['PTFE Slide Supports', 'ptfe'],
      ['Roller Supports', 'support'],
      ['Variable Spring Hangers & Supports', 'spring'],
      ['Constant Spring Hangers & Supports', 'constant'],
      ['Rigid Hangers', 'hanger'],
      ['Rigid Struts', 'rigidStrut'],
      ['Hydraulic Snubbers', 'hydraulicSnubbers'],
    ],
  },
  {
    number: '02',
    name: 'Secondary Supports',
    description: 'Structural support members and framing systems that provide stable load transfer and installation flexibility.',
    products: [
      ['Structural Beams', 'structuralBeams'],
      ['Structural Columns', 'structuralColumns'],
      ['Structural Frames', 'structuralFrames'],
      ['Structural Members', 'structuralMembers'],
      ['Brackets', 'brackets'],
    ],
  },
  {
    number: '03',
    name: 'Pipe Fittings, Flanges & Piping Spools',
    description: 'Precision-fabricated components for complete piping systems, engineered for dependable fit-up and installation.',
    products: [
      ['Pipe Fittings', 'pipeFittings'],
      ['Flanges', 'flanges'],
      ['Piping Spools', 'pipingSpools'],
    ],
  },
]

const productPromises = [
  { number: '01', title: 'Premium Materials', subtitle: 'Certified high-grade alloys & structural steel' },
  { number: '02', title: 'Global Standards', subtitle: 'ANSI, ASME & MSS SP-58 certified compliance' },
  { number: '03', title: 'Custom Solutions', subtitle: 'Engineered to exact project job specifications' },
  { number: '04', title: 'On-Time Delivery', subtitle: 'Dependable manufacturing & supply timelines' },
  { number: '05', title: 'Technical Support', subtitle: 'Expert pipe engineering & site supervision' },
]

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
}

export function ProductsPage() {
  const productsRef = useRef(null)

  useEffect(() => {
    const page = productsRef.current
    if (!page) return undefined

    const revealItems = [
      page.querySelector('.products-page-hero-copy'),
      page.querySelector('.products-page-heading'),
      ...page.querySelectorAll('.product-category-card'),
      page.querySelector('.products-promise-heading'),
      ...page.querySelectorAll('.products-promise-card'),
      page.querySelector('.products-page-cta-inner'),
    ].filter(Boolean)

    revealItems.forEach((item, index) => {
      item.classList.add('product-reveal-item')
      item.style.setProperty('--product-item-order', index % 6)
    })

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealItems.forEach((target) => target.classList.add('is-product-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-product-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' })

    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return <div className="products-page" ref={productsRef}>
    <section className="products-page-hero" style={{ '--products-hero-image': `url(${heroImage})` }}>
      <div className="products-page-hero-overlay" />
      <div className="container products-page-hero-inner">
        <div className="products-page-breadcrumb"><a href="#home">Home</a><span>/</span><strong>Products</strong></div>
        <div className="products-page-hero-copy">
          <p className="products-page-kicker"><i />Engineered support systems</p>
          <h1>Products Built to <strong>Support What Matters</strong></h1>
          <p>From spring hangers to custom-fabricated supports, every solution is engineered for safe movement, dependable performance and long service life.</p>
          <div className="products-page-points"><span><b>+</b> Wide product range</span><span><b>✓</b> Premium quality</span><span><b>◉</b> Project-ready support</span><span><b>∞</b> Global standards</span></div>
        </div>
        <div className="products-page-note">Supporting<br /><em>Stronger<br />Industries</em></div>
      </div>
    </section>

    <section className="products-page-catalogue products-section products-section--catalogue">
      <div className="container">
        <div className="products-page-heading">
          <p className="section-kicker"><span />Products</p>
          <h2>Our <strong>Product Categories</strong></h2>
          <p>Explore engineered pipe support systems for power, oil &amp; gas, marine, chemical and industrial applications.</p>
        </div>
        <div className="product-category-grid">
          {categoryGroups.map((category) => <article className={`product-category-card product-category-card--${category.number}`} key={category.name}>
            <div className="product-category-header">
              <div className="product-category-title"><span className="product-category-number">{category.number}</span><h3>{category.name.split(' ')[0]} <strong>{category.name.split(' ').slice(1).join(' ')}</strong></h3></div>
              <p>{category.description}</p>
            </div>
            <div className="product-category-body">
              <div className="product-category-products">
                {category.products.map(([product, imageKey, fixedSlug]) => {
                  const slug = fixedSlug || product.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
                  return (
                    <a href={`/products/${slug}`} className={`product-category-product product-category-product--${imageKey}`} key={product}>
                      <span className="product-category-product-art"><img src={productImageSet[imageKey]} alt="" /></span>
                      <span className="product-category-product-info"><span className="product-category-product-name">{product}</span><span className="product-category-product-arrow"><ArrowIcon /></span></span>
                    </a>
                  )
                })}
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="products-page-promise">
      <div className="container">
        <div className="products-promise-heading">
          <p className="products-promise-kicker"><span />The AAA Advantage</p>
          <h3>Engineered with <strong>Uncompromising Quality</strong></h3>
        </div>
        <div className="products-promise-grid">
          {productPromises.map((item) => (
            <div className="products-promise-card" key={item.number}>
              <span className="products-promise-num">{item.number}</span>
              <div className="products-promise-info">
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="products-page-cta" style={{ '--products-cta-image': `url(${heroImage})` }}><div className="products-page-cta-overlay" /><div className="container products-page-cta-inner"><div><p className="products-page-kicker">Let&apos;s build together</p><h2>Need the Right <strong>Piping Solution?</strong></h2><p>Share your requirement with our team for product details, custom support design or bulk enquiries.</p></div><a className="products-page-cta-button" href="#quote">Request a Quote <span>→</span></a></div></section>
  </div>
}
