import bannerImage from '../assets/contact.png'
import inspectionImage from '../assets/gallery/generated-refinery-support.png'
import workerImage from '../assets/about-industrial-worker.png'
import pipeClampImage from '../assets/gallery/generated-pipe-clamp.png'
import refineryImage from '../assets/gallery/generated-overhead-piping.png'
import powerImage from '../assets/industry-power.png'
import chemicalImage from '../assets/industry-oil-gas.png'
import waterImage from '../assets/industry-infrastructure.png'
import marineImage from '../assets/industry-marine.png'
import { useRef } from 'react'
import { useServiceReveal } from './hooks/useServiceReveal.js'

const inspectionPoints = [
  ['01', 'Visual checks', 'Spotting corrosion, cracks, missing bolts or stuck springs.'],
  ['02', 'Travel & load verification', 'Making sure every spring is carrying the right load and moving freely.'],
  ['03', 'Hot & cold setting checks', 'Comparing actual field settings with design values.'],
  ['04', 'Functional testing', 'Ensuring snubbers, rigid struts and restraints work properly.'],
  ['05', 'Clear reporting', 'A practical summary of what is fine and what needs action.'],
]

const findings = [
  'Springs locked in the wrong position after maintenance.',
  'Supports jammed due to rust or dirt.',
  'Incorrect load distribution causing stress on equipment nozzles.',
  'Snubbers not activating when they should.',
  'Travel indicators that no longer show the right readings.',
]

const process = [
  ['01', 'Review design data', 'Spring charts, settings and drawings.'],
  ['02', 'On-site inspection', 'Check each support visually and physically.'],
  ['03', 'Adjustments', 'Corrective actions wherever possible.'],
  ['04', 'Analysis', 'Compare field readings with design intent.'],
  ['05', 'Final report', 'Clear recommendations and next steps.'],
]

const industries = [
  ['Power Plants', 'Thermal, nuclear and combined-cycle facilities', powerImage],
  ['Refineries & Petrochemical', 'Critical process and utility systems', refineryImage],
  ['Fertilizers & Chemicals', 'High-temperature process applications', chemicalImage],
  ['Water & Desalination', 'Reliable support for treatment plants', waterImage],
  ['Pharma & Food Processing', 'Hygienic and precision plant environments', marineImage],
]

function CheckIcon() {
  return <span className="service-check" aria-hidden="true">✓</span>
}

function ServiceKicker({ children }) {
  return <span className="service-kicker"><i />{children}</span>
}

function ServiceVisual({ image, label, className = '' }) {
  return <div className={`service-visual ${className}`}>
    <img src={image} alt="Industrial pipe support inspection" />
    {label ? <span className="service-visual-label">{label}</span> : null}
  </div>
}

export function SiteSupervisionPage() {
  const serviceRef = useRef(null)
  useServiceReveal(serviceRef)

  return <div className="service-page" ref={serviceRef}>
    <section className="service-banner" style={{ '--service-banner-image': `url(${bannerImage})` }}>
      <div className="service-banner-overlay" />
      <div className="service-banner-inner container">
        <div className="service-banner-copy">
          <div className="service-breadcrumb"><a href="#home">Home</a><span>/</span><a href="#services">Services</a><span>/</span><strong>Spring Hanger Health Inspection</strong></div>
          <h1>Spring Hanger <strong>Health Inspection</strong></h1>
          <h2>For Safer, More Reliable Piping Systems</h2>
          <p>Keeping your piping systems safe, reliable and stress-free with practical field inspection and engineering guidance.</p>
          <div className="service-banner-points">
            {['Safe Operations', 'Reliable Performance', 'Extended Equipment Life'].map((point) => <span key={point}><b>✓</b>{point}</span>)}
          </div>
        </div>
        <div className="service-banner-note">Inspection Today<br /><em>For a Safer<br />Tomorrow</em></div>
      </div>
    </section>

    <div className="service-page-content">
      <section className="service-overview container">
        <div className="service-overview-copy">
          <ServiceKicker>Overview</ServiceKicker>
          <h2>Keeping Critical Systems <strong>Running Safely</strong></h2>
          <p>Spring hangers and pipe supports are critical for the smooth operation of any plant. Over time, they can shift, corrode, seize up, or simply go out of calibration.</p>
          <p>That is why AAA Supports Pvt. Ltd. offers on-site health inspection services for installed spring hangers and pipe supports. Our team identifies problems early, restores proper settings and keeps your plant running safely and efficiently.</p>
          <a className="service-button" href="#service-quote">Enquire About Site Supervision <span>→</span></a>
        </div>
        <ServiceVisual image={inspectionImage} label="Small Checks. Big Safety. Always." className="service-overview-visual" />
      </section>

      <section className="service-section-intro container">
        <ServiceKicker>Why regular inspections matter</ServiceKicker>
        <h2>Small Checks. <strong>Big Safety.</strong></h2>
        <p>Regular inspection helps prevent overloaded piping, equipment damage and unexpected shutdowns while keeping support settings aligned with design intent and applicable ASME, API and IBR guidelines.</p>
      </section>

      <section className="service-benefits service-benefits--four container" aria-label="Inspection benefits">
        {[
          ['✦', 'Safety First', 'Faulty supports can overload piping and nozzles, leading to serious risks.'],
          ['◌', 'Extend Equipment Life', 'Healthy supports reduce vibration and stress on pipes, turbines and vessels.'],
          ['✓', 'Stay Compliant', 'Our checks follow ASME, API and applicable project guidelines.'],
        ].map(([icon, title, text]) => <article className="service-benefit" key={title}><b>{icon}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}
        <article className="service-benefit"><b>→</b><div><h3>Save Costs</h3><p>Preventing failures is far cheaper than unplanned shutdowns and emergency maintenance.</p></div></article>
      </section>

      <section className="service-detail service-detail--blue">
        <div className="service-detail-inner container">
          <ServiceVisual image={workerImage} label="Expert Inspection for Reliable Performance" />
          <div className="service-detail-copy">
            <ServiceKicker>What our inspection covers</ServiceKicker>
            <h2>Detailed Inspection. <strong>Better Reliability.</strong></h2>
            <ul className="service-list">
              {inspectionPoints.map(([number, title, text]) => <li key={number}><span>{number}</span><p><b>{title}</b> — {text}</p></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-findings container">
        <div className="service-findings-copy">
          <ServiceKicker>What we typically find</ServiceKicker>
          <h2>Common Issues <strong>We Identify</strong></h2>
          <ul className="service-check-list">{findings.map((finding) => <li key={finding}><CheckIcon />{finding}</li>)}</ul>
        </div>
        <ServiceVisual image={pipeClampImage} label="Accurate Inspection. Actionable Results." />
      </section>

      <section className="service-detail service-detail--light">
        <div className="service-detail-inner container service-detail-inner--reverse">
          <ServiceVisual image={refineryImage} label="Clear Reports. Confident Decisions." />
          <div className="service-detail-copy">
            <ServiceKicker>What you get from us</ServiceKicker>
            <h2>Clear Reports. <strong>Confident Decisions.</strong></h2>
            <ul className="service-list service-list--orange">
              {['Detailed inspection report with photos and measurements.', 'Tagged list of supports — OK, Needs Adjustment, or Replacement.', 'Action plan so you know exactly what to fix first.', 'Updated datasheets with verified load and travel values.'].map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-process container">
        <ServiceKicker>How we work</ServiceKicker>
        <h2>A Simple, Proven <strong>Process</strong></h2>
        <div className="service-process-grid">
          {process.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="service-findings container design-partner-section">
        <div className="service-findings-copy">
          <ServiceKicker>Why work with AAA Supports?</ServiceKicker>
          <h2>Inspection Backed by <strong>Engineering Expertise</strong></h2>
          <ul className="service-check-list">{['Specialist engineers for spring hanger design, inspection and troubleshooting.', 'Equipment knowledge from designing and supplying spring hangers and pipe supports.', 'Many inspections can be completed while your plant is still running.', 'Support beyond inspection: adjustment, recalibration and replacement guidance.'].map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
        </div>
        <ServiceVisual image={workerImage} label="Inspect. Recalibrate. Restore Confidence." />
      </section>

      <section className="service-industries container">
        <ServiceKicker>Industries we support</ServiceKicker>
        <h2>Trusted Across <strong>Key Industries</strong></h2>
        <div className="service-industry-grid">
          {industries.map(([title, text, image]) => <article key={title}><img src={image} alt="" /><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="service-cta" id="service-quote" style={{ '--service-cta-image': `url(${bannerImage})` }}>
        <div className="service-cta-inner container"><div><ServiceKicker>Ready to schedule an inspection?</ServiceKicker><h2>Make your supports <strong>work safer.</strong></h2><p>Talk to our engineering team about your next site inspection.</p></div><a className="service-button" href="#quote">Get in Touch <span>→</span></a></div>
      </section>
    </div>
  </div>
}
