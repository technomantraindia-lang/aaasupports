import { useState } from 'react'
import { navItems } from '../data/homeData.js'
import { Logo } from './Logo.jsx'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header" id="home">
      <div className="container header-inner">
        <Logo />
        <button className="menu-toggle" type="button" aria-label="Toggle navigation" onClick={() => setIsOpen(!isOpen)}>
          <span /><span /><span />
        </button>
        <nav className={`main-nav ${isOpen ? 'main-nav--open' : ''}`} aria-label="Primary navigation">
          {navItems.map((item, index) => (
            <a className={index === 0 ? 'active' : ''} href={item.href} key={item.label} onClick={() => setIsOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="button button--orange button--small" href="#quote">Request a Quote <span>→</span></a>
        </div>
      </div>
    </header>
  )
}
