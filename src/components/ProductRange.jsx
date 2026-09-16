import { products } from '../data/homeData.js'
import { SectionHeading } from './SectionHeading.jsx'

export function ProductRange() {
  return (
    <section className="products-section" id="products">
      <div className="container"><SectionHeading eyebrow="Product Range" title="" action={{ label: 'View All Products', href: '#products' }} />
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className="product-art"><span>{product.icon}</span></div><h3>{product.name}</h3><p>{product.description}</p><a href="#quote">View Products <span>→</span></a></article>)}</div>
      </div>
    </section>
  )
}
