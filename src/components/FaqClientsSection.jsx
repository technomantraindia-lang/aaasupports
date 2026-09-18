import { useState } from 'react'
import faqEngineerImage from '../../assets/faq-engineer-bg.png'
import ctaPipeImage from '../../assets/pipe-support-hero.png'

const faqs = [
  {
    question: 'What types of pipe support products do you offer?',
    answer:
      'We offer a wide range of pipe support products including pipe clamps, hangers, shoes, guides, anchors, spring supports, and custom fabricated solutions for various industrial applications.',
  },
  {
    question: 'Can you provide custom pipe support solutions?',
    answer:
      'Yes. Our engineering team designs custom pipe support systems based on site load, temperature, vibration, movement and project-specific standards.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We serve marine, oil and gas, power, infrastructure, chemical, petrochemical and heavy industrial manufacturing sectors.',
  },
  {
    question: 'Do you offer international shipping?',
    answer:
      'Yes. We support domestic and international dispatch with secure packaging, documentation and coordination for project schedules.',
  },
  {
    question: 'What materials and standards do you follow?',
    answer:
      'We work with carbon steel, stainless steel and alloy materials, and manufacture as per relevant project drawings, client specifications and quality standards.',
  },
  {
    question: 'How can I request a quote?',
    answer:
      'Share your product requirement, drawing, load details or project specification through the contact form and our team will respond with guidance.',
  },
]

const supportItems = [
  ['gear', 'Product', 'Support'],
  ['headset', 'Technical', 'Guidance'],
  ['box', 'Orders &', 'Delivery'],
  ['globe', 'Global', 'Services'],
]

const clientStats = [
  ['users', '500+', 'Happy Clients'],
  ['globe', '40+', 'Countries Served'],
  ['shield', '98%', 'Client Satisfaction'],
]

const clientLogoModules = import.meta.glob('../../assets/client/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  import: 'default',
})

const clientFolders = new Set([
  'Refinery  Oil & Gas  Petrochemical Sector',
  'Power Sector',
  'Chemical, Fertilizer And Sugar Sector',
  'Steel Sector',
  'OEM  EPC',
])

const clientLogos = Object.entries(clientLogoModules)
  .filter(([path]) => clientFolders.has(path.split('/').slice(-2, -1)[0]))
  .sort(([first], [second]) => first.localeCompare(second))
  .map(([path, src]) => ({
    name: path
      .split('/')
      .pop()
      .replace(/\.[^.]+$/, '')
      .replace(/[-_]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim(),
    src,
  }))

const firstLogoRow = clientLogos.filter((_, index) => index % 2 === 0)
const secondLogoRow = clientLogos.filter((_, index) => index % 2 === 1)

function MiniIcon({ type }) {
  const paths = {
    gear: <><circle cx="24" cy="24" r="6" /><path d="M24 6v5M24 37v5M6 24h5M37 24h5M11 11l4 4M33 33l4 4M37 11l-4 4M15 33l-4 4" /></>,
    headset: <><path d="M11 27v-5a13 13 0 0 1 26 0v5" /><path d="M11 27h5v9h-5a4 4 0 0 1-4-4v-1a4 4 0 0 1 4-4ZM37 27h-5v9h5a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4ZM32 37c-2 4-6 5-10 4" /></>,
    box: <><path d="m8 15 16-8 16 8-16 8Z" /><path d="M8 15v18l16 8 16-8V15M24 23v18M15 11l16 8" /></>,
    globe: <><circle cx="24" cy="24" r="17" /><path d="M7 24h34M24 7c5 5 7 11 7 17s-2 12-7 17c-5-5-7-11-7-17s2-12 7-17Z" /></>,
    chat: <><path d="M9 11h30v20H20l-9 7v-7H9Z" /><path d="M17 21h14M17 26h9" /></>,
    users: <><circle cx="18" cy="18" r="6" /><circle cx="32" cy="19" r="5" /><path d="M6 41c1-9 6-14 13-14s12 5 13 14M31 29c6 0 10 4 11 12" /></>,
    shield: <><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" /><path d="m17 24 5 5 10-11" /></>,
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      {paths[type]}
    </svg>
  )
}

export function FaqClientsSection() {
  const [activeFaq, setActiveFaq] = useState(0)

  return (
    <section className="faq-clients-section" aria-labelledby="faq-heading">
      <div className="faq-panel">
        <div className="faq-copy">
          <p className="faq-kicker"><span />Frequently Asked Questions</p>
          <h2 id="faq-heading">Got Questions?<br /><strong>We&apos;ve Got Answers</strong></h2>
          <p className="faq-intro">
            Find quick answers to common questions about our pipe support solutions, products, services, and global support.
          </p>

          <div className="faq-support-grid" aria-label="Support categories">
            {supportItems.map(([icon, first, second]) => (
              <div className="faq-support-item" key={`${first}-${second}`}>
                <span><MiniIcon type={icon} /></span>
                <strong>{first}<br />{second}</strong>
              </div>
            ))}
          </div>

        </div>

        <div className="faq-accordion" aria-label="Frequently asked questions">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index
            return (
              <article className={`faq-item ${isOpen ? 'is-open' : ''}`} key={faq.question}>
                <button
                  aria-expanded={isOpen}
                  className="faq-question"
                  onClick={() => setActiveFaq(isOpen ? -1 : index)}
                  type="button"
                >
                  <span>{index + 1}. {faq.question}</span>
                  <i aria-hidden="true">{isOpen ? '\u2212' : '+'}</i>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            )
          })}
        </div>

        <div className="faq-image-panel" style={{ '--faq-image': `url(${faqEngineerImage})` }} aria-hidden="true">
          <p>Engineering<br />for a Better<br />Tomorrow</p>
          <i />
        </div>
      </div>

      <div className="clients-panel" style={{ '--clients-bg': `url(${faqEngineerImage})` }}>
        <div className="clients-shell">
          <p className="clients-kicker"><span />Our Valued Clients</p>
          <div className="clients-header">
            <div>
              <h2>Trusted by <strong>Industry Leaders</strong></h2>
              <p>We are proud to partner with leading companies across the globe, delivering reliable pipe support solutions that power critical projects and infrastructure.</p>
              <a className="home-clients-view-all" href="/clients">View All Clients <span>→</span></a>
            </div>
            <div className="clients-stats">
              {clientStats.map(([icon, value, label]) => (
                <div className="client-stat" key={label}>
                  <span><MiniIcon type={icon} /></span>
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="clients-logo-marquee" aria-label="Valued client logos">
            <div className="clients-logo-row clients-logo-row--left">
              <div className="clients-logo-track">
                {[...firstLogoRow, ...firstLogoRow].map((logo, index) => (
                  <div className="client-logo-card" key={`${logo.name}-top-${index}`}>
                    <img src={logo.src} alt={index >= firstLogoRow.length ? '' : logo.name} />
                  </div>
                ))}
              </div>
            </div>

            <div className="clients-logo-row clients-logo-row--right">
              <div className="clients-logo-track">
                {[...secondLogoRow, ...secondLogoRow].map((logo, index) => (
                  <div className="client-logo-card" key={`${logo.name}-bottom-${index}`}>
                    <img src={logo.src} alt={index >= secondLogoRow.length ? '' : logo.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="clients-footer-note">Same Partnership <span /> A Stronger Tomorrow</p>
        </div>
      </div>

      {/* Premium Stand-alone CTA Section */}
      <section className="client-cta-panel" aria-labelledby="client-cta-heading">
        <div className="container">
          <div className="client-cta-card">
            <div className="client-cta-glow-mesh" aria-hidden="true" />
            <div className="client-cta-decor-line" aria-hidden="true" />
            
            <div className="client-cta-copy">
              <div className="client-cta-badge">
                <span className="client-cta-pulse" aria-hidden="true" />
                <span>Let&apos;s Build Together</span>
              </div>
              <h2 id="client-cta-heading">
                Ready to Partner with <span className="client-cta-brand">AAA Supports Pvt. Ltd.?</span>
              </h2>
              <p className="client-cta-desc">
                Connect directly with our engineering and manufacturing specialists for custom pipe support solutions, technical load calculations, and fast project quotes.
              </p>

              {/* 3 Quick Assurance Badges */}
              <div className="client-cta-assurances">
                <div className="cta-assurance-pill">
                  <span className="cta-check-icon">✓</span>
                  <span>ISO 9001: 2015 &amp; ASME Standards</span>
                </div>
                <div className="cta-assurance-pill">
                  <span className="cta-check-icon">✓</span>
                  <span>Custom Drawings &amp; Engineering</span>
                </div>
                <div className="cta-assurance-pill">
                  <span className="cta-check-icon">✓</span>
                  <span>Fast Response &amp; Global Dispatch</span>
                </div>
              </div>
            </div>

            <div className="client-cta-action">
              <a href="#quote" className="client-cta-primary-btn">
                <span>Request a Custom Quote</span>
                <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <div className="client-cta-email-chip">
                <span className="cta-email-label">Direct Sales Inquiries:</span>
                <a href="mailto:sales@aaasupports.com" className="cta-email-link">
                  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14" aria-hidden="true">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  sales@aaasupports.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}
