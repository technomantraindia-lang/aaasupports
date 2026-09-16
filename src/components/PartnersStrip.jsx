import { partners } from '../data/homeData.js'

export function PartnersStrip() {
  return <section className="partners-section"><div className="container"><div className="partners-title"><span /> <b>Global Partnerships</b><strong>Trusted by Leading Companies Worldwide</strong></div><div className="partners-list">{partners.map((partner) => <span key={partner}>{partner}</span>)}</div></div></section>
}
