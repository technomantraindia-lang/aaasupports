import { heroMetrics } from '../data/homeData.js'

function MetricIcon({ index }) {
  if (index === 0) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M9 39V18h12v21M27 39V9h12v30M5 39h38M14 23v3M14 30v3M32 14v3M32 21v3M32 28v3" /></svg>
  if (index === 1) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="m18 30 5-5a7 7 0 0 0-10-10l-5 5a7 7 0 0 0 10 10ZM30 18l5-5a7 7 0 0 1 10 10l-5 5a7 7 0 0 1-10-10ZM16 24h16" /></svg>
  if (index === 2) return <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 5 39 11v11c0 10-6 17-15 21C15 39 9 32 9 22V11l15-6Z" /><path d="m17 24 5 5 10-11" /></svg>
  return <svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="18" /><path d="M6 24h36M24 6c5 5 7 11 7 18s-2 13-7 18c-5-5-7-11-7-18s2-13 7-18Z" /></svg>
}

export function MetricsBar() {
  return (
    <div className="metrics-bar">
      {heroMetrics.map(([, value, label], index) => (
        <div className="metric-item" key={value}>
          <span className="metric-icon"><MetricIcon index={index} /></span>
          <span><b>{value}</b><small>{label}</small></span>
        </div>
      ))}
    </div>
  )
}
