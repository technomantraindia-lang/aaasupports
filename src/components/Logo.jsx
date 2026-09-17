import logoImage from '../../assets/logo.png'

export function Logo({ compact = false }) {
  return (
    <a className={`brand ${compact ? 'brand--compact' : ''}`} href="#home" aria-label="AAA Supports Pvt. Ltd. home">
      <img className="brand-image" src={logoImage} alt="AAA Supports Pvt. Ltd." />
    </a>
  )
}
