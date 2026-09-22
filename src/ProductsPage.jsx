import heroImage from '../assets/pipe-support-hero.png'
import constantSpringHangers from '../assets/product-constant-spring-hangers.png'
import constantSpringSupports from '../assets/product-constant-spring-supports.png'
import customFabrication from '../assets/product-custom-fabrication.png'
import marinePipeSupports from '../assets/product-marine-pipe-supports.png'
import pipeClampsUBolts from '../assets/product-pipe-clamps-u-bolts.png'
import oilGasSolutions from '../assets/product-oil-gas-solutions.png'
import slidesGuides from '../assets/product-slides-guides.png'
import variableSpringSupports from '../assets/product-variable-spring-supports.png'

const productImageSet = {
  clamps: pipeClampsUBolts,
  spring: variableSpringSupports,
  constant: constantSpringSupports,
  hanger: constantSpringHangers,
  slides: slidesGuides,
  structure: customFabrication,
  support: marinePipeSupports,
  spools: oilGasSolutions,
}

const categoryGroups = [
  {
    number: '01',
    name: 'Primary Supports',
    description: 'Load-bearing and movement-control components engineered for dependable primary pipe support.',
    products: [
      ['Pipe Shoe / Saddles', 'support'],
      ['Pipe Clamps', 'clamps'],
      ['Trunnions', 'clamps'],
      ['Rest Supports', 'support'],
      ['Guide Shoe', 'slides'],
      ['Puff Supports', 'spring'],
      ['Fix Supports', 'support'],
      ['Line Stops', 'slides'],
      ['Anchor', 'structure'],
      ['U Clamps / U Bolts', 'clamps'],
      ['Foundation Bolts', 'structure'],
      ['Slide Supports', 'slides'],
      ['PTFE Slide Supports', 'slides'],
      ['Roller Supports', 'support'],
      ['Variable Spring Hangers & Supports', 'spring'],
      ['Constant Spring Hangers & Supports', 'constant'],
      ['Rigid Hangers', 'hanger'],
      ['Rigid Struts', 'structure'],
      ['Hydraulic Snubbers', 'hanger'],
    ],
  },
  {
    number: '02',
    name: 'Secondary Supports',
    description: 'Structural support members and framing systems that provide stable load transfer and installation flexibility.',
    products: [
      ['Structural Beams', 'structure'],
      ['Structural Columns', 'structure'],
      ['Structural Frames', 'structure'],
      ['Structural Members', 'support'],
      ['Brackets', 'structure'],
    ],
  },
  {
    number: '03',
    name: 'Pipe Fittings, Flanges & Piping Spools',
    description: 'Precision-fabricated components for complete piping systems, engineered for dependable fit-up and installation.',
    products: [
      ['Pipe Fittings', 'clamps'],
      ['Flanges', 'structure'],
      ['Piping Spools', 'spools'],
    ],
  },
]

function ArrowIcon() {
  return <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
}

export function ProductsPage() {
  return <div className="products-page">
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
          <div><p className="section-kicker"><span />Products</p><h2>Our <strong>Product Categories</strong></h2><p>Explore engineered pipe support systems for power, oil &amp; gas, marine, chemical and industrial applications.</p></div>
          <a className="products-page-brochure" href="#quote"><b>PDF</b><span><strong>Request Product Details</strong><small>Get catalogue &amp; datasheets</small></span><em>→</em></a>
        </div>
        <div className="product-category-grid">
          {categoryGroups.map((category) => <article className={`product-category-card product-category-card--${category.number}`} key={category.name}>
            <div className="product-category-header">
              <div className="product-category-title"><span className="product-category-number">{category.number}</span><h3>{category.name.split(' ')[0]} <strong>{category.name.split(' ').slice(1).join(' ')}</strong></h3></div>
              <p>{category.description}</p>
            </div>
            <div className="product-category-body">
              <div className="product-category-products">
                {category.products.map(([product, imageKey]) => <a href="#quote" className="product-category-product" key={product}>
                  <span className="product-category-product-art"><img src={productImageSet[imageKey]} alt="" /></span>
                  <span className="product-category-product-info"><span className="product-category-product-name">{product}</span><span className="product-category-product-arrow"><ArrowIcon /></span></span>
                </a>)}
              </div>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="products-page-promise"><div className="container"><div><b>01</b><span>Premium<br />materials</span></div><div><b>02</b><span>International<br />standards</span></div><div><b>03</b><span>Customised<br />solutions</span></div><div><b>04</b><span>On-time<br />delivery</span></div><div><b>05</b><span>Technical<br />support</span></div></div></section>

    <section className="products-page-cta" style={{ '--products-cta-image': `url(${heroImage})` }}><div className="products-page-cta-overlay" /><div className="container products-page-cta-inner"><div><p className="products-page-kicker">Let&apos;s build together</p><h2>Need the Right <strong>Piping Solution?</strong></h2><p>Share your requirement with our team for product details, custom support design or bulk enquiries.</p></div><a className="products-page-cta-button" href="#quote">Request a Quote <span>→</span></a></div></section>
  </div>
}
