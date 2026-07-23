import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/mainhome.css';
import miniBerlin from '../img/clientes reemplazo/bmw mini neg 600px.png';
import berlinMotors from '../img/clientes reemplazo/BERLIN_NEG 600px.png';
import upwise from '../img/upwise.png';
import brod from '../img/brod.png';
import whatsAppImage from '../img/clientes reemplazo/Viu Neg 600px.png';
import untitled2_28 from '../img/clientes reemplazo/bicentenario neg 600px.png';
import vand from '../img/vand.png';
import untitled1_15 from '../img/Untitled-1 15.png';
import untitled1_7 from '../img/Untitled-1 7.png';
import untitled1_6 from '../img/Untitled-1 6.png';
import untitled1_3 from '../img/Untitled-1 3.png';
import royalEnfield from '../img/clientes reemplazo/ROYAL_ENFIELD_TSJ_LO_FF 2 600px.png';
import vincent from '../img/clientes reemplazo/Vincent Logo Negativo 1 600px.png';
import image118 from '../img/image 118.png';
import group288 from '../img/Group 288.png';
import group90 from '../img/clientes reemplazo/Qj Neg 600px.png';
import bmwMotorradLogo from '../img/clientes reemplazo/bmw motorrad neg 600px.png';
import LogotipoCompletoBlanco from '../img/Logotipo completo blanco.png';
import logoBlanco from '../img/Ícono Blanco fondo transparente.png';
import carrousel1 from '../img/carrousel1.png';
import carrousel2 from '../img/carrousel2.png';
import carrousel3 from '../img/carrousel3.png';
import impactoVisual1 from '../img/1planning.png';
import impactoVisual2 from '../img/2content_production.png';
import impactoVisual3 from '../img/3social_media_design.png';
import impactoVisual4 from '../img/4PaidMediaAds_results.png';
import { homeHash, WHATSAPP_URL } from '../constants/links';
import { faqItems } from '../constants/faq';
import WhatsAppIcon from './WhatsAppIcon';

/** Tamaño visual en el marquee (el PNG puede ser 600×600 con mucho padding transparente). */
const carouselLogos = [
  { src: miniBerlin, size: 'xl', alt: 'Berlín Motors MINI' },
  { src: berlinMotors, size: 'lg', alt: 'Berlín Motors BMW' },
  { src: upwise, size: 'xl', alt: 'Upwise' },
  { src: brod, size: 'sm', alt: 'Brod' },
  { src: whatsAppImage, size: 'lg', alt: 'Viü Premium Outlet' },
  { src: untitled2_28, size: 'lg', alt: 'Hotel Bicentenario' },
  { src: vand, alt: 'Vand' },
  { src: untitled1_15, alt: 'Tiro Federal de Tucumán' },
  { src: untitled1_7, alt: 'Cano Car Lounge' },
  { src: untitled1_6, alt: 'Altavista Park' },
  { src: untitled1_3, alt: 'Alubaru' },
  { src: royalEnfield, alt: 'Royal Enfield' },
  { src: vincent, alt: 'Vincent Moto Garage' },
  { src: image118, alt: 'Trackday Argentina' },
  { src: group288, alt: 'En Llamas' },
  { src: group90, alt: 'QJ Motor NOA' },
  { src: bmwMotorradLogo, size: 'wide', alt: 'Berlín Motors BMW Motorrad' },
];

const CAROUSEL_INTERVAL_MS = 7000;

const ServiciosPeekLink = () => (
  <Link to="/servicios" className="svc-list-link" aria-label="Ver servicios">
    <span className="material-symbols-outlined svc-list-link-eye" aria-hidden="true">visibility</span>
    <span className="material-symbols-outlined svc-list-link-arrow" aria-hidden="true">arrow_forward</span>
  </Link>
);

const setSpotlight = (e, name) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty(`--${name}-x`, `${e.clientX - rect.left}px`);
  el.style.setProperty(`--${name}-y`, `${e.clientY - rect.top}px`);
};

const FaqItem = ({ question, answer, highlight }) => {
  const renderAnswer = () => {
    if (!highlight || !answer.includes(highlight)) return answer;
    const [before, after] = answer.split(highlight);
    return (
      <>
        {before}
        <strong>{highlight}</strong>
        {after}
      </>
    );
  };

  return (
    <details className="faq-item">
      <summary>{question}</summary>
      <div className="faq-answer-wrap">
        <div className="faq-answer">{renderAnswer()}</div>
      </div>
    </details>
  );
};

const MainHome = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 3;

  const goNext = () => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    const currentScroll = carouselRef.current.scrollLeft;
    const currentIndex = Math.round(currentScroll / width);
    const nextIndex = (currentIndex + 1) % totalSlides;
    carouselRef.current.scrollTo({ left: width * nextIndex, behavior: 'smooth' });
    setActiveSlide(nextIndex);
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      const index = Math.round(carouselRef.current.scrollLeft / width);
      setActiveSlide(index);
    }
  };

  const pauseAutoScroll = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resumeAutoScroll = () => {
    pauseAutoScroll();
    intervalRef.current = setInterval(goNext, CAROUSEL_INTERVAL_MS);
  };

  useEffect(() => {
    intervalRef.current = setInterval(goNext, CAROUSEL_INTERVAL_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const goToSlide = (index) => {
    if (carouselRef.current) {
      const width = carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: width * index, behavior: 'smooth' });
      setActiveSlide(index);
      pauseAutoScroll();
      intervalRef.current = setInterval(goNext, CAROUSEL_INTERVAL_MS);
    }
  };

  return (
    <main>
      <section
        className="section-fullwidth relative h-[600px] md:h-[700px] overflow-hidden"
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      >
        <div ref={carouselRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory h-full hide-scrollbar scroll-smooth w-full" id="hero-carousel">
          <div className="hero-slide">
            <img className="absolute inset-0 w-full h-full object-cover" src={carrousel1} alt="Producción de contenido y campañas de marketing digital RevCardinal" />
            <div className="hero-overlay-l" />
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="display">
                  Performance, <span className="text-primary">comunidad</span> &amp; producción bajo un mismo techo.
                </h1>
                <p className="hero-desc">
                  Pauta, contenido y producción integrados. Medimos cada peso invertido y optimizamos con datos reales.
                </p>
              </div>
            </div>
            <div className="hero-logo-right">
              <img src={LogotipoCompletoBlanco} alt="RevCardinal" />
            </div>
          </div>

          <div className="hero-slide">
            <img className="absolute inset-0 w-full h-full object-cover" src={carrousel2} alt="Estrategia de performance y publicidad digital para marcas" />
            <div className="hero-overlay-m" />
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-title-lg">
                  Escala tu negocio con <span className="text-gradient-primary">estrategia y datos</span>
                </h2>
                <p className="hero-desc">
                  Conectamos marcas con audiencias reales. Publicidad, contenido y automatización comercial en un solo equipo.
                </p>
                <div className="hero-btns">
                  <a href={homeHash('contacto')} className="btn-primary px-8 py-4 rounded-lg font-label-md flex items-center justify-center gap-2">
                    Hablemos
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-slide">
            <img className="absolute inset-0 w-full h-full object-cover" src={carrousel3} alt="Equipo de agencia de marketing integrado RevCardinal" />
            <div className="hero-overlay-m" />
            <div className="hero-content">
              <div className="hero-text">
                <h2 className="hero-title-lg">
                  Decisiones basadas en <span className="text-gradient-primary">datos duros</span>
                </h2>
                <p className="hero-desc">
                  Convertimos métricas en acciones concretas. Lo que funciona se escala; lo que no, se corta.
                </p>
                <a href={homeHash('metodo')} className="btn-primary px-8 py-4 rounded-lg font-label-md mt-6 inline-flex items-center">
                  Ver metodología
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-dots">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`hero-dot ${i === activeSlide ? 'active' : 'inactive'}`}
            />
          ))}
        </div>
      </section>

      <div className="marquee-belt">
        <div className="belt-label">
          <span className="belt-label-accent">Marcas que confiaron</span>
          <span className="belt-label-sep">—</span>
          <span className="belt-label-desc">de concesionarios oficiales a hoteles, retail y e-commerce</span>
        </div>
        <div className="track-mask">
          <div className="marquee-track">
            {carouselLogos.map((logo, i) => (
              <img
                key={`a-${i}`}
                alt={logo.alt}
                src={logo.src}
                className={logo.size ? `marquee-logo--${logo.size}` : undefined}
              />
            ))}
            {carouselLogos.map((logo, i) => (
              <img
                key={`b-${i}`}
                alt={logo.alt}
                src={logo.src}
                className={logo.size ? `marquee-logo--${logo.size}` : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="proof-strip">
        <p className="proof-heading">Resultados de cuentas reales</p>
        <div className="proof-grid">
          <div className="proof-cell"><div className="proof-num">7,46<b>×</b></div><div className="proof-label">ROAS en campañas de performance</div></div>
          <div className="proof-cell"><div className="proof-num"><b>$</b>0,85</div><div className="proof-label">costo por conversación en campañas de leads</div></div>
          <div className="proof-cell"><div className="proof-num">295,1<b>K</b></div><div className="proof-label">visualizaciones organicas en el primer mes</div></div>
          <div className="proof-cell"><div className="proof-num">7 <b>países</b></div><div className="proof-label">Argentina, México, Chile, Perú, Panamá, Rep. Dominicana y EE.UU.</div></div>
        </div>
      </div>

      <section id="metodo" className="py-margin-desktop border-t border-line scroll-mt-24">
        <div className="text-center mb-margin-desktop space-y-4">
          <span className="eyebrow">Nuestro método</span>
          <h2 className="section-title">Performance medible.<br />Sin humo.</h2>
        </div>
        <p className="method-quote">
          Decisiones basadas en datos reales. No en{' '}
          <span className="no">especulaciones</span>, no en{' '}
          <span className="no">audios virales</span>, no en{' '}
          <span className="no">&quot;a mí me funcionó&quot;</span>.
        </p>
        <div className="steps">
          <div className="step">
            <div className="sn">01</div>
            <h3 className="card-title">Diagnóstico</h3>
            <p>Auditamos números, competencia y embudo completo. El plan se construye sobre lo que es, no sobre lo que queremos que sea.</p>
          </div>
          <div className="step">
            <div className="sn">02</div>
            <h3 className="card-title">Ejecución</h3>
            <p>Cada campaña, pieza y peso invertido tiene un objetivo asignado y una métrica que lo controla.</p>
          </div>
          <div className="step">
            <div className="sn">03</div>
            <h3 className="card-title">Resultados</h3>
            <p>Reportes con costo por lead, ROAS y ventas. Lo que funciona se escala; lo que no, se corta.</p>
          </div>
        </div>
      </section>

      <section id="mercado" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4">
          <span className="eyebrow">El mercado, hoy</span>
          <h2 className="section-title">Argentina ya compra distinto.<br />¿Tu marca vende distinto?</h2>
          <p className="section-subtitle">El consumo se mudó al canal digital. La pelea ya no es por estar — es por convertir.</p>
        </div>

        <div className="ar-band">
          <div className="ar-grid">
            <div className="ar-cell"><div className="ar-num red">+60%</div><div className="ar-text">creció la facturación del e-commerce argentino en 2025 — el doble que la inflación.</div></div>
            <div className="ar-cell"><div className="ar-num">18%</div><div className="ar-text">del retail argentino ya es online: casi el doble del promedio de Latinoamérica.</div></div>
            <div className="ar-cell"><div className="ar-num red">61%</div><div className="ar-text">de los nuevos compradores online son del interior del país.</div></div>
            <div className="ar-cell"><div className="ar-num">47%</div><div className="ar-text">de los argentinos ya compra en plataformas del exterior. Contra eso se compite con marca, no con precio.</div></div>
          </div>
          <p className="ar-note">Fuentes: CACE &amp; Kantar, Estudio Anual de Comercio Electrónico 2025.</p>
        </div>

        <div className="ar-conclusion">
          <p><strong>Traducción:</strong> la oportunidad es enorme, pero la mayoría invierte en pauta sin tener el circuito comercial preparado — y ahí se pierde la plata.</p>
        </div>
        <div className="mid-cta">
          <p>¿De qué lado de estos números está tu marca?</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa btn-wa-header">
            <WhatsAppIcon />
            Pedir diagnóstico gratis
          </a>
        </div>
      </section>

      <section id="embudo" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4">
          <span className="eyebrow">El problema real</span>
          <h2 className="section-title">Tu publicidad no está rota.<br />Tu embudo, sí.</h2>
          <p className="section-subtitle">Llega el lead y se muere en un WhatsApp sin responder. Nos metemos en todo el circuito, de la campaña al cierre.</p>
        </div>
        <div className="leak-grid">
          <div className="leak-col bad">
            <div className="leak-tt">Lo que suele pasar</div>
            <ul>
              <li>Se invierte en pauta sin saber la tasa de conversión propia</li>
              <li>Las consultas llegan a un WhatsApp que responde tarde o nunca</li>
              <li>Nadie hace seguimiento: el interesado compra en otro lado</li>
              <li>No hay registro: cada lead perdido es invisible</li>
              <li>Conclusión equivocada: &quot;la publicidad no funciona&quot;</li>
            </ul>
          </div>
          <div className="leak-col good">
            <div className="leak-tt">Lo que armamos nosotros</div>
            <ul>
              <li>Pauta con objetivos y costos medidos en cada canal</li>
              <li>WhatsApp automatizado: respuesta al instante, 24/7</li>
              <li>CRM y flujos de seguimiento: ningún lead queda huérfano</li>
              <li>Tablero con costo por lead, conversión y ventas</li>
              <li>Conclusión con datos: qué escalar, qué cortar, qué ajustar</li>
            </ul>
          </div>
        </div>
        <p className="ar-note" style={{ marginTop: 22 }}>PyMEs que automatizaron WhatsApp reportan +27% de ventas recurrentes y −40% de tiempo de atención (Meta).</p>
        <div className="mid-cta">
          <p>¿Cuántos leads perdiste este mes sin saberlo?</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa btn-wa-header">
            <WhatsAppIcon />
            Revisemos tu embudo
          </a>
        </div>
      </section>

      <section id="servicios" className="py-margin-desktop border-t border-line">
        <div className="svc-section-head">
          <h2 className="svc-section-title">¿Qué <span>hacemos?</span></h2>
          <p className="work-lead">Cubrimos tu departamento de marketing.</p>
          <p className="section-subtitle">Pauta, contenido, producción y desarrollo bajo un mismo equipo.</p>
        </div>

        <div className="svc-list">
          <div className="svc-list-item">
            <h3>Campañas publicitarias</h3>
            <p>Meta, Google, retail media y optimización continua. Cada peso con un objetivo y un número que lo controla.</p>
            <ServiciosPeekLink />
          </div>
          <div className="svc-list-item">
            <h3>Contenido y producción</h3>
            <p>Diseño, video y producción audiovisual in-house. El orgánico alineado con la pauta.</p>
            <ServiciosPeekLink />
          </div>
          <div className="svc-list-item">
            <h3>Desarrollo web</h3>
            <p>Sitios a medida, rápidos y orientados a convertir. Sin plantillas genéricas.</p>
            <ServiciosPeekLink />
          </div>
          <div className="svc-list-item">
            <h3>Consultoría &amp; performance</h3>
            <p>Diagnóstico, estrategia y acompañamiento comercial. Mirada externa basada en datos.</p>
            <ServiciosPeekLink />
          </div>
          <div className="svc-list-item">
            <h3>Community management</h3>
            <p>Estudiamos, planificamos y ejecutamos una estrategia orgánica paralela a la pasión que transmite tu producto o servicio.</p>
            <ServiciosPeekLink />
          </div>
        </div>
      </section>

      <section id="trabajo" className="work-section">
        <div className="work-header">
          <h2 className="work-title">Nuestro <span>trabajo</span></h2>
          <p className="work-lead">Planning, producción, diseño y resultados de campañas reales.</p>
        </div>
        <div className="work-gallery gallery-fullwidth grid grid-cols-2 md:grid-cols-4 gap-0 md:h-[520px] overflow-hidden">
          <div className="gallery-item">
            <span className="gallery-num">01</span>
            <img alt="Planning" src={impactoVisual1} />
            <div className="gallery-overlay" />
            <span className="gallery-label">Planning</span>
          </div>
          <div className="gallery-item">
            <span className="gallery-num">02</span>
            <img alt="Content Production" src={impactoVisual2} />
            <div className="gallery-overlay" />
            <span className="gallery-label">Content Production</span>
          </div>
          <div className="gallery-item">
            <span className="gallery-num">03</span>
            <img alt="Social Media Design" src={impactoVisual3} />
            <div className="gallery-overlay" />
            <span className="gallery-label">Social Media Design</span>
          </div>
          <div className="gallery-item">
            <span className="gallery-num">04</span>
            <img alt="Paid Media" src={impactoVisual4} />
            <div className="gallery-overlay" />
            <span className="gallery-label">Paid Media</span>
          </div>
        </div>
      </section>

      <section id="faq" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title">Lo que nos preguntan<br />antes de escribirnos</h2>
        </div>
        <div className="faq-list">
          {faqItems.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="big-cta scroll-mt-24"
        onMouseMove={(e) => setSpotlight(e, 'cta')}
        onMouseEnter={(e) => e.currentTarget.style.setProperty('--cta-glow', '1')}
        onMouseLeave={(e) => e.currentTarget.style.setProperty('--cta-glow', '0')}
      >
        <div className="wrap">
          <img className="logo-contacto" src={logoBlanco} alt="RevCardinal" />
          <h2 className="display">¿Hablamos de tu marca<br /><span className="red">con números en la mano?</span></h2>
          <p>Un mensaje. Te respondemos en el día con un diagnóstico honesto — gratis y sin compromiso.</p>
          <p className="big-cta-note">Somos boutique: tomamos un número limitado de cuentas por mes.</p>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-wa wa-big-btn">
            <WhatsAppIcon />
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainHome;
