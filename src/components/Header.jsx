import React, { useState, useEffect, useRef } from 'react';
import "../css/header.css";
import logo from "../img/Ícono Blanco fondo transparente.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const tickingRef = useRef(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 60);
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="header-inner">
        <a href="/" className="header-brand" onClick={closeMenu}>
          <img src={logo} alt="RevCardinal" className="header-logo" />
          <span className="header-title">RevCardinal</span>
        </a>

        <div className="header-right">
          <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
            <div className="header-nav-bg" onClick={closeMenu}></div>
            <div className="header-nav-panel">
              <a href="#servicios" onClick={closeMenu}>Servicios</a>
              <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
              <a href="#nuestra-historia" onClick={(e) => scrollToSection(e, 'nuestra-historia')}>Nosotros</a>
              <a href="#contacto" className="btn-contact-mobile" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a>
            </div>
          </nav>

          <a href="#contacto" className="btn-contact" onClick={(e) => scrollToSection(e, 'contacto')}>Contacto</a>
        </div>

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
