export function QuoteSection() {
  return (
    <section className="quote-section" id="quote"><div className="container quote-box"><div className="quote-copy"><h2>Need a Specific Product?</h2><p>Tell us what you need and our team will help you source the right solution.</p><div className="contact-line"><span>☎ +91 98765 43210</span><span>✉ sales@aaasupports.com</span></div></div><form className="quote-form" onSubmit={(event) => event.preventDefault()}><select defaultValue=""><option value="" disabled>Product Requirement *</option><option>Pipe Supports</option><option>Pipe Hangers</option><option>Custom Fabrication</option></select><input aria-label="Your Name" placeholder="Your Name *" required /><input aria-label="Company Name" placeholder="Company Name *" required /><input aria-label="Email Address" type="email" placeholder="Email Address *" required /><button className="button button--orange" type="submit">Request a Quote <span>→</span></button></form></div></section>
  )
}
