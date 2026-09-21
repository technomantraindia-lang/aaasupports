import { images } from '../data/homeData.js'

const keyFeatures = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: 'ISO 9001: 2015 Accredited',
    subtitle: 'Quality Management System',
    desc: 'Committed quality management system embedded in every process.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      </svg>
    ),
    title: 'ANSI / ASME Codes',
    subtitle: 'Pressure Piping Compliance',
    desc: 'Strict adherence to pressure piping design and manufacturing standards.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7 12h10M12 7v10" />
      </svg>
    ),
    title: 'MSS SP-58 Standards',
    subtitle: 'Pipe Hangers & Supports',
    desc: 'Certified standard for pipe hangers, supports, selection & design.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: 'QA / QC Controlled',
    subtitle: 'Total Quality Assurance',
    desc: 'Active QA/QC manuals and inspection ensuring 100% specification compliance.',
  },
]

export function AboutSection() {
  return (
    <section className="about-modern-section" id="about-us">
      <div className="container">
        <div className="about-modern-grid">
          {/* Left Column: Visual Showcase */}
          <div className="about-modern-visual">
            <div className="about-visual-backdrop" />
            <div className="about-modern-image-frame">
              <img
                src={images.aboutIndustrialImage}
                alt="AAA Supports Pvt. Ltd. engineering and manufacturing plant"
              />
              <div className="about-image-gradient-overlay" />
            </div>

            {/* Top Scope Pill */}
            <div className="about-floating-badge about-floating-badge--secondary">
              <div className="about-badge-dot" />
              <span>Design • Engineering • Manufacturing</span>
            </div>

            {/* Bottom ISO Floating Card */}
            <div className="about-floating-badge about-floating-badge--primary">
              <div className="about-badge-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="about-badge-text">
                <strong>ISO 9001: 2015</strong>
                <span>Accredited Organization</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Editorial Content */}
          <div className="about-modern-content">
            <div className="about-modern-header">
              <p className="section-kicker">
                <span /> About Our Company
              </p>
              <h2 className="about-modern-title">
                Welcome to <span>AAA Supports Pvt. Ltd.</span>
              </h2>
            </div>

            {/* Clean Narrative Text Block */}
            <div className="about-editorial-text">
              <p className="about-editorial-lead">
                <strong>AAA Supports Pvt. Ltd.</strong> is a well-recognized Indian name in <strong>Pipe Supports &amp; Hangers</strong>, having served hundreds of customers across Oil &amp; Gas, Chemical &amp; Fertilizer, Steel and Power industries. Our ability to deliver practical, site-ready solutions builds trusted partnerships and repeat business.
              </p>

              <p className="about-editorial-body">
                We are an <strong>ISO 9001: 2015 accredited organization</strong> engaged in the Design, Engineering, and Manufacturing of hanger and support systems. We comply with <strong>ANSI/ASME codes for pressure piping</strong> and <strong>MSS SP-58 standards</strong>, with Quality Assurance &amp; Quality Control Manuals actively used throughout our operations.
              </p>
            </div>

            {/* Sleek 4 Key Capabilities Grid */}
            <div className="about-features-grid">
              {keyFeatures.map((item) => (
                <div className="about-feature-item" key={item.title}>
                  <div className="about-feature-icon">{item.icon}</div>
                  <div className="about-feature-details">
                    <h4 className="about-feature-title">{item.title}</h4>
                    <span className="about-feature-sub">{item.subtitle}</span>
                    <p className="about-feature-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Read More Action */}
            <div className="about-modern-actions">
              <a className="about-readmore-btn" href="#products">
                <span>Read More</span>
                <span className="about-btn-arrow" aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
