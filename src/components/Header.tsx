import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-icon">🐼</span>
            <span className="logo-text">Panda<span className="logo-accent">PDV</span></span>
          </Link>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <NavLink to="/features" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              Funcionalidades
            </NavLink>
            <NavLink to="/modules" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              Módulos
            </NavLink>
            <NavLink to="/pricing" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              Preços
            </NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
              Contato
            </NavLink>
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary">
              Solicitar Demo
            </Link>
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
