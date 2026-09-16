import { SectionHeading } from './SectionHeading.jsx'
import { images } from '../data/homeData.js'

const reasons = ['Proven track record across global industries', 'Customized solutions for complex requirements', 'Strict quality control and testing', 'Dedicated engineering support', 'Competitive pricing with reliable delivery']

export function WhyChooseUs() {
  return (
    <section className="why-section" id="services">
      <div className="why-background" style={{ backgroundImage: `url(${images.heroImage})` }} />
      <div className="container why-grid"><div><SectionHeading eyebrow="Why Choose Us" title="Engineering Excellence" accent="in Every Support" light /><p className="why-description">We combine technical expertise, advanced manufacturing and a customer-centric approach to deliver reliable and cost-effective pipe support solutions.</p><div className="why-pills"><span>♢<small>High-Quality<br />Materials</small></span><span>▦<small>Custom<br />Fabrication</small></span><span>◎<small>Global<br />Compliance</small></span><span>✦<small>On-Time<br />Delivery</small></span></div></div><div className="reasons-card"><ul>{reasons.map((reason) => <li key={reason}>{reason}</li>)}</ul><a className="button button--orange" href="#quote">Get in Touch <span>→</span></a></div></div>
    </section>
  )
}
