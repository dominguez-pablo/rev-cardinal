import { useState, useEffect } from 'react';
import '../css/header.css';
import RevCardinalLogo from '../img/RevCardinal.png';
import { Link } from 'react-router-dom';
import { homeHash } from '../constants/links';

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
            <a href={homeHash('contacto')} className="header-wa-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
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
        <a href={homeHash('contacto')} className="mobile-contact-btn" onClick={close}>Contacto</a>
      </nav>
    </>
  );
};

export default Header;
