import { useEffect, useRef, useState } from 'react'
import contactImage from '../assets/contact.png'
import footerImage from '../assets/pipe-support-hero.png'
import logo from '../assets/logo.png'
import { FORM_SUBMIT_ENDPOINT } from './data/formSubmit.js'

const officeMapUrl = 'https://www.google.com/maps?q=22.0840098,73.1977084&z=17&hl=en'
const officeMapEmbedUrl = 'https://www.google.com/maps?q=22.0840098,73.1977084&z=17&hl=en&output=embed'

const requirementOptions = ['Company Profile', 'Product Catalogue', 'Service Guide']

function Icon({ name, size = 28 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

  const paths = {
    pin: <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.1.75.28 1.48.55 2.18a2 2 0 0 1-.45 2.11L8.82 10.3a16 16 0 0 0 4.88 4.88l1.29-1.29a2 2 0 0 1 2.11-.45c.7.27 1.43.45 2.18.55A2 2 0 0 1 22 16.92Z" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="1.5" /><path d="m3 7 9 6 9-6" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    gear: <><path d="M12 2.8 13.4 5a7.5 7.5 0 0 1 2 .8l2.5-.5 1.5 1.5-.5 2.5c.35.62.62 1.28.8 2L21.9 12l-2.2 1.4a7.5 7.5 0 0 1-.8 2l.5 2.5-1.5 1.5-2.5-.5a7.5 7.5 0 0 1-2 .8L12 21.9l-1.4-2.2a7.5 7.5 0 0 1-2-.8l-2.5.5-1.5-1.5.5-2.5a7.5 7.5 0 0 1-.8-2L2.1 12l2.2-1.4a7.5 7.5 0 0 1 .8-2l-.5-2.5 1.5-1.5 2.5.5a7.5 7.5 0 0 1 2-.8L12 2.8Z" /><circle cx="12" cy="12" r="2.8" /></>,
    support: <><path d="M4.5 13.5a7.5 7.5 0 0 1 15 0" /><path d="M4.5 13.5v3a2 2 0 0 0 2 2h1v-5h-3Zm15 0v3a2 2 0 0 1-2 2h-1v-5h3Z" /><path d="M8 18.5c.8 1.5 2.3 2.4 4 2.4h1.8" /></>,
    target: <><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /><path d="M12 1v2m0 18v2M1 12h2m18 0h2" /></>,
    road: <><path d="m8 2-2 20M16 2l2 20M9.5 6h5M8.8 12h6.4M8 18h8" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.1 2.4 3.2 5.4 3.2 9s-1.1 6.6-3.2 9c-2.1-2.4-3.2-5.4-3.2-9S9.9 5.4 12 3Z" /></>,
    people: <><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c.3-3.2 2.2-5 6-5s5.7 1.8 6 5M15 15.2c3.6-.2 5.5 1.4 6 4.8" /></>,
    arrow: <path d="M5 12h13m-5-5 5 5-5 5" />,
  }

  return <svg {...common}>{paths[name]}</svg>
}

function Label({ children, icon }) {
  return <div className="contact-kicker"><span />{icon ? <Icon name={icon} size={14} /> : null}<span className="contact-kicker-text">{children}</span></div>
}

const assurances = [
  ['clock', 'Quick', 'Response'],
  ['gear', 'Expert', 'Guidance'],
  ['target', 'Customized', 'Solutions'],
  ['support', 'Long-Term', 'Partnership'],
]

const benefits = [
  ['pin', 'Strategic Location', 'Well-connected for easy access'],
  ['gear', 'Technical Assistance', 'Get expert service for your needs'],
  ['globe', 'Global Support', 'Serving industries across regions'],
  ['people', 'Dedicated Team', 'Always ready to help you'],
]

function ContactCard({ icon, title, children }) {
  return <article className="contact-card">
    <div className="contact-card-icon"><Icon name={icon} size={31} /></div>
    <div className="contact-card-copy"><h3>{title}</h3><p>{children}</p></div>
    <div className="contact-card-ghost"><Icon name={icon} size={74} /></div>
  </article>
}

export function ContactPage({ hideContactFooter = false }) {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [attachmentName, setAttachmentName] = useState('')
  const contactRef = useRef(null)
  const contactFormRef = useRef(null)
  const hasPendingSubmit = useRef(false)

  useEffect(() => {
    const page = contactRef.current
    if (!page) return undefined

    const sections = [
      page.querySelector('.contact-banner'),
      page.querySelector('.contact-main'),
      page.querySelector('.contact-cta'),
      page.querySelector('.contact-footer'),
    ].filter(Boolean)
    const items = [...page.querySelectorAll([
      '.contact-banner-copy',
      '.contact-left',
      '.contact-form-panel',
      '.benefit',
      '.contact-cta-inner > div',
      '.contact-cta-button',
      '.contact-footer-inner > *',
    ].join(','))]
    const directions = ['contact-reveal-left', 'contact-reveal-up', 'contact-reveal-right', 'contact-reveal-down']

    sections.forEach((section) => section.classList.add('contact-reveal-section'))
    items.forEach((item, index) => {
      item.classList.add('contact-reveal-item', directions[index % directions.length])
      item.style.setProperty('--contact-item-order', index % 6)
    })

    const revealTargets = [...sections, ...items]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      revealTargets.forEach((target) => target.classList.add('is-contact-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-contact-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  function handleSubmit(event) {
    const file = event.currentTarget.elements.attachment.files?.[0]
    if (file && file.size > 10 * 1024 * 1024) {
      event.preventDefault()
      setSubmitError('Please select a file smaller than 10 MB.')
      return
    }

    hasPendingSubmit.current = true
    setIsSubmitting(true)
    setSubmitError('')
    setSent(false)
  }

  function handleSubmitFrameLoad() {
    if (hasPendingSubmit.current) {
      hasPendingSubmit.current = false
      setIsSubmitting(false)
      setSent(true)
      contactFormRef.current?.reset()
      setAttachmentName('')
    }
  }

  return <div className="contact-page" ref={contactRef}>
    <section className="contact-banner" aria-label="Contact Us banner" style={{ '--contact-banner-image': `url(${contactImage})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-inner container">
        <div className="contact-banner-copy">
          <div className="contact-breadcrumb"><a href="#home">Home</a><span>/</span><strong>Contact Us</strong></div>
          <h1>Contact <strong>Us</strong></h1>
          <p>We are here to help you with the best solutions for SF₆ Gas Handling.<br className="desktop-break" /> Get in touch with our team for inquiries, support or business<br className="desktop-break" /> opportunities.</p>
          <span className="contact-banner-rule" />
          <div className="contact-banner-tagline">LET’S BUILD A SAFER<br />TOMORROW TOGETHER</div>
        </div>
      </div>
    </section>

    <main className="contact-main container">
      <div className="contact-content-grid">
        <div className="contact-left">
          <ContactCard icon="pin" title="Registered Office & Works"><a href={officeMapUrl} target="_blank" rel="noreferrer">Survey No. 517/1, Fofaliya Village Road,<br />Nana Fofaliya, Taluka Dabhoi,<br />Dist. Vadodara - 391210, Gujarat, India.</a></ContactCard>
          <ContactCard icon="phone" title="Contact Number"><a href="tel:+912652830444">+91-265 2830 444/5</a><span className="card-separator" /> <a href="tel:+918460722294">084607 22294</a></ContactCard>
          <ContactCard icon="mail" title="Contact E-Mail"><a href="mailto:sales@aaasupports.com">sales@aaasupports.com</a></ContactCard>
          <div className="map-frame">
            <iframe title="AAA Supports location map" src={officeMapEmbedUrl} loading="lazy" allowFullScreen />
            <div className="map-label"><strong>AAA SUPPORTS PRIVATE LIMITED</strong><a href={officeMapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a></div>
          </div>
        </div>

        <section className="contact-form-panel">
          <Label>Get In Touch</Label>
          <h2>We’d Love to <strong>Hear From You</strong></h2>
          <p className="form-intro">Tell us what you need in design, engineering, or manufacturing of hanger and support systems. Share your requirement and our team will get back to you shortly.</p>
          <form id="contact-form" ref={contactFormRef} className="contact-form" action={FORM_SUBMIT_ENDPOINT} method="POST" encType="multipart/form-data" target="contact-submit-frame" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New Website Enquiry | AAA Supports" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label><span>Your Name <em>*</em></span><input required name="name" placeholder="Enter your name" /></label>
            <label><span>Your Company <em>*</em></span><input required name="company" placeholder="Enter company name" /></label>
            <label><span>Your Email <em>*</em></span><input required type="email" name="email" placeholder="Enter your email" /></label>
            <label><span>Your Phone <em>*</em></span><input required type="tel" name="phone" placeholder="Enter your phone number" /></label>
            <label className="form-full"><span>What do you need? <em>*</em></span><select required name="requirement" defaultValue=""><option value="" disabled>Select your requirement</option>{requirementOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            <label className="form-full contact-attachment-field"><span>Attach Image or PDF</span><span className="contact-file-picker"><input type="file" name="attachment" accept="image/*,.pdf,application/pdf" onChange={(event) => { setAttachmentName(event.target.files?.[0]?.name || ''); setSubmitError('') }} /><span className="contact-file-icon" aria-hidden="true">↑</span><span className="contact-file-copy"><strong>{attachmentName || 'Choose a file'}</strong><small>JPG, PNG or PDF · maximum 10 MB</small></span></span></label>
            <label className="form-full"><span>Message <em>*</em></span><textarea required name="message" placeholder="Tell us about your requirement..." /></label>
            <button className="contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? 'Sending...' : sent ? 'Message Sent' : 'Send Message'}<Icon name="arrow" size={20} /></button>
            {sent ? <p className="form-success" role="status">Thank you — our team will get back to you shortly.</p> : null}
            {submitError ? <p className="form-error" role="alert">{submitError}</p> : null}
          </form>
          <iframe name="contact-submit-frame" title="Contact form submission" className="contact-submit-frame" onLoad={handleSubmitFrameLoad} />
        </section>
      </div>

      <div className="benefit-row">
        {benefits.map(([icon, title, subtitle]) => <div className={`benefit benefit--${icon}`} key={title}><span className="benefit-icon"><Icon name={icon} size={23} /></span><b><strong>{title}</strong><small>{subtitle}</small></b></div>)}
      </div>
    </main>

    <section className="contact-cta" style={{ '--contact-footer-image': `url(${footerImage})` }}>
      <div className="contact-cta-overlay" />
      <div className="contact-cta-inner container">
        <div><Label>Let’s Connect</Label><h2>Together for a <strong>Stronger, Safer Tomorrow</strong></h2><p>Your reliable partner in pipe support solutions.</p></div>
        <a className="contact-cta-button" href="#contact-form">Contact Our Team <Icon name="arrow" size={21} /></a>
      </div>
    </section>

    {!hideContactFooter ? <footer className="contact-footer">
      <div className="contact-footer-inner container">
        <div className="contact-footer-address"><Icon name="pin" size={20} /><a href={officeMapUrl} target="_blank" rel="noreferrer">Survey No. 517/1, Fofaliya Village Road,<br />Nana Fofaliya, Taluka Dabhoi,<br />Dist. Vadodara - 391210, Gujarat, India.</a></div><i />
        <div><Icon name="phone" size={19} /><span>+91-265 2830 444/5,<br />084607 22294</span></div><i />
        <div><Icon name="mail" size={19} />sales@aaasupports.com</div><i />
        <span className="footer-tag">Supporting Progress Globally</span>
        <img src={logo} alt="AAA Supports" />
      </div>
    </footer> : null}
  </div>
}
