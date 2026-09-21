import variableSpringSupports from '../assets/product-variable-spring-supports.png'
import constantSpringHangers from '../assets/product-constant-spring-hangers.png'
import constantSpringSupports from '../assets/product-constant-spring-supports.png'
import pipeClampsUBolts from '../assets/product-pipe-clamps-u-bolts.png'
import slidesGuides from '../assets/product-slides-guides.png'
import customFabrication from '../assets/product-custom-fabrication.png'
import marinePipeSupports from '../assets/product-marine-pipe-supports.png'
import oilGasSolutions from '../assets/product-oil-gas-solutions.png'
import heroImage from '../assets/pipe-support-hero.png'

const categories = [
  { name: 'Variable Spring Supports', description: 'Engineered for controlled movement, vibration reduction and reliable load management.', image: variableSpringSupports, tag: 'Load control' },
  { name: 'Constant Spring Hangers', description: 'Reliable vertical support for piping systems with large thermal movement.', image: constantSpringHangers, tag: 'Vertical support' },
  { name: 'Constant Spring Supports', description: 'Custom solutions for critical piping where consistent support travel matters.', image: constantSpringSupports, tag: 'Critical piping' },
  { name: 'Pipe Clamps & U-Bolts', description: 'Durable high-performance clamping solutions for industrial piping applications.', image: pipeClampsUBolts, tag: 'Pipe restraint' },
  { name: 'Slides & Guides', description: 'Designed for smooth thermal movement while keeping piping correctly aligned.', image: slidesGuides, tag: 'Movement control' },
  { name: 'Custom Fabrication', description: 'Made-to-spec supports for complex layouts, unusual loads and brownfield projects.', image: customFabrication, tag: 'Project specific' },
  { name: 'Marine Pipe Supports', description: 'Reliable support systems engineered for demanding marine and offshore environments.', image: marinePipeSupports, tag: 'Marine grade' },
  { name: 'Oil & Gas Solutions', description: 'Built for critical industrial, power, refinery and infrastructure projects.', image: oilGasSolutions, tag: 'Heavy duty' },
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
        <div className="product-grid products-page-grid">
          {categories.map((category, index) => <article className={`product-card product-card--${(index % 4) + 1}`} key={category.name}>
            <div className="product-art"><img src={category.image} alt={category.name} /></div>
            <div className="product-card-content">
              <span className="products-page-card-tag">{category.tag}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <a href="#quote" className="product-explore-link"><span>Enquire About Product</span><span className="product-explore-arrow"><ArrowIcon /></span></a>
            </div>
          </article>)}
        </div>
      </div>
    </section>

    <section className="products-page-promise"><div className="container"><div><b>01</b><span>Premium<br />materials</span></div><div><b>02</b><span>International<br />standards</span></div><div><b>03</b><span>Customised<br />solutions</span></div><div><b>04</b><span>On-time<br />delivery</span></div><div><b>05</b><span>Technical<br />support</span></div></div></section>

    <section className="products-page-cta" style={{ '--products-cta-image': `url(${heroImage})` }}><div className="products-page-cta-overlay" /><div className="container products-page-cta-inner"><div><p className="products-page-kicker">Let&apos;s build together</p><h2>Need the Right <strong>Piping Solution?</strong></h2><p>Share your requirement with our team for product details, custom support design or bulk enquiries.</p></div><a className="products-page-cta-button" href="#quote">Request a Quote <span>→</span></a></div></section>
  </div>
}
