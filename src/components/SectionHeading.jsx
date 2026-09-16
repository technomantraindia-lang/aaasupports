export function SectionHeading({ eyebrow, title, accent, action, light = false }) {
  return (
    <div className={`section-heading ${light ? 'section-heading--light' : ''}`}>
      <div><p className="section-kicker"><span /> {eyebrow}</p><h2>{title} {accent && <strong>{accent}</strong>}</h2></div>
      {action && <a className="text-link" href={action.href}>{action.label} <span>→</span></a>}
    </div>
  )
}
