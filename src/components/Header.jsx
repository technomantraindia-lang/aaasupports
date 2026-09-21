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
  if (route === 'site-supervision') return '#services'
  if (route === 'designing-of-pipe-supports' || route === 'custom-pipe-supports') return '#services'
  if (route === 'pipe-stress-analysis' || route === 'pipe-stress-analysis-service') return '#services'
  if (route === 'about') return '#about'
  if (route === 'gallery') return '#gallery'
  if (route === 'certificates') return '#certificates'
  if (route === 'clients') return '#clients'
  return hash || '#home'
}

export function Header({ isContact = false, onRequestQuote }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeHash, setActiveHash] = useState(currentPageHash)

  const isActive = (href) => {
    if (href === '#services') return activeHash === '#services'
    return activeHash === href
  }

  const closeNavigation = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
  }

  const navigateTo = (event, href) => {
    closeNavigation()
    if (!href.startsWith('/')) return

    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const syncHash = () => setActiveHash(currentPageHash())
    window.addEventListener('hashchange', syncHash)
    window.addEventListener('popstate', syncHash)
    return () => {
      window.removeEventListener('hashchange', syncHash)
      window.removeEventListener('popstate', syncHash)
    }
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
            item.children ? (
              <div className={`nav-dropdown ${isActive(item.href) ? 'active' : ''} ${isServicesOpen ? 'nav-dropdown--open' : ''}`} key={item.label}>
                <a
                  className="nav-dropdown-trigger"
                  href={item.href}
                  aria-haspopup="true"
                  onClick={(event) => {
                    if (window.matchMedia('(max-width: 900px)').matches) {
                      event.preventDefault()
                      setIsServicesOpen((open) => !open)
                      setIsOpen(true)
                    } else {
                      closeNavigation()
                    }
                  }}
                >
                  {item.label}<span className="nav-dropdown-caret" aria-hidden="true" />
                </a>
                <div className="nav-dropdown-menu">
                  {item.children.map((child) => (
                    <a href={child.href} key={child.label} onClick={(event) => navigateTo(event, child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a className={isActive(item.href === '/certificates' ? '#certificates' : item.href === '/clients' ? '#clients' : item.href) ? 'active' : ''} href={item.href} key={item.label} onClick={closeNavigation}>
                {item.label}
              </a>
            )
          ))}
        </nav>
        <div className="header-actions">
          <button className="button button--orange button--small" type="button" onClick={onRequestQuote}>Request a Quote <span>→</span></button>
        </div>
      </div>
    </header>
  )
}
