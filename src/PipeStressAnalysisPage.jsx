import powerImage from '../assets/industry-power.png'
import oilGasImage from '../assets/industry-oil-gas.png'
import chemicalImage from '../assets/industry-industrial.png'
import waterImage from '../assets/industry-infrastructure.png'
import marineImage from '../assets/industry-marine.png'
import psa1Image from '../assets/pipe stress analysis services/PSA_1.jpg'
import psa2Image from '../assets/pipe stress analysis services/PSA_2.jpg'
import psa3Image from '../assets/pipe stress analysis services/PSA_3.jpg'
import psa4Image from '../assets/pipe stress analysis services/PSA_4.jpg'
import psa5Image from '../assets/pipe stress analysis services/PSA_5.jpg'
import psa6Image from '../assets/pipe stress analysis services/PSA_6.jpg'
import serviceImage from '../assets/pipe stress analysis services/Service.jpg'
import { useRef } from 'react'
import { useServiceReveal } from './hooks/useServiceReveal.js'

const images = {
  banner: serviceImage,
  overview: psa1Image,
  analysis: psa2Image,
  support: psa5Image,
  deliverables: psa3Image,
  detail: psa6Image,
  cta: psa4Image,
}

const riskPoints = [
  ['!', 'Protect equipment', 'Prevent excessive loads on pumps, turbines, vessels and connected nozzles.'],
  ['+', 'Prevent failures', 'Reduce the risk of cracks, leaks, fatigue damage and costly downtime.'],
  ['✓', 'Meet the codes', 'Practical, constructible designs aligned with ASME, IBR, EN, API and IS.'],
]

const services = [
  'Comprehensive static and dynamic analysis using CAESAR II, with engineering checks for safe and reliable operation.',
  'Nozzle load evaluation for pumps, compressors, exchangers and tanks.',
  'Pipe support design for variable and constant spring hangers, snubbers, guides and restraints.',
  'Seismic and wind checks, including response spectrum and time history analysis.',
  'Vibration and fatigue studies for FIV, AIV and water hammer concerns.',
  'Failure investigations to identify root causes and recommend corrective measures.',
]

const process = [
  ['01', 'Input collection', 'P&IDs, equipment data, layouts and project codes.'],
  ['02', 'Modeling', 'Build 3D piping models with stress loads and supports.'],
  ['03', 'Analysis & optimization', 'Run load cases and refine supports for reliability.'],
  ['04', 'Review & coordination', 'Align with process, equipment, civil and piping teams.'],
  ['05', 'Deliverables', 'Clear reports, drawings, spring datasheets and installation notes.'],
]

const deliverables = [
  'Piping stress analysis reports with a clear compliance summary.',
  'Equipment nozzle load reports for pumps, compressors, heat exchangers and tanks.',
  'Variable and constant spring hanger support datasheets.',
  'Hot and cold load settings for spring supports.',
  'Static and dynamic load case analysis of piping systems in compliance with ASME.',
  'Stress isometric drawings and stress mark-ups of the piping system.',
  'Support load summary for engineering coordination and installation.',
]

const industries = [
  ['Oil & Gas', 'Process, utility and export piping systems', oilGasImage],
  ['Power', 'Thermal, renewable and critical power facilities', powerImage],
  ['Chemicals', 'Complex and high-temperature process lines', chemicalImage],
  ['Water', 'Treatment, desalination and utility systems', waterImage],
  ['Metals & Pharmaceuticals', 'Precision and heavy-duty plant applications', marineImage],
]

function CheckIcon() {
  return <span className="service-check" aria-hidden="true">✓</span>
}

function ServiceKicker({ children }) {
  return <span className="service-kicker"><i />{children}</span>
}

function ServiceVisual({ image, label, alt = 'Pipe stress analysis engineering by AAA Supports', className = '' }) {
  return <div className={`service-visual ${className}`}>
    <img src={image} alt={alt} loading="lazy" />
    {label ? <span className="service-visual-label">{label}</span> : null}
  </div>
}

export function PipeStressAnalysisPage() {
  const serviceRef = useRef(null)
  useServiceReveal(serviceRef)

  return <div className="service-page" ref={serviceRef}>
    <section className="service-banner" style={{ '--service-banner-image': `url(${images.banner})` }}>
      <div className="service-banner-overlay" />
      <div className="service-banner-inner container">
        <div className="service-banner-copy">
          <div className="service-breadcrumb"><a href="#home">Home</a><span>/</span><a href="#services">Services</a><span>/</span><strong>Pipe Stress Analysis</strong></div>
          <h1>Pipe <strong>Stress Analysis</strong></h1>
          <h2>Safer, Smarter and More Reliable Piping Systems</h2>
          <p>Professional pipe stress analysis for process and utility piping across Oil &amp; Gas, Power, Chemicals, Water, Metals and Pharmaceuticals.</p>
          <div className="service-banner-points">
            {['Code Compliant', 'Practical Designs', 'Reliable Operations'].map((point) => <span key={point}><b>✓</b>{point}</span>)}
          </div>
        </div>
        <div className="service-banner-note">Stress Less<br /><em>Operate<br />Better</em></div>
      </div>
    </section>

    <div className="service-page-content">
      <section className="service-overview container">
        <div className="service-overview-copy">
          <ServiceKicker>Pipe stress analysis services</ServiceKicker>
          <h2>Design Piping That <strong>Performs Safely</strong></h2>
          <p>At <strong>AAA Supports Pvt. Ltd.</strong>, we specialize in professional pipe stress analysis for process and utility piping across Oil &amp; Gas, Power, Chemicals, Water, Metals and Pharmaceuticals.</p>
          <p>Our goal is simple: to make your piping systems perform safely and efficiently—without costly failures or downtime. We evaluate thermal expansion, pressure, vibration, seismic loads and wind forces, then turn the results into practical and constructible site-ready decisions.</p>
          <a className="service-button" href="#quote">Discuss Your Piping System <span>→</span></a>
        </div>
        <ServiceVisual image={images.overview} label="Engineering Confidence Before Construction" alt="Pipe stress analysis and piping engineering" className="service-overview-visual" />
      </section>

      <section className="service-section-intro container">
        <ServiceKicker>Why pipe stress analysis matters</ServiceKicker>
        <h2>Protect Your Piping <strong>Before Problems Start</strong></h2>
        <p>Thermal expansion, pressure, vibration, seismic loads and wind forces can create excessive equipment loads, cracks, leaks, fatigue failures and costly downtime when they are not assessed early.</p>
      </section>

      <section className="service-benefits container" aria-label="Why pipe stress analysis matters">
        {riskPoints.map(([icon, title, text]) => <article className="service-benefit" key={title}><b>{icon}</b><div><h3>{title}</h3><p>{text}</p></div></article>)}
      </section>

      <section className="service-detail service-detail--blue">
        <div className="service-detail-inner container">
          <ServiceVisual image={images.analysis} label="Model. Analyze. Optimize." alt="Pipe stress analysis model" />
          <div className="service-detail-copy">
            <ServiceKicker>What we offer</ServiceKicker>
            <h2>Complete Stress Analysis for <strong>Critical Piping</strong></h2>
            <ul className="service-list">
              {services.slice(0, 3).map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="service-findings container">
        <div className="service-findings-copy">
          <ServiceKicker>Advanced engineering checks</ServiceKicker>
          <h2>Covering the Loads <strong>That Matter Most</strong></h2>
          <ul className="service-check-list">{services.slice(3).map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
        </div>
        <ServiceVisual image={images.support} label="Supports Designed from the Analysis" alt="Pipe support designed for stress analysis" />
      </section>

      <section className="service-detail service-detail--light">
        <div className="service-detail-inner container service-detail-inner--reverse">
          <ServiceVisual image={images.deliverables} label="Clear Reports. Actionable Results." alt="Pipe stress analysis deliverables" />
          <div className="service-detail-copy">
            <ServiceKicker>Deliverables you receive</ServiceKicker>
            <h2>From Analysis to <strong>Installation-Ready Data</strong></h2>
            <ul className="service-list service-list--orange">{deliverables.map((item, index) => <li key={item}><span>0{index + 1}</span><p>{item}</p></li>)}</ul>
          </div>
        </div>
      </section>

      <section className="service-process container" id="stress-process">
        <ServiceKicker>Our process</ServiceKicker>
        <h2>A Clear Path from Input to <strong>Reliable Design</strong></h2>
        <div className="service-process-grid">{process.map(([number, title, text]) => <article key={number}><b>{number}</b><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="design-service-gallery"><ServiceVisual image={images.analysis} label="Modeling" alt="Pipe stress analysis modeling" /><ServiceVisual image={images.support} label="Support optimization" alt="Pipe support optimization" /><ServiceVisual image={images.detail} label="Engineering review" alt="Pipe stress analysis engineering detail" /></div>
      </section>

      <section className="service-findings container design-quality-section">
        <div className="service-findings-copy">
          <ServiceKicker>Why choose AAA Supports?</ServiceKicker>
          <h2>Analysis That Works <strong>in the Real Plant</strong></h2>
          <ul className="service-check-list">{['Experience across Oil & Gas, Power, Chemicals, Water, Pharma and more.', 'In-house engineers with strong technical backgrounds and practical plant experience.', 'Practical solutions that are code-compliant, constructible and ready for site coordination.', 'End-to-end support from design to installation, troubleshooting and corrective action.'].map((item) => <li key={item}><CheckIcon />{item}</li>)}</ul>
        </div>
        <ServiceVisual image={images.detail} label="Practical. Constructible. Reliable." alt="AAA Supports pipe stress analysis team" />
      </section>

      <section className="service-industries container">
        <ServiceKicker>Industries we support</ServiceKicker>
        <h2>Stress Expertise Across <strong>Critical Sectors</strong></h2>
        <div className="service-industry-grid">{industries.map(([title, text, image]) => <article key={title}><img src={image} alt="" loading="lazy" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="service-cta" style={{ '--service-cta-image': `url(${images.cta})` }}>
        <div className="service-cta-inner container"><div><ServiceKicker>Make your piping safer</ServiceKicker><h2>Let&apos;s Make Your System <strong>Perform Better</strong></h2><p>Share your piping data, drawings or project brief with our stress analysis team.</p></div><a className="service-button" href="#quote">Talk to Our Team <span>→</span></a></div>
      </section>
    </div>
  </div>
}
