'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { siteContent } from '../content/site'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav shell">
      <Logo />

      <nav>
        {siteContent.navigation.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="button desktopCta" href="#contact">
        Advertise with us
      </a>

      <button
        className="menuButton"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      {menuOpen && (
        <div className="mobileMenu">
          {siteContent.navigation.map((item) => (
            <a key={item.href} onClick={closeMenu} href={item.href}>
              {item.label}
            </a>
          ))}

          <a onClick={closeMenu} className="button" href="#contact">
            Advertise with us
          </a>
        </div>
      )}
    </header>
  )
}
