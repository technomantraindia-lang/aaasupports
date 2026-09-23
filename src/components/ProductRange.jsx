import variableSpringSupports from '../../assets/product-variable-spring-supports.png'
import constantSpringSupports from '../../assets/product-constant-spring-supports.png'
import pipeClampsUBolts from '../../assets/product-pipe-clamps-u-bolts.png'

const productImages = [
  variableSpringSupports,
  constantSpringSupports,
  pipeClampsUBolts,
]

const catalogueProducts = [
  { name: 'Primary Supports', description: 'Engineered primary support systems for reliable load management.' },
  { name: 'Secondary Supports', description: 'Dependable secondary supports for stable and controlled piping.' },
  { name: 'Pipe Fittings, Flanges & Piping Spools', description: 'Precision-fabricated components for complete piping systems.' },
]

export function ProductRange() {
  return (
    <section className="products-section products-section--catalogue" id="products">
      <div className="container">
        <div className="product-section-heading">
          <p className="section-kicker"><span />What We Offer</p>
          <h2>Our <strong>Product Range</strong></h2>
          <span className="product-heading-mark" aria-hidden="true"><i /><b /><i /></span>
        </div>

        <div className="product-grid">
          {catalogueProducts.map((product, index) => (
            <article className={`product-card product-card--${(index % 4) + 1}`} key={product.name}>
              <div className="product-art" aria-hidden="true">
                <img src={productImages[index]} alt="" />
              </div>
              <div className="product-card-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <a href="/products" className="product-explore-link">
                  <span>Explore Products</span>
                  <span className="product-explore-arrow" aria-hidden="true">
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="product-section-footer">
          <a className="product-view-all-btn" href="/products">
            <span>View All Products</span>
            <span className="product-btn-arrow" aria-hidden="true">
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
