'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

/*
  EDIT NAVIGATION HERE
  --------------------
  Change labels below if you want different menu wording.
  Keep the # links unchanged unless the matching section ID also changes.
*/

const navigation = [
  { label: 'What is Cool Box?', href: '#what' },
  { label: 'Why Cool Box?', href: '#why' },
  { label: 'Where It Works', href: '#environments' },
  { label: 'Advertising Offer', href: '#offer' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav shell">
      <Logo />

      <nav>
        {navigation.map((item) => (
          <a key={item.href} href={item.href}>{item.label}</a>
        ))}
      </nav>

      <a className="button desktopCta" href="#contact">Advertise with us</a>

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
          {navigation.map((item) => (
            <a key={item.href} onClick={closeMenu} href={item.href}>{item.label}</a>
          ))}
          <a onClick={closeMenu} className="button" href="#contact">Advertise with us</a>
        </div>
      )}
    </header>
  )
}
