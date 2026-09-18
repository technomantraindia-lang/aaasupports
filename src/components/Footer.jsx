import { Logo } from './Logo.jsx'
import { images } from '../data/homeData.js'

const footerGroups = [
  {
    title: 'Quick Links',
    links: ['Home', 'About Us', 'Products', 'Industries', 'Projects', 'Resources', 'Contact Us'],
  },
  {
    title: 'Our Products',
    links: ['Spring Supports', 'Pipe Hangers', 'Clamps & U-Bolts', 'Slides & Guides', 'Custom Fabrication', 'All Products'],
  },
]

function FooterIcon({ type }) {
  const icons = {
    pin: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    phone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  }

  return (
    <span className="footer-icon-badge" aria-hidden="true">
      {icons[type]}
    </span>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-industrial-image" aria-hidden="true">
        <img src={images.heroImage} alt="" />
      </div>

      <div className="footer-main container">
        <div className="footer-company">
          <Logo />
          <p><strong>AAA Supports Pvt. Ltd.</strong> is an ISO 9001: 2015 accredited manufacturer of high-quality pipe supports, hangers, and custom fabrication solutions complying with ANSI/ASME and MSS SP-58 standards.</p>
          <div className="footer-socials" aria-label="Social media links">
            <a href="#home" aria-label="LinkedIn" className="footer-social-btn footer-social-btn--linkedin" title="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.64-1.64 1.64 1.64 0 0 0-1.64-1.64 1.64 1.64 0 0 0-1.64 1.64 1.64 1.64 0 0 0 1.64 1.64m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
              </svg>
            </a>
            <a href="#home" aria-label="Facebook" className="footer-social-btn footer-social-btn--facebook" title="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a href="#home" aria-label="YouTube" className="footer-social-btn footer-social-btn--youtube" title="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="#home" aria-label="Instagram" className="footer-social-btn footer-social-btn--instagram" title="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
          </div>
          <div className="footer-tagline"><span />Global solutions. Stronger industries.</div>
        </div>

        {footerGroups.map((group) => (
          <div className="footer-link-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="footer-links-list">
              {group.links.map((link) => (
                <a href="#home" key={link} className={link === 'All Products' ? 'footer-link-highlight' : ''}>
                  <span className="footer-link-arrow" aria-hidden="true">›</span>
                  <span>{link}</span>
                </a>
              ))}
            </div>
          </div>
        ))}

        <div className="footer-contact-panel">
          <h3>Get In Touch</h3>
          <div className="footer-contact-list">
            <div className="footer-contact-item">
              <FooterIcon type="pin" />
              <span>Plot No: 189, GIDC Industrial Estate,<br />Por - Ramangamdi - 391243,<br />Dist : Vadodara, Gujarat - India.</span>
            </div>
            <div className="footer-contact-item">
              <FooterIcon type="phone" />
              <a href="tel:+919876543210">+91 98765 43210</a>
            </div>
            <div className="footer-contact-item">
              <FooterIcon type="mail" />
              <a href="mailto:sales@aaasupports.com">sales@aaasupports.com</a>
            </div>
            <div className="footer-contact-item">
              <FooterIcon type="clock" />
              <span>Mon - Sat: 9:00 AM - 6:00 PM<br /><small>(Sunday Closed)</small></span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
