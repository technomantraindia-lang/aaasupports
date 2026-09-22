import { useEffect, useState } from 'react'
import { navItems } from '../data/homeData.js'
import { Logo } from './Logo.jsx'

const productCategories = [
  {
    name: 'Primary Supports',
    products: [
      'Pipe Shoe / Saddles', 'Pipe Clamps', 'Trunnions', 'Rest Supports', 'Guide Shoe',
      'Puff Supports', 'Fix Supports', 'Line Stops', 'Anchor', 'U Clamps / U Bolts',
      'Foundation Bolts', 'Slide Supports', 'PTFE Slide Supports', 'Roller Supports',
      'Variable Spring Hangers & Supports', 'Constant Spring Hangers & Supports',
      'Rigid Hangers', 'Rigid Struts', 'Hydraulic Snubbers',
    ],
  },
  {
    name: 'Secondary Supports',
    products: ['Structural Beams', 'Structural Columns', 'Structural Frames', 'Structural Members', 'Brackets'],
  },
  {
    name: 'Pipe Fittings, Flanges & Piping Spools',
    products: ['Pipe Fittings', 'Flanges', 'Piping Spools'],
  },
]

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
  if (route === 'products') return '/products'
  if (route === 'about') return '#about'
  if (route === 'gallery') return '#gallery'
  if (route === 'certificates') return '#certificates'
  if (route === 'clients') return '#clients'
  return hash || '#home'
}

export function Header({ isContact = false, onRequestQuote }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [activeProductCategory, setActiveProductCategory] = useState(null)
  const [activeHash, setActiveHash] = useState(currentPageHash)

  const isActive = (href) => {
    if (href === '#services') return activeHash === '#services'
    return activeHash === href
  }

  const closeNavigation = () => {
    setIsOpen(false)
    setIsServicesOpen(false)
    setIsProductsOpen(false)
    setActiveProductCategory(null)
  }

  const navigateTo = (event, href) => {
    closeNavigation()
    if (!href.startsWith('/')) return

    event.preventDefault()
    window.history.pushState({}, '', href)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const navigateToHomeSection = (event, href) => {
    event.preventDefault()
    closeNavigation()
    window.history.pushState({}, '', `/${href}`)
    window.dispatchEvent(new PopStateEvent('popstate'))
    window.setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0)
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

  useEffect(() => {
    const closeDropdownsOnOutsideClick = (event) => {
      if (!event.target.closest('.nav-dropdown')) {
        setIsProductsOpen(false)
        setIsServicesOpen(false)
        setActiveProductCategory(null)
        if (!event.target.closest('.site-header')) setIsOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeDropdownsOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeDropdownsOnOutsideClick)
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
            item.label === 'Products' ? (
              <div className={`nav-dropdown nav-products-dropdown ${isActive(item.href) ? 'active' : ''} ${isProductsOpen ? 'nav-dropdown--open' : ''}`} key={item.label} onMouseEnter={() => { if (!window.matchMedia('(max-width: 900px)').matches) setIsProductsOpen(true) }} onMouseLeave={() => { if (!window.matchMedia('(max-width: 900px)').matches) setIsProductsOpen(false) }}>
                <a
                  className="nav-dropdown-trigger"
                  href={item.href}
                  aria-haspopup="true"
                  onClick={(event) => {
                    if (window.matchMedia('(max-width: 900px)').matches) {
                      event.preventDefault()
                      setIsProductsOpen((open) => !open)
                      setIsOpen(true)
                    } else {
                      navigateTo(event, item.href)
                    }
                  }}
                >
                  {item.label}<span className="nav-dropdown-caret" aria-hidden="true" />
                </a>
                <div className={`products-mega-menu ${activeProductCategory ? 'products-mega-menu--selected' : ''}`}>
                  <div className="products-mega-categories">
                    {productCategories.map((category) => (
                      <button
                        className={activeProductCategory === category.name ? 'active' : ''}
                        type="button"
                        key={category.name}
                        onClick={() => setActiveProductCategory(category.name)}
                      >
                        <span>{category.name}</span><b aria-hidden="true">›</b>
                      </button>
                    ))}
                  </div>
                  {activeProductCategory && <div className="products-mega-products">
                      <p>{activeProductCategory}</p>
                      <div>
                        {productCategories.find((category) => category.name === activeProductCategory).products.map((product) => (
                          <a href="#quote" key={product} onClick={closeNavigation}>{product}</a>
                        ))}
                      </div>
                      <a className="products-mega-view-all" href="/products" onClick={(event) => navigateTo(event, '/products')}>View All Products <span>→</span></a>
                    </div>}
                </div>
              </div>
            ) : item.children ? (
              <div className={`nav-dropdown ${isActive(item.href) ? 'active' : ''} ${isServicesOpen ? 'nav-dropdown--open' : ''}`} key={item.label} onMouseEnter={() => { if (!window.matchMedia('(max-width: 900px)').matches) setIsServicesOpen(true) }} onMouseLeave={() => { if (!window.matchMedia('(max-width: 900px)').matches) setIsServicesOpen(false) }}>
                <div className="nav-dropdown-trigger-row">
                  <a className="nav-dropdown-trigger" href={item.href} aria-haspopup="true" onClick={(event) => navigateToHomeSection(event, item.href)}>{item.label}</a>
                  <button className="nav-dropdown-toggle" type="button" aria-label={`Open ${item.label} menu`} aria-expanded={isServicesOpen} onClick={() => { setIsServicesOpen((open) => !open); setIsOpen(true) }}><span className="nav-dropdown-caret" aria-hidden="true" /></button>
                </div>
                <div className="nav-dropdown-menu">
                  {item.children.map((child) => (
                    <a href={child.href} key={child.label} onClick={(event) => navigateTo(event, child.href)}>
                      {child.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a className={isActive(item.href === '/certificates' ? '#certificates' : item.href === '/clients' ? '#clients' : item.href) ? 'active' : ''} href={item.href} key={item.label} onClick={(event) => navigateTo(event, item.href)}>
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
