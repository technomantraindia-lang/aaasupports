const images = {
  banner: 'https://aaasupports.com/wp-content/uploads/2025/08/PS2.jpg',
  custom: 'https://aaasupports.com/wp-content/uploads/2025/08/PS3.jpg',
  engineering: 'https://aaasupports.com/wp-content/uploads/2025/08/PS1.jpg',
  supports: 'https://aaasupports.com/wp-content/uploads/2025/08/PS4.jpg',
  manufacturing: 'https://aaasupports.com/wp-content/uploads/2025/08/Untitled-1-35.jpg',
  process: 'https://aaasupports.com/wp-content/uploads/2025/08/Untitled-1-36.jpg',
  quality: 'https://aaasupports.com/wp-content/uploads/2025/08/Untitled-1-37.jpg',
  qualityDetail: 'https://aaasupports.com/wp-content/uploads/2025/08/Untitled-1-38.jpg',
  vshE: 'https://aaasupports.com/wp-content/uploads/2025/08/Untitled-1-39.jpg',
  vshF: 'https://aaasupports.com/wp-content/uploads/2025/08/Frame-52-1.png',
}

const benefits = [
  ['+', 'Fit for purpose', 'Designed around your exact pipe size, load, movement and operating conditions.'],
  ['◉', 'Reliable performance', 'Reduce stress on piping and connected equipment with the right support configuration.'],
  ['✓', 'Built to last', 'The right materials and finishes for temperature, corrosion and environmental challenges.'],
]

const engineeringPoints = [
  ['01', 'Load calculations', 'Stress checks and finite element analysis where needed.'],
  ['02', 'Code compliance', 'ASME, MSS, IBR, API and client standards.'],
  ['03', '2D / 3D models', 'Integration-ready models for seamless plant layouts.'],
]

const supportTypes = [
  'Pipe shoes, trunnions, saddles and guides.',
  'Variable and constant spring hangers.',
  'Snubbers, sway braces and shock arrestors.',
  'Sliding, roller and sliding plate supports.',
  'Insulated and cryogenic pipe supports.',
]

const manufacturingPoints = [
  'In-house fabrication using carbon steel, stainless steel and special alloys.',
  'CNC cutting, precision welding and controlled surface finishing.',
  'Galvanized, painted and epoxy-coated finishes as required.',
  'Dimensional and welding checks at every stage.',
]

const process = [
  ['01', 'Understand requirements', 'Pipe data, loads, temperatures and environmental factors.'],
  ['02', 'Concept & design', 'Engineering calculations, CAD drawings and support selection.'],
  ['03', 'Review & approval', 'Designs shared with your team for quick alignment.'],
  ['04', 'Fabrication & finishing', 'Supports manufactured with strict quality control.'],
  ['05', 'Delivery & documentation', 'Datasheets, test certificates and installation guidance.'],
]

const industries = [
  ['Power Plants', 'Conventional, renewable and critical power facilities', images.quality],
  ['Refineries & Petrochemical', 'Process and utility piping systems', images.banner],
  ['Chemicals & Fertilizers', 'High-temperature process applications', images.engineering],
  ['Water & Desalination', 'Reliable support for treatment plants', images.supports],
  ['Metals, Mining & Cement', 'Heavy-duty support for demanding operations', images.manufacturing],
]

function CheckIcon() {
  return <span className="service-check" aria-hidden="true">✓</span>
}

function ServiceKicker({ children }) {
  return <span className="service-kicker"><i />{children}</span>
}

function ServiceVisual({ image, label, alt = 'Custom pipe support designed and manufactured by AAA Supports', className = '' }) {
  return <div className={`service-visual ${className}`}>
    <img src={image} alt={alt} loading="lazy" />
    {label ? <span className="service-visual-label">{label}</span> : null}
  </div>
}

export function DesigningPipeSupportsPage() {
  return <div className="service-page">
    <section className="service-banner" style={{ '--service-banner-image': `url(${images.banner})` }}>
      <div className="service-banner-overlay" />
      <div className="service-banner-inner container">
        <div className="service-banner-copy">
          <div className="service-breadcrumb"><a href="#home">Home</a><span>/</span><a href="#services">Services</a><span>/</span><strong>Designing of Pipe Supports</strong></div>
          <h1>Designing of <strong>Pipe Supports</strong></h1>
          <h2>Custom Supports — Designed &amp; Manufactured by AAA Supports</h2>
          <p>Tailor-made support systems for extreme temperatures, heavy loads, seismic conditions and space-restricted layouts.</p>
          <div className="service-banner-points">
            {['Project-specific Design', 'Reliable Performance', 'Built to Last'].map((point) => <span key={point}><b>✓</b>{point}</span>)}
          </div>
        </div>
        <div className="service-banner-note">Built Around<br /><em>Your<br />Requirements</em></div>
      </div>
    </section>

    <div className="service-page-content">
      <section className="service-overview container">
        <div className="service-overview-copy">
          <ServiceKicker>Custom pipe supports</ServiceKicker>
          <h2>Support Systems <strong>Built for Your Plant</strong></h2>
          <p>Every plant has unique piping challenges—whether it is extreme temperature, heavy loads, seismic conditions or limited space. Standard off-the-shelf supports do not always provide the right fit.</p>
          <p>AAA Supports designs and manufactures custom pipe supports built specifically for your project, from the first calculation through final documentation.</p>
          <a className="service-button" href="#quote">Discuss Your Requirement <span>→</span></a>
        </div>
        <ServiceVisual image={images.custom} label="Custom Fit. Engineered Performance." alt="Custom blue pipe supports" className="service-overview-visual" />
      </section>

      <section className="service-benefits container" aria-label="Benefits of custom pipe supports">
        {benefits.map(([icon, title, text]) => <article className="service-benefit" key={title}><b>{icon}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </section>

      <section className="service-detail service-detail--blue">
        <div className="service-detail-inner container">
          <ServiceVisual image={images.engineering} label="Engineering That Fits the Real Layout" alt="Pipe support engineering and fabrication" />
          <div className="service-detail-copy">
            <ServiceKicker>01 / Design &amp; engineering</ServiceKicker>
            <h2>From Calculation to <strong>Confident Installation</strong></h2>
            <ul className="service-list">
              {engineeringPoints.map(([number, title, text]) => <li key={number}><span>{number}</span><p><b>{title}</b> — {text}</p></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-findings container">
        <div className="service-findings-copy">
          <ServiceKicker>02 / Types we deliver</ServiceKicker>
          <h2>One Partner for <strong>Every Support Condition</strong></h2>
          <ul className="service-check-list">{supportTypes.map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
        </div>
        <ServiceVisual image={images.supports} label="Built for Demanding Plant Environments" alt="Pipe support components" />
      </section>

      <section className="service-detail service-detail--light">
        <div className="service-detail-inner container service-detail-inner--reverse">
          <ServiceVisual image={images.manufacturing} label="Precision Fabrication. Consistent Quality." alt="Pipe supports being manufactured" />
          <div className="service-detail-copy">
            <ServiceKicker>03 / Manufacturing excellence</ServiceKicker>
            <h2>Made In-House with <strong>Control at Every Stage</strong></h2>
            <ul className="service-list service-list--orange">
              {manufacturingPoints.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-process container" id="design-process">
        <ServiceKicker>Our process</ServiceKicker>
        <h2>A Clear Path from Brief to <strong>Built Support</strong></h2>
        <div className="service-process-grid">
          {process.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}
        </div>
        <div className="design-service-gallery"><ServiceVisual image={images.process} label="VSH-A" alt="Pipe support process" /><ServiceVisual image={images.vshE} label="VSH-B" alt="Variable spring hanger" /><ServiceVisual image={images.vshF} label="VSH-C / VSH-D" alt="Pipe support products" /></div>
      </section>

      <section className="service-findings container design-quality-section">
        <div className="service-findings-copy">
          <ServiceKicker>Quality you can trust</ServiceKicker>
          <h2>Built to Perform. <strong>Checked to Prove It.</strong></h2>
          <ul className="service-check-list">{['Designs validated against international codes.', '100% dimensional and welding inspections.', 'Load testing for spring supports and snubbers.', 'ISO 9001 quality management in place.'].map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
        </div>
        <ServiceVisual image={images.quality} label="Every Detail Matters." alt="Quality inspection of pipe supports" />
      </section>

      <section className="service-industries container">
        <ServiceKicker>Industries we serve</ServiceKicker>
        <h2>Experience Across <strong>Critical Sectors</strong></h2>
        <div className="service-industry-grid">{industries.map(([title, text, image]) => <article key={title}><img src={image} alt="" loading="lazy" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="service-cta" style={{ '--service-cta-image': `url(${images.qualityDetail})` }}>
        <div className="service-cta-inner container"><div><ServiceKicker>Ready to engineer a better fit?</ServiceKicker><h2>Tell Us What Your Piping <strong>Needs Next</strong></h2><p>Share your pipe data, drawings or project brief with our engineering team.</p></div><a className="service-button" href="#quote">Get in Touch <span>→</span></a></div>
      </section>
    </div>
  </div>
}
