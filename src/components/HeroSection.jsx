import { images } from '../data/homeData.js'
import { Icon } from './Icon.jsx'

const highlights = [
  ['✦', 'Reliable', 'Quality'],
  ['▣', 'On-Time', 'Delivery'],
  ['◎', 'Global', 'Standards'],
  ['⚙', 'Custom', 'Solutions'],
]

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${images.heroImage})` }} />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="section-kicker section-kicker--light"><span /> Engineered Support Solutions</p>
          <h1>Pipe Supports &amp; Hangers <strong>for Project Procurement</strong></h1>
          <p className="hero-description">Trusted manufacturer of high-quality pipe supports, hangers and custom fabrication solutions for marine, industrial, oil &amp; gas, power and infrastructure projects worldwide.</p>
          <div className="hero-buttons">
            <a className="button button--orange" href="#products">Explore Our Products <span>→</span></a>
            <a className="button button--outline-light" href="#quote">Request a Quote <span>→</span></a>
          </div>
          <div className="hero-highlights">
            {highlights.map(([icon, title, detail]) => <div className="hero-highlight" key={title}><Icon>{icon}</Icon><span>{title}<small>{detail}</small></span></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
