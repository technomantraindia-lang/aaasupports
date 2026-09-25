import { useEffect, useState } from 'react'
import productImage from '../../assets/product-constant-spring-hangers.png'
import logoImage from '../../assets/logo.png'
import { submitForm } from '../data/formSubmit.js'

const services = [
  'Pipe Supports',
  'Spring Hangers & Supports',
  'Pipe Clamps & U-Bolts',
  'Custom Fabrication',
  'Engineering Consultation',
]

function FieldIcon({ type }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  const paths = {
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c.6-3.5 2.9-5.3 7-5.3s6.4 1.8 7 5.3" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    phone: <path d="M7.2 3.5 4.8 4.7c-.9.5-1.3 1.6-.9 2.6 2.1 5.8 7 10.7 12.8 12.8 1 .4 2.1 0 2.6-.9l1.2-2.4-4.2-2.2-1.5 1.8c-2.7-1.3-4.9-3.5-6.2-6.2l1.8-1.5-2.2-4.2Z" />,
    company: <><path d="M4 20h16M6 20V6l6-3 6 3v14M9 9h1m4 0h1M9 13h1m4 0h1M9 17h1m4 0h1" /></>,
    service: <><path d="M4 8h16M6 8V5h12v3M6 8v11h12V8M9 12h6" /></>,
    subject: <><path d="M5 4h10l4 4v12H5zM15 4v4h4M8 12h8M8 16h6" /></>,
    message: <><path d="m4 17 1.2-4.2L15.8 2.2a1.7 1.7 0 0 1 2.4 2.4L7.6 15.2zM4 17l4.2-1.2M13 5l3 3" /></>,
  }

  return <svg className="enquiry-field-icon" {...common}>{paths[type]}</svg>
}

export function EnquiryModal({ open, onClose }) {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  useEffect(() => {
    if (!open) {
      setSent(false)
      setSubmitError('')
      setIsSubmitting(false)
    }
  }, [open])

  if (!open) return null

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitForm(form, 'New Product Enquiry | AAA Supports')
      form.reset()
      setSent(true)
    } catch (error) {
      setSubmitError(error.message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="enquiry-modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="enquiry-modal" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
        <aside className="enquiry-modal-aside">
          <div className="enquiry-aside-grid" />
          <div className="enquiry-service-badge">
            <img src={logoImage} alt="AAA Supports Pvt. Ltd." />
          </div>
          <div className="enquiry-image-frame">
            <img src={productImage} alt="AAA Supports pipe hanger product" />
          </div>
          <div className="enquiry-aside-heading">
            <span>Trusted partner in</span>
            <strong>Industrial Pipe Support Solutions</strong>
          </div>
          <div className="enquiry-contact-list">
            <a href="tel:+919876543210"><b>Call Us</b><span>+91 98765 43210</span></a>
            <a href="mailto:sales@aaasupports.com"><b>Email Us</b><span>sales@aaasupports.com</span></a>
            <div><b>Engineering Support</b><span>Guidance for your requirement</span></div>
          </div>
        </aside>

        <div className="enquiry-modal-main">
          <button className="enquiry-modal-close" type="button" aria-label="Close enquiry form" onClick={onClose}>x</button>
          <div className="enquiry-modal-heading">
            <span>Let&apos;s connect</span>
            <h2 id="enquiry-title">Get in Touch</h2>
            <p>Send us your requirement and our team will get back to you shortly.</p>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit}>
            <label className="enquiry-field">
              <FieldIcon type="user" />
              <input name="name" placeholder="Full Name" autoComplete="name" required />
            </label>
            <label className="enquiry-field">
              <FieldIcon type="mail" />
              <input name="email" type="email" placeholder="Email Address" autoComplete="email" required />
            </label>
            <label className="enquiry-field">
              <FieldIcon type="phone" />
              <input name="phone" type="tel" placeholder="Phone Number" autoComplete="tel" required />
            </label>
            <label className="enquiry-field">
              <FieldIcon type="company" />
              <input name="company" placeholder="Company Name" autoComplete="organization" />
            </label>
            <label className="enquiry-field enquiry-field--full">
              <FieldIcon type="service" />
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select Service</option>
                {services.map((service) => <option key={service}>{service}</option>)}
              </select>
            </label>
            <label className="enquiry-field enquiry-field--full">
              <FieldIcon type="subject" />
              <input name="subject" placeholder="Subject" />
            </label>
            <label className="enquiry-field enquiry-field--full enquiry-field--message">
              <FieldIcon type="message" />
              <textarea name="message" placeholder="Tell us about your requirement" required />
            </label>
            <button className="enquiry-submit" type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : sent ? 'Enquiry Sent' : 'Send Enquiry'} <span aria-hidden="true">-&gt;</span>
            </button>
            {submitError ? <p className="enquiry-error" role="alert">{submitError}</p> : sent ? <p className="enquiry-success" role="status">Thank you. Our team will contact you shortly.</p> : <p className="enquiry-note">We&apos;ll respond within 24 hours.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}
