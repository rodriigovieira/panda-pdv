import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a href="#" className="logo">
            <span className="logo-icon">🐼</span>
            <span className="logo-text">Panda<span className="logo-accent">PDV</span></span>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <a href="#features" onClick={() => setMobileMenuOpen(false)}>Funcionalidades</a>
            <a href="#modules" onClick={() => setMobileMenuOpen(false)}>Módulos</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contato</a>
          </div>

          <div className="nav-actions">
            <a href="#contact" className="btn btn-primary">
              Solicitar Demo
            </a>
          </div>

          <button 
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
