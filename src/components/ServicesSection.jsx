const services = [
  {
    number: '01',
    label: 'Field Assurance',
    title: 'Site Supervision',
    description: 'Keep installation safe, compliant and on schedule with experienced supervision at every critical stage.',
    href: '/services/site-supervision',
    icon: 'inspection',
    tone: 'orange',
    points: ['On-site technical support', 'Quality & safety compliance', 'Installation guidance'],
  },
  {
    number: '02',
    label: 'Design Engineering',
    title: 'Designing of Pipe Supports',
    description: 'Get practical, load-ready support designs tailored to your piping layout and operating conditions.',
    href: '/services/designing-of-pipe-supports',
    icon: 'design',
    tone: 'blue',
    points: ['Custom support design', 'Code compliant solutions', 'Optimized for performance'],
  },
  {
    number: '03',
    label: 'Analysis & Optimization',
    title: 'Pipe Stress Analysis Service',
    description: 'Control movement, stress and loads before they become problems with advanced engineering analysis.',
    href: '/services/pipe-stress-analysis',
    icon: 'analysis',
    tone: 'green',
    points: ['Stress & load analysis', 'Nozzle load evaluation', 'Seismic, vibration & fatigue studies'],
  },
]

function ServiceIcon({ type }) {
  const paths = {
    inspection: <><path d="M12 25c0-7 5-12 12-12s12 5 12 12" /><path d="M8 25h32v6H8zM14 31v6h20v-6" /><path d="M18 37v4h12v-4M21 8h6" /></>,
    design: <><rect x="9" y="8" width="30" height="32" rx="1" /><path d="M15 15h18M15 21h18M15 27h7M28 27h5M15 34h18M24 13v21M20 30h8" /></>,
    analysis: <><path d="M9 39h31M12 36V25h6v11M22 36V18h6v18M32 36V12h6v24" /><path d="m11 19 8-6 6 3 12-10M32 6h5v5" /></>,
  }

  return <svg className="home-service-icon-svg" viewBox="0 0 48 48" aria-hidden="true">{paths[type]}</svg>
}

export function ServicesSection() {
  return (
    <section className="home-services-section" id="services">
      <div className="home-services-glow home-services-glow--one" aria-hidden="true" />
      <div className="home-services-glow home-services-glow--two" aria-hidden="true" />
      <div className="container home-services-container">
        <div className="home-services-heading">
          <div>
            <p className="section-kicker"><span />Engineering Services</p>
            <h2>Our <strong>Services</strong></h2>
            <span className="home-services-heading-mark" aria-hidden="true"><i /><b /><i /></span>
          </div>
        </div>

        <div className="home-services-grid">
          {services.map((service) => (
            <article className={`home-service-card home-service-card--${service.tone}`} key={service.title}>
              <div className="home-service-visual">
                <span className="home-service-number">{service.number}</span>
                <span className="home-service-icon"><ServiceIcon type={service.icon} /></span>
              </div>
              <div className="home-service-content">
                <p className="home-service-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p className="home-service-description">{service.description}</p>
                <ul className="home-service-points">
                  {service.points.map((point) => <li key={point}><span aria-hidden="true">&#10003;</span>{point}</li>)}
                </ul>
                <span className="home-service-watermark" aria-hidden="true">{service.number}</span>
                <a href={service.href}>Learn More <span aria-hidden="true">&#8594;</span></a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
