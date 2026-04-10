import { useEffect, useRef, useState } from 'react'

export default function Nav() {
  const navRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.style.background = window.scrollY > 60
          ? 'rgba(13,13,13,0.97)'
          : 'rgba(13,13,13,0.85)'
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav ref={navRef}>
      <div className="nav-logo">Auto<span>Precision</span></div>
      <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
        <li><a href="#services" onClick={closeMenu}>Services</a></li>
        <li><a href="#about" onClick={closeMenu}>À propos</a></li>
        <li><a href="#process" onClick={closeMenu}>Process</a></li>
        <li><a href="#avis" onClick={closeMenu}>Avis</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>
      <a href="#contact" className="nav-cta">Prendre RDV</a>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  )
}
