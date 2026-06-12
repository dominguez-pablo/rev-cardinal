import React from 'react';
import '../css/footer.css';
import logoBlanco from '../img/RevCardinal.png';

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
              Agencia de alto rendimiento para marcas que exigen resultados. Precisión, datos y diseño al servicio del crecimiento.
            </p>
          </div>

          <div className="footer-col">
            <h5>Enlaces</h5>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#nuestra-historia">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Social</h5>
            <ul>
              <li><a href="https://www.linkedin.com/company/revcardinal-marketing-company/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://www.instagram.com/revcardinalarg/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li>
                <a href="#" className="footer-whatsapp">
                  <span className="material-symbols-outlined">chat</span> WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 RevCardinal. Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
          </div>
        </div>
      </div>

{/*
  <div className="footer-dev">
        <a href="https://raindev.com.ar" target="_blank" rel="noopener noreferrer" className="footer-dev-link">
          Desarrollado por <strong>RainDev</strong>
        </a>
      </div>
    */}

      {/* Mobile Sticky CTA */}
      <div className="sticky-cta">
        <span className="sticky-cta-text">Diagnóstico gratis<br/>en el día</span>
        <a href="#" className="sticky-cta-btn">
          <svg viewBox="0 0 24 24" fill="currentColor" style={{width:18,height:18}}><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
          WhatsApp
        </a>
      </div>

      <a aria-label="WhatsApp" className="whatsapp-float" href="#">
        <svg fill="currentColor" height="28" width="28" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;
