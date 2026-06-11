import React, { useState, useEffect, useRef } from 'react';
import "../css/header.css";
import RevCardinalLogo from '../img/RevCardinal.png';

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
          <img src={RevCardinalLogo} alt="RevCardinal Logo" className="header-logo" />
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

          <a href="#contacto" className="btn-wa-header" onClick={(e) => scrollToSection(e, 'contacto')}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="wa-svg"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
            Hablemos
          </a>
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
