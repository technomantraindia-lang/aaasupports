import { useEffect } from 'react'
import contactImage from '../assets/contact.png'

const clientModules = import.meta.glob('../assets/client/**/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const clients = Object.entries(clientModules)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([path, image], index) => {
    const filename = path.split('/').pop().replace(/\.[^.]+$/, '')
    return {
      image,
      name: filename.replace(/[-_]/g, ' ').replace(/\s+/g, ' ').trim() || `Client ${index + 1}`,
    }
  })

const clientStats = [
  ['500+', 'Trusted Clients'],
  ['40+', 'Countries Served'],
  ['15+', 'Years of Experience'],
  ['98%', 'Client Satisfaction'],
]

const clientCategories = [
  {
    title: 'Refinery / Oil & Gas / Petrochemical Sector',
    names: [
      'Indian Oil Corporation Limited', 'Mangalore Refinery and Petrochemicals Limited', 'Cairn India Limited', 'Nayara Energy Ltd', 'Southern Petrochemical Industries Corporation',
      'GAIL (India) Limited', 'Numaligarh Refinery Limited', 'Dubai Petroleum', 'Oman Liquefied Natural Gas LLC', 'Chennai Petroleum Corporation Limited',
      'ONGC Petro additions Limited', 'Reliance Industries Limited', 'Hindustan Petroleum Corporation Limited', 'Bharat Petroleum Corporation Limited',
    ],
  },
  {
    title: 'Power Sector',
    names: [
      'Nuclear Power Corporation Of India Limited', 'BGR Energy Systems Limited', 'Adani Power Limited', 'Tata Power Company Limited', 'National Thermal Power Corporation Limited',
      'Bharat Heavy Electricals Limited', 'Thermax Ltd', 'UDUPI Power Plant', 'Dee Piping System, Faridabad', 'Jindal Power Limited',
      'Sravanthi Energy Private Ltd., Kashipur', 'Welspun Captive Power Generation Limited', 'The Department of Atomic Energy', 'Gujarat State Electricity Corporation Limited',
      'The Bharatiya Nabhikiya Vidyut Nigam Limited', 'Gujarat Industries Power Company Limited', 'L&T Energy-Power',
    ],
  },
  {
    title: 'Chemical, Fertilizer and Sugar Sector',
    names: [
      'Tata Chemicals Limited', 'Gujarat State Fertilizers & Chemicals Limited', 'Gujarat Narmada Valley Fertilizers & Chemicals', 'Indian Farmers Fertiliser Cooperative Limited', 'India Glycols Limited',
      'IOL Chemicals and Pharmaceuticals Ltd', 'DCM Shriram Limited', 'Grasim Industries Limited', 'Epigral Limited', 'Deepak Chem Tech Limited',
      'Athani Sugars Limited', 'Mellbro Sugars Private Limited', 'Bapuna Alcobrew Private Limited', 'Rashtriya Chemicals & Fertilizers Ltd.', 'Atul Limited',
      'Middle East Paper Company', 'Jubilant Industries Limited', 'Gujarat Alkalies and Chemicals Limited', 'TCI Sanmar Chemicals S.A.E', 'Etihad Food Industries Company Limited',
    ],
  },
  {
    title: 'Steel Sector',
    names: ['Tata Steel', 'Jindal Steel Odisha Limited', 'JSW Steel Limited', 'Mono Steel (India) Limited'],
  },
  {
    title: 'OEM / EPC',
    names: ['Thyssenkrupp', 'L&T Hydrocarbon Engineering', 'Praj Industries Limited', 'Megha Engineering & Infrastructures Limited', 'Meru Industries LLP', 'Sopan O&M Co. Pvt. Limited'],
  },
]

const clientFolders = [
  ['Refinery / Oil & Gas / Petrochemical Sector', 'Refinery  Oil & Gas  Petrochemical Sector'],
  ['Power Sector', 'Power Sector'],
  ['Chemical, Fertilizer and Sugar Sector', 'Chemical, Fertilizer And Sugar Sector'],
  ['Steel Sector', 'Steel Sector'],
  ['OEM / EPC', 'OEM  EPC'],
]

const clientOrderByTitle = new Map(clientCategories.map(({ title, names }) => [title, names]))

const normalizeClientName = (value) => value
  .toLowerCase()
  .replace(/\.[^.]+$/, '')
  .replace(/[^a-z0-9]+/g, '')

const orderClientEntries = (entries, preferredNames = []) => {
  const remaining = [...entries]
  const ordered = preferredNames.flatMap((preferredName) => {
    const preferred = normalizeClientName(preferredName)
    const matchIndex = remaining.findIndex(([path]) => {
      const filename = path.split('/').pop()
      const actual = normalizeClientName(filename)
      return actual === preferred || actual.startsWith(preferred) || preferred.startsWith(actual)
    })

    if (matchIndex === -1) return []
    return remaining.splice(matchIndex, 1)
  })

  return [...ordered, ...remaining]
}

const clientGroups = clientFolders.map(([title, folder]) => ({
  title,
  clients: orderClientEntries(
    Object.entries(clientModules).filter(([path]) => path.split('/').slice(-2, -1)[0] === folder),
    clientOrderByTitle.get(title),
  )
    .map(([path, image]) => ({
      image,
      name: path.split('/').pop().replace(/\.[^.]+$/, ''),
    })),
}))

export function ClientsPage() {
  useEffect(() => {
    const targets = document.querySelectorAll('.clients-page-intro > div, .client-directory-heading, .client-category .client-directory-card, .clients-page-cta')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reducedMotion.matches || !('IntersectionObserver' in window)) {
      targets.forEach((target) => target.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        currentObserver.unobserve(entry.target)
      })
    }, { threshold: 0.08, rootMargin: '0px 0px -4% 0px' })

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return <div className="clients-page">
    <section className="contact-banner clients-banner" aria-label="Our clients banner" style={{ '--contact-banner-image': `url(${contactImage})` }}>
      <div className="contact-banner-overlay" />
      <div className="contact-banner-inner container">
        <div className="contact-banner-copy">
          <div className="contact-breadcrumb"><a href="#home">Home</a><span>/</span><strong>Our Clients</strong></div>
          <h1>Our <strong>Clients</strong></h1>
          <p>Trusted by industrial leaders for dependable pipe support solutions, engineered performance and long-term partnership.</p>
          <span className="contact-banner-rule" />
          <div className="contact-banner-tagline">TRUSTED PARTNERS<br />STRONGER INDUSTRIES</div>
        </div>
      </div>
    </section>

    <main className="clients-page-main container">
      <section className="clients-page-intro">
        <div>
          <span className="clients-page-kicker"><b />Trusted by Industry Leaders</span>
          <h2>Partnerships that move <strong>industry forward.</strong></h2>
          <p>Our clients rely on AAA Supports for consistent quality, responsive engineering and pipe support systems built for demanding industrial environments.</p>
        </div>
        <div className="clients-page-stats">
          {clientStats.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
      </section>

      <section className="client-directory" aria-labelledby="client-directory-heading">
        <div className="client-directory-heading">
          <div><span className="clients-page-kicker"><b />Our Client Network</span><h3 id="client-directory-heading">Trusted across <strong>critical industries</strong></h3></div>
        </div>
        {clientGroups.map((group, groupIndex) => <section className={`client-category ${groupIndex % 2 ? 'client-category--muted' : ''}`} key={group.title}>
          <div className="client-category-title"><span /> <h4>{group.title}</h4> <span /></div>
          <div className="client-directory-grid">
            {group.clients.map((client, index) => <article className="client-directory-card" key={`${client.image}-${group.title}`}>
              <span className="client-directory-number">{String(index + 1).padStart(2, '0')}</span>
              <img src={client.image} alt={client.name} loading="lazy" />
            </article>)}
          </div>
        </section>)}
      </section>

      <section className="clients-page-cta" style={{ backgroundImage: `linear-gradient(90deg, rgb(2 35 65 / 95%), rgb(2 35 65 / 72%)), url(${contactImage})` }}>
        <div><span className="clients-page-kicker">Let&apos;s work together</span><h2>Join our network of <strong>trusted partners.</strong></h2><p>Connect with our team to discuss your next industrial support requirement.</p></div>
        <a href="#contact">Talk to Our Team <span>→</span></a>
      </section>
    </main>
  </div>
}
