import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <h1>Scope Global</h1>
          </Link>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/#home" onClick={closeMenu}>Home</a></li>
            <li><a href="/#services" onClick={closeMenu}>Services</a></li>
            <li><a href="/#about" onClick={closeMenu}>About</a></li>
            <li><a href="/#contact" onClick={closeMenu}>Contact</a></li>
            <li>
              <Link to="/student-registration" className="btn-primary" onClick={closeMenu}>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header