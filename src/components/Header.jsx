import React, { useState, useEffect } from 'react';
import "../css/header.css";
import logo from "../img/Ícono Blanco fondo transparente.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollToHistoria = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById('nuestra-historia');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="header-brand" onClick={closeMenu}>
          <img src={logo} alt="RevCardinal" className="header-logo" />
          <span className="header-title">RevCardinal</span>
        </a>

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <div className="header-nav-bg" onClick={closeMenu}></div>
          <div className="header-nav-panel">
            <a href="#servicios" onClick={closeMenu}>Servicios</a>
            <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
            <a href="#nuestra-historia" onClick={scrollToHistoria}>Nosotros</a>
            <a href="#contacto" className="btn-contact-mobile" onClick={closeMenu}>Contacto</a>
          </div>
        </nav>

        <a href="#contacto" className="btn-contact">Contacto</a>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
