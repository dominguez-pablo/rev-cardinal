import { useState, useEffect } from 'react';
import '../css/header.css';
import RevCardinalLogo from '../img/RevCardinal.png';
import { Link } from 'react-router-dom';
import { WHATSAPP_URL } from '../constants/links';
import WhatsAppIcon from './WhatsAppIcon';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;
    const cb = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 60);
        ticking = false;
      });
    };
    cb();
    window.addEventListener('scroll', cb, { passive: true });
    return () => window.removeEventListener('scroll', cb);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner">

          <Link to="/" className="header-brand" onClick={close}>
            <img src={RevCardinalLogo} alt="RevCardinal" className="header-logo" />
          </Link>

          <div className="header-right-desktop">
            <nav className="header-nav-desktop">
              <Link to="/servicios" onClick={close}>Servicios</Link>
              <Link to="/nosotros" onClick={close}>Nosotros</Link>
            </nav>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="header-wa-btn">
              <WhatsAppIcon />
              Hablemos
            </a>
          </div>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            <span /><span /><span />
          </button>

        </div>
      </header>

      <div className={`mobile-overlay${menuOpen ? ' open' : ''}`} onClick={close} />
      <nav className={`mobile-panel${menuOpen ? ' open' : ''}`}>
        <Link to="/servicios" onClick={close}>Servicios</Link>
        <Link to="/nosotros" onClick={close}>Nosotros</Link>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mobile-contact-btn" onClick={close}>
          <WhatsAppIcon />
          WhatsApp
        </a>
      </nav>
    </>
  );
};

export default Header;
