export function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="PipeAnchorSupply home">
      <span className="brand-mark" aria-hidden="true"><i /><b /><em /></span>
      <span className="brand-copy">
        <strong>PIPEANCHOR<span>SUPPLY</span></strong>
        {!compact && <small>Supporting Global Infrastructure</small>}
      </span>
    </a>
  )
}
