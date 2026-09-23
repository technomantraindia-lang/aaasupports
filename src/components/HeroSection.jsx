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
          <p className="section-kicker section-kicker--light"><span /> ISO 9001: 2015 Accredited Organization</p>
          <h1>
            <span className="hero-heading-desktop">Design &amp; Manufacturing of <strong>Hanger &amp; Support Systems</strong></span>
            <span className="hero-heading-mobile">
              Design &amp;<br />
              Manufacturing of<br />
              <strong>Hanger &amp;</strong><br />
              <strong>Support Systems</strong>
            </span>
          </h1>
          <p className="hero-description">Complying with ANSI/ASME codes for pressure piping and MSS SP-58 standards. Delivering precision-engineered pipe hangers and support systems for critical industrial, marine, oil &amp; gas and power infrastructure projects worldwide.</p>
          <div className="hero-buttons">
            <a className="button button--orange" href="#products">Explore Our Products <span>→</span></a>
          </div>
          <div className="hero-highlights">
            {highlights.map(([icon, title, detail]) => <div className="hero-highlight" key={title}><Icon>{icon}</Icon><span>{title}<small>{detail}</small></span></div>)}
          </div>
        </div>
      </div>
    </section>
  )
}
