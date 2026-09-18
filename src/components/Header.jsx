import { useEffect, useState } from 'react'
import { navItems } from '../data/homeData.js'
import { Logo } from './Logo.jsx'

function currentPageHash() {
  const path = window.location.pathname.replace(/\/$/, '')
  const route = path.split('/').pop()
  const hash = window.location.hash
  if (hash === '#home') return '#home'
  if (hash === '#about' || hash === '#about-us') return '#about'
  if (hash === '#gallery') return '#gallery'
  if (hash === '#certificates') return '#certificates'
  if (hash === '#clients') return '#clients'
  if (hash === '#contact') return '#contact'
  if (route === 'contact') return '#contact'
  if (route === 'about') return '#about'
  if (route === 'gallery') return '#gallery'
  if (route === 'certificates') return '#certificates'
  if (route === 'clients') return '#clients'
  return hash || '#home'
}

export function Header({ isContact = false, onRequestQuote }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(currentPageHash)

  useEffect(() => {
    const syncHash = () => setActiveHash(currentPageHash())
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  return (
    <header className={`site-header ${isContact ? 'site-header--contact' : ''}`} id="home">
      <div className="container header-inner">
        <Logo />
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <span /><span /><span />
        </button>
        <nav className={`main-nav ${isOpen ? 'main-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a className={activeHash === (item.href === '/certificates' ? '#certificates' : item.href === '/clients' ? '#clients' : item.href) ? 'active' : ''} href={item.href} key={item.label} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button className="button button--orange button--small" type="button" onClick={onRequestQuote}>Request a Quote <span>→</span></button>
        </div>
      </div>
    </header>
  )
}
