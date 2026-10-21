import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Globe, Menu, X } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export default function Navbar() {
  const { lang, theme, toggleTheme, toggleLang, t } = usePortfolio();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container">
        <Link to="/" className="nav-brand" onClick={() => setMobileMenuOpen(false)}>
          <img src="/logo_perso.png" alt="Baptiste" className="brand-avatar" />
          <span>Baptiste<span className="brand-dot">.</span></span>
        </Link>

        <ul className={`nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
          {mobileMenuOpen && (
            <button 
              className="close-btn" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={24} />
            </button>
          )}
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active-nav-link' : ''} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.home}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active-nav-link' : ''} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.about}
            </Link>
          </li>
          <li>
            <Link 
              to="/skills" 
              className={isActive('/skills') ? 'active-nav-link' : ''} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.skills}
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'active-nav-link' : ''} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.projects}
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active-nav-link' : ''} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.contact}
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          {/* Theme Toggle */}
          <button 
            className="theme-toggle" 
            onClick={toggleTheme} 
            title={theme === 'dark' ? "Passer en mode clair" : "Passer en mode sombre"}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Moon size={18} color="#818cf8" /> : <Sun size={18} color="#f59e0b" />}
          </button>

          {/* Language Toggle */}
          <button 
            className="lang-toggle" 
            onClick={toggleLang} 
            title="Changer de langue"
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
          </button>

          {/* Mobile Menu */}
          <button 
            className="menu-toggle" 
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
