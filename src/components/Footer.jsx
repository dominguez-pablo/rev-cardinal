import React from 'react';
import { Link } from 'react-router-dom';
import '../css/footer.css';
import logoBlanco from '../img/RevCardinal.png';
import { homeHash, WHATSAPP_URL } from '../constants/links';
import WhatsAppIcon from './WhatsAppIcon';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand-col">
            <div className="footer-logo">
              <img src={logoBlanco} alt="RevCardinal Logo" />
            </div>
            <p className="footer-desc">
              Agencia de marketing y producción para marcas que exigen resultados medibles.
            </p>
          </div>

          <div className="footer-col">
            <h5>Enlaces</h5>
            <ul>
              <li><Link to="/servicios">Servicios</Link></li>
              <li><Link to="/nosotros">Nosotros</Link></li>
              <li><a href={homeHash('contacto')}>Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Social</h5>
            <ul>
              <li><a href="https://www.linkedin.com/company/revcardinal-marketing-company/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/revcardinalarg/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-whatsapp">
                  <WhatsAppIcon /> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 RevCardinal. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href={homeHash('contacto')}>Contacto</a>
          </div>
        </div>
      </div>

      <div className="sticky-cta">
        <span className="sticky-cta-text">Diagnóstico gratis<br/>en el día</span>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="sticky-cta-btn">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>

      <a aria-label="WhatsApp" className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon className="whatsapp-float-icon" size={28} />
      </a>
    </footer>
  );
};

export default Footer;
