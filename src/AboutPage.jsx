import contactImage from '../assets/contact.png'
import aboutImage from '../assets/about-industrial-worker.png'
import standardsImage from '../assets/pipe-support-hero.png'
import { ValuedClientsSection } from './components/ValuedClientsSection.jsx'

const aboutStats = [
  ['people', '10+', 'Years of Excellence'],
  ['projects', '500+', 'Projects Completed'],
  ['clients', '100+', 'Happy Clients'],
  ['global', 'Global', 'Industrial Reach'],
]

const coreStandards = [
  ['medal', 'ISO 9001:2015', 'Accredited', 'Quality Management System', 'Committed quality management system embedded in every process.'],
  ['code', 'ANSI / ASME Codes', '', 'Pressure Piping Compliance', 'Strict adherence to pressure piping design and manufacturing standards.'],
  ['mss', 'MSS SP-58 Standards', '', 'Pipe Hangers & Supports', 'Certified standard for pipe hangers, supports, selection & design.'],
  ['shield', 'QA / QC Controlled', '', 'Total Quality Assurance', 'Active QA/QC manuals and inspection ensuring 100% specification compliance.'],
]

const qualityPromise = [
  ['gear', 'Quality Assurance', 'Quality Assurance & Quality Control Manuals are constantly in use and the organization operates quality management systems.'],
  ['testing', 'Testing & Inspection', 'In-house witness of TPI (if any) and outsource (duly approved by NABL) Laboratory Certified reports are used at a critical stage of testing.'],
  ['focus', 'Our Focus', 'Delivering reliable, safe and high-quality pipe support solutions for critical industries worldwide.'],
]

const whyChooseUs = [
  ['clock', '15+', 'Years of', 'Experience'],
  ['medal', 'Premium', 'Quality', 'Manufacturing'],
  ['wrench', 'Tough', 'Reliable &', 'Construction'],
  ['shield', 'Corrosion', 'Resistant', 'Materials'],
  ['thumb', '100%', 'Client', 'Satisfaction'],
  ['briefcase', 'Industry', 'Experts with', 'Deep Knowledge'],
]

const aboutValues = [
  ['globe', 'orange', 'Our Vision', 'To be a trusted global leader in engineered pipe support systems, recognised for quality, innovation and dependable industrial solutions.'],
  ['target', 'blue', 'Our Mission', 'To deliver high-quality, reliable and precisely engineered pipe hangers and support systems that protect performance and exceed customer expectations.'],
  ['lock', 'slate', 'Our Commitment', 'To maintain strong manufacturing standards, transparent service and long-term partnerships with every customer we serve.'],
]

function StatIcon({ type }) {
  const paths = {
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.3-3.2 2.2-5 6-5s5.7 1.8 6 5M15 15.2c3.6-.2 5.5 1.4 6 4.8" /></>,
    projects: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M8 5V3h8v2M8 11h8M8 15h5" /></>,
    clients: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.3-3.2 2.2-5 6-5s5.7 1.8 6 5M15 15.2c3.6-.2 5.5 1.4 6 4.8" /></>,
    global: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.1 2.4 3.2 5.4 3.2 9s-1.1 6.6-3.2 9c-2.1-2.4-3.2-5.4-3.2-9S9.9 5.4 12 3Z" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}

function StandardIcon({ type }) {
  const paths = {
    medal: <><circle cx="12" cy="9" r="5.5" /><path d="m9.5 13.5-1 7 3.5-2 3.5 2-1-7M9.5 9l1.7 1.2 1.6-1.2 1.7 1.2" /></>,
    code: <><rect x="6" y="4" width="12" height="16" rx="2" /><path d="M9 4V2h6v2M9 8h6M9 12h6M9 16h3" /></>,
    mss: <><path d="m5 8 4-3 3 3-4 3-3-3Zm7 0 3-3 4 3-3 3-4-3Zm-4 5 3-3 4 3-3 3-4-3Z" /><path d="m4 15 3 2-2 3-3-2 2-3Zm8-2 3 2-2 3-3-2 2-3Z" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.3 8.4-8 10-4.7-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}

function QualityIcon({ type }) {
  const paths = {
    gear: <><circle cx="12" cy="12" r="3.2" /><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2h-2.5v-.2a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H4.5v-2.5h.2a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.5v-.2h2.5v.2a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2V14h-.2a1.7 1.7 0 0 0-1.5 1Z" /></>,
    testing: <><path d="M9 3h6M10 3v5l-4.5 8.2A2 2 0 0 0 7.2 19h9.6a2 2 0 0 0 1.7-2.8L14 8V3" /><path d="M8 15h8" /></>,
    focus: <><circle cx="12" cy="12" r="7.5" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3m14 0h3M16 8l5-5" /><path d="m16 8 5-5" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}

function AboutValueIcon({ type }) {
  const paths = {
    clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3 2" /></>,
    medal: <><circle cx="12" cy="9" r="5" /><path d="m9.5 13-1 7 3.5-2 3.5 2-1-7" /></>,
    wrench: <><path d="m14 6 4-3 3 3-3 4" /><path d="m13 11-8 8a2.1 2.1 0 0 0 3 3l8-8" /><path d="m11 9 4 4" /></>,
    shield: <><path d="M12 3 20 6v5c0 5-3.3 8.4-8 10-4.7-1.6-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    thumb: <><path d="M7 10v10H4V10h3Zm0 10h9.5a2 2 0 0 0 1.9-1.4l2-6A2 2 0 0 0 18.5 10H15l.7-3.1A2.4 2.4 0 0 0 13.4 4L9 10" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18M10 12v2h4v-2" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.1 2.4 3.2 5.4 3.2 9s-1.1 6.6-3.2 9c-2.1-2.4-3.2-5.4-3.2-9S9.9 5.4 12 3Z" /></>,
    target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3m14 0h3" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
}

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="contact-banner about-banner" aria-label="About AAA Supports" style={{ '--contact-banner-image': `url(${contactImage})` }}>
        <div className="contact-banner-overlay" />
        <div className="contact-banner-inner container">
          <div className="contact-banner-copy">
            <div className="contact-breadcrumb"><a href="#home">Home</a><span>/</span><strong>About Us</strong></div>
            <h1>About <strong>Us</strong></h1>
            <p>Learn more about AAA Supports, our engineering approach and the people behind dependable pipe support solutions.</p>
            <span className="contact-banner-rule" />
            <div className="contact-banner-tagline">ENGINEERED FOR PERFORMANCE<br />BUILT ON TRUST</div>
          </div>
        </div>
      </section>

      <section className="about-story-section" aria-labelledby="about-story-title">
        <div className="container about-story-layout">
          <div className="about-story-visual">
            <div className="about-story-image-frame">
              <img src={aboutImage} alt="AAA Supports engineering and manufacturing facility" />
              <div className="about-story-image-overlay" />
            </div>
            <div className="about-iso-badge"><strong>ISO 9001:2015</strong><span>Certified Organization</span></div>
          </div>

          <div className="about-story-copy">
            <p className="about-story-kicker"><span />Welcome to <strong>AAA Supports Pvt. Ltd.</strong></p>
            <h2 id="about-story-title">Who <strong>We Are</strong></h2>
            <p className="about-story-description">AAA Supports Pvt. Ltd. is an ISO 9001:2015 accredited organization engaged in designing and manufacturing hanger and support systems. We comply with ANSI/ASME and MSS SP-58 standards.</p>
            <p className="about-story-description">Our quality management system is supported by active Quality Assurance and Quality Control Manuals.</p>
            <a className="about-story-button" href="#contact">Learn More <span aria-hidden="true">-&gt;</span></a>
          </div>

          <div className="about-story-stats" aria-label="AAA Supports achievements">
            {aboutStats.map(([icon, value, label]) => <div className="about-story-stat" key={label}><span className="about-story-stat-icon"><StatIcon type={icon} /></span><strong>{value}</strong><small>{label}</small></div>)}
          </div>
        </div>
      </section>

      <section className="about-values-section" aria-labelledby="about-values-title">
        <div className="about-values-heading">
          <span className="about-values-kicker">Why Choose Us</span>
          <h2 id="about-values-title">Dependable Engineering, <strong>Proven in the Field</strong></h2>
          <p>Built on quality manufacturing, durable materials and responsive client support.</p>
        </div>

        <div className="about-values-highlights">
          {whyChooseUs.map(([icon, value, lineOne, lineTwo]) => (
            <article className="about-values-highlight" key={`${value}-${lineOne}`}>
              <span className="about-values-highlight-icon"><AboutValueIcon type={icon} /></span>
              <strong>{value}</strong>
              <small>{lineOne}<br />{lineTwo}</small>
            </article>
          ))}
        </div>

        <div className="about-values-cards">
          {aboutValues.map(([icon, tone, title, description]) => (
            <article className={`about-values-card about-values-card--${tone}`} key={title}>
              <span className="about-values-card-icon"><AboutValueIcon type={icon} /></span>
              <h3>{title}</h3>
              <i />
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-standards-section" aria-labelledby="about-standards-title" style={{ '--standards-image': `url(${standardsImage})` }}>
        <div className="about-standards-overlay" />
        <div className="about-standards-inner">
          <div className="about-standards-heading">
            <span className="about-standards-rule" />
            <div>
              <span className="about-standards-eyebrow">QUALITY FRAMEWORK <i>01</i></span>
              <h2 id="about-standards-title"><span>Our</span> <strong>Core Standards</strong></h2>
              <p>Committed to global standards. Delivering unmatched quality.</p>
            </div>
          </div>

          <div className="about-standards-grid">
            {coreStandards.map(([icon, title, titleLine, subtitle, description], index) => (
              <article className={`about-standard-card ${index === 0 ? 'about-standard-card--featured' : ''}`} key={title}>
                <span className="about-standard-index">0{index + 1}</span>
                <div className="about-standard-top">
                  <span className="about-standard-icon"><StandardIcon type={icon} /></span>
                  <div>
                    <h3>{title}</h3>
                    {titleLine && <strong>{titleLine}</strong>}
                    <small>{subtitle}</small>
                  </div>
                </div>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-quality-section" aria-labelledby="about-quality-title">
        <div className="about-quality-visual" style={{ '--quality-image': `url(${standardsImage})` }}>
          <div className="about-quality-visual-overlay" />
          <div className="about-quality-copy">
            <p className="about-quality-kicker"><span />Our Quality Promise</p>
            <h2 id="about-quality-title">Committed to<br /><strong>Excellence</strong></h2>
            <p>We recognize the requirements for quality assurance in the area in which we operate and therefore we have committed ourselves to the establishment of an effective quality management system to ensure that all requirements are met according to the specification.</p>
          </div>
        </div>

        <div className="about-quality-list">
          {qualityPromise.map(([icon, title, description], index) => (
            <article className="about-quality-item" key={title}>
              <span className={`about-quality-icon about-quality-icon--${index === 1 ? 'blue' : 'orange'}`}><QualityIcon type={icon} /></span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>

      <ValuedClientsSection />

      <section className="about-partnership-cta" style={{ '--partnership-image': `url(${contactImage})` }} aria-labelledby="about-partnership-title">
        <div className="about-partnership-overlay" />
        <div className="about-partnership-copy">
          <p className="about-partnership-kicker"><span />Let&apos;s Work Together</p>
          <h2 id="about-partnership-title">Built on <strong>Trust. Proven by Results.</strong></h2>
          <p>Talk to our team about your next piping support requirement.</p>
        </div>
        <a className="about-partnership-button" href="#contact">Contact Our Team <span aria-hidden="true">-&gt;</span></a>
      </section>
    </div>
  )
}
