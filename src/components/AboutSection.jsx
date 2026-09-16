import { images } from '../data/homeData.js'
import { Icon } from './Icon.jsx'
import { SectionHeading } from './SectionHeading.jsx'

const proofs = [['⚙', 'Engineering', 'Expertise'], ['♢', 'Uncompromising', 'Quality'], ['♙', 'Customer', 'Focused'], ['◎', 'Global', 'Presence']]

export function AboutSection() {
  return (
    <section className="about-section" id="about-us">
      <div className="container about-grid">
        <div className="about-copy">
          <SectionHeading eyebrow="About Us" title="Your Trusted Partner in" accent="Pipe Support Solutions" />
          <p>At PipeAnchorSupply, we specialize in the design, manufacturing, and supply of high-quality pipe supports, hangers and custom fabrication solutions for marine, industrial, oil &amp; gas, power and infrastructure projects worldwide. With a strong focus on engineering excellence, reliable quality and on-time delivery, we help our clients build safer, stronger and more sustainable facilities.</p>
          <div className="proof-list">{proofs.map(([icon, title, detail]) => <div className="proof" key={title}><Icon>{icon}</Icon><b>{title}<small>{detail}</small></b></div>)}</div>
          <a className="button button--orange" href="#quote">Learn More About Us <span>→</span></a>
        </div>
        <div className="about-visual">
          <img src={images.aboutImage} alt="Industrial pipe support facility" />
          <div className="trust-badge"><strong>Built on<br /><span>Trust, Driven by</span><br />Engineering</strong></div>
          <div className="play-button" aria-label="Watch our company video">▶</div>
          <div className="about-metrics"><div><b>12+</b><span>Years of<br />Experience</span></div><div><b>500+</b><span>Projects<br />Completed</span></div><div><b>40+</b><span>Countries<br />Served</span></div><div><b>100%</b><span>Client<br />Satisfaction</span></div></div>
        </div>
      </div>
    </section>
  )
}
