import faqEngineerImage from '../../assets/faq-engineer-bg.png'

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
    name: path.split('/').pop().replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim(),
    src,
  }))

const firstLogoRow = clientLogos.filter((_, index) => index % 2 === 0)
const secondLogoRow = clientLogos.filter((_, index) => index % 2 === 1)

const clientStats = [
  ['users', '500+', 'Happy Clients'],
  ['globe', '40+', 'Countries Served'],
  ['shield', '98%', 'Client Satisfaction'],
]

function MiniIcon({ type }) {
  const paths = {
    users: <><circle cx="18" cy="18" r="6" /><circle cx="32" cy="19" r="5" /><path d="M6 41c1-9 6-14 13-14s12 5 13 14M31 29c6 0 10 4 11 12" /></>,
    globe: <><circle cx="24" cy="24" r="17" /><path d="M7 24h34M24 7c5 5 7 11 7 17s-2 12-7 17c-5-5-7-11-7-17s2-12 7-17Z" /></>,
    shield: <><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" /><path d="m17 24 5 5 10-11" /></>,
  }

  return <svg viewBox="0 0 48 48" aria-hidden="true">{paths[type]}</svg>
}

export function ValuedClientsSection() {
  return (
    <section className="clients-panel about-valued-clients" style={{ '--clients-bg': `url(${faqEngineerImage})` }} aria-labelledby="about-clients-title">
      <div className="clients-shell">
        <p className="clients-kicker"><span />Our Valued Clients</p>
        <div className="clients-header">
          <div>
            <h2 id="about-clients-title">Trusted by <strong>Industry Leaders</strong></h2>
            <p>We are proud to partner with leading companies across the globe, delivering reliable pipe support solutions that power critical projects and infrastructure.</p>
            <a className="home-clients-view-all" href="#clients">View All Clients <span>→</span></a>
          </div>
          <div className="clients-stats">
            {clientStats.map(([icon, value, label]) => (
              <div className="client-stat" key={label}>
                <div className="client-stat-icon">
                  <MiniIcon type={icon} />
                </div>
                <div className="client-stat-text">
                  <strong>{value}</strong>
                  <small>{label}</small>
                </div>
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
    </section>
  )
}
