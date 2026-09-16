import { Logo } from './Logo.jsx'

const footerLinks = { 'Quick Links': ['Home', 'About Us', 'Products', 'Industries', 'Projects', 'Resources', 'Contact Us'], 'Our Products': ['Spring Supports', 'Pipe Hangers', 'Clamps & U-Bolts', 'Slides & Guides', 'Custom Fabrication', 'All Products'], Industries: ['Marine & Shipbuilding', 'Oil & Gas', 'Power & Energy', 'Infrastructure', 'Industrial'] }

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div className="footer-intro"><Logo /><p>Leading manufacturer of pipe supports, hangers and custom fabrication solutions for global industries.</p><div className="socials"><span>in</span><span>▶</span><span>◎</span></div></div>{Object.entries(footerLinks).map(([heading, links]) => <div className="footer-column" key={heading}><h3>{heading}</h3>{links.map((link) => <a href="#home" key={link}>{link}</a>)}</div>)}<div className="footer-column footer-contact"><h3>Contact Us</h3><p>⌖ Plot No. 25A, GIDC Industrial Estate,<br /> Ankleshwar, Gujarat, India</p><p>☎ +91 98765 43210</p><p>✉ sales@pipeanchorsupply.com</p></div></div><div className="container footer-bottom"><span>© 2024 PipeAnchorSupply. All Rights Reserved.</span><span>Privacy Policy　 |　 Terms &amp; Conditions　 |　 Sitemap</span><a href="#home">Back to Top　↑</a></div></footer>
}
