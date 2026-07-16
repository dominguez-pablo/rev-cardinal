import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/mainhome.css';
import miniBerlin from '../img/miniBerlin.png';
import berlinMotors from '../img/berlinMotors.png';
import upwise from '../img/upwise.png';
import brod from '../img/brod.png';
import whatsAppImage from '../img/WhatsApp Image 2026-02-23 at 5.21.34 PM 3.png';
import untitled2_28 from '../img/Untitled-2 28.png';
import vand from '../img/vand.png';
import untitled1_15 from '../img/Untitled-1 15.png';
import untitled1_7 from '../img/Untitled-1 7.png';
import untitled1_6 from '../img/Untitled-1 6.png';
import untitled1_3 from '../img/Untitled-1 3.png';
import royalEnfield from '../img/royalEnfield.png';
import vincent from '../img/vincent.png';
import image118 from '../img/image 118.png';
import group288 from '../img/Group 288.png';
import group90 from '../img/Group 90.png';
import bmwMotorradLogo from '../img/bmw motorrad logo negative 4.png';
import LogotipoCompletoBlanco from '../img/Logotipo completo blanco.png';
import logoBlanco from '../img/Ícono Blanco fondo transparente.png';
import carrousel1 from '../img/carrousel1.png';
import carrousel2 from '../img/carrousel2.png';
import carrousel3 from '../img/carrousel3.png';
import impactoVisual1 from '../img/1planning.png';
import impactoVisual2 from '../img/2content_production.png';
import impactoVisual3 from '../img/3social_media_design.png';
import impactoVisual4 from '../img/4PaidMediaAds_results.png';
import resultadosMedibles from '../img/resultadosMedibles1.png';
import { homeHash } from '../constants/links';

const carouselImages = [
  miniBerlin,
  berlinMotors,
  upwise,
  brod,
  whatsAppImage,
  untitled2_28,
  vand,
  untitled1_15,
  untitled1_7,
  untitled1_6,
  untitled1_3,
  royalEnfield,
  vincent,
  image118,
  group288,
  group90,
  bmwMotorradLogo,
];

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="wa-svg">
    <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

const faqItems = [
  {
    question: '¿Cuánto cuesta trabajar con Rev Cardinal?',
    answer: 'Armamos planes a medida según tus objetivos y tu etapa: no vendemos paquetes enlatados. El diagnóstico inicial es gratis y sin compromiso, y cotizamos sobre trabajo medible — no sobre promesas.',
    highlight: 'gratis y sin compromiso',
  },
  {
    question: '¿Trabajan solo con empresas de Tucumán?',
    answer: 'No. Trabajamos con marcas de toda Argentina y del exterior (México, Chile, Perú, R. Dominicana y EE.UU.). Pauta, contenidos, automatización y comunidades se gestionan 100% remoto.',
  },
  {
    question: '¿En cuánto tiempo se ven resultados?',
    answer: 'La pauta genera datos desde la primera semana, pero la optimización seria lleva 60 a 90 días de iteración. Desconfiá de quien te promete magia en días.',
    highlight: '60 a 90 días',
  },
  {
    question: '¿Qué los diferencia de otra agencia?',
    answer: 'No gestionamos anuncios sueltos: armamos el circuito comercial completo — pauta + WhatsApp automatizado + CRM + reporting. Todo se mide con los números que importan.',
    highlight: 'circuito comercial completo',
  },
  {
    question: '¿Qué necesito para empezar?',
    answer: 'Un mensaje de WhatsApp. Te hacemos un diagnóstico honesto y gratuito de tu presencia digital. Si no podemos ayudarte, también te lo decimos.',
  },
];

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
    <details
      className="faq-item"
      onMouseMove={(e) => setSpotlight(e, 'faq')}
      onMouseEnter={(e) => e.currentTarget.style.setProperty('--faq-glow', '1')}
      onMouseLeave={(e) => e.currentTarget.style.setProperty('--faq-glow', '0')}
    >
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
    intervalRef.current = setInterval(goNext, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(goNext, 5000);
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
      intervalRef.current = setInterval(goNext, 5000);
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
            <img className="absolute inset-0 w-full h-full object-cover" src={carrousel1} alt="" />
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
            <img className="absolute inset-0 w-full h-full object-cover" src={carrousel2} alt="" />
            <div className="hero-overlay-m" />
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title-lg">
                  Escala tu negocio con <span className="text-gradient-primary">estrategia y datos</span>
                </h1>
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
            <img className="absolute inset-0 w-full h-full object-cover" src={carrousel3} alt="" />
            <div className="hero-overlay-m" />
            <div className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title-lg">
                  Decisiones basadas en <span className="text-gradient-primary">datos duros</span>
                </h1>
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
            {carouselImages.map((src, i) => (
              <img key={`a-${i}`} alt={`Logo ${i + 1}`} src={src} className={i % 3 === 1 ? 'tall' : ''} />
            ))}
            {carouselImages.map((src, i) => (
              <img key={`b-${i}`} alt={`Logo ${i + 1}`} src={src} className={i % 3 === 1 ? 'tall' : ''} />
            ))}
          </div>
        </div>
      </div>

      <div className="proof-strip">
        <p className="proof-heading">Resultados de cuentas reales</p>
        <div className="proof-grid">
          <div className="proof-cell"><div className="proof-num">7,46<b>×</b></div><div className="proof-label">ROAS en campañas full-funnel de performance</div></div>
          <div className="proof-cell"><div className="proof-num"><b>$</b>1,40</div><div className="proof-label">costo por conversación en campañas de leads</div></div>
          <div className="proof-cell"><div className="proof-num">120,5<b>K</b></div><div className="proof-label">visualizaciones en 30 días (+46% de crecimiento)</div></div>
          <div className="proof-cell"><div className="proof-num">6 <b>países</b></div><div className="proof-label">Argentina, México, Chile, Perú, R. Dominicana y EE.UU.</div></div>
        </div>
      </div>

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
          <a href={homeHash('contacto')} className="btn-wa btn-wa-header">
            {WA_ICON}
            Pedir diagnóstico gratis
          </a>
        </div>
      </section>

      <section id="embudo" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4">
          <span className="eyebrow">El problema real</span>
          <h2 className="section-title">Tu pauta no está rota.<br />Tu embudo, sí.</h2>
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
          <a href={homeHash('contacto')} className="btn-wa btn-wa-header">
            {WA_ICON}
            Revisemos tu embudo
          </a>
        </div>
      </section>

      <section id="servicios" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4">
          <h2 className="section-title">Qué hacemos</h2>
          <p className="section-subtitle">Pauta, contenido, producción y desarrollo bajo un mismo equipo.</p>
        </div>

        <div className="svc-list">
          <div className="svc-list-item">
            <h3>Campañas publicitarias</h3>
            <p>Meta, Google, retail media y optimización continua. Cada peso con un objetivo y un número que lo controla.</p>
            <Link to="/servicios" className="svc-list-link">
              Ver servicios <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="svc-list-item">
            <h3>Contenido y producción</h3>
            <p>Community management, diseño, video y producción audiovisual in-house. El orgánico alineado con la pauta.</p>
            <Link to="/servicios" className="svc-list-link">
              Ver servicios <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="svc-list-item">
            <h3>Desarrollo web</h3>
            <p>Sitios a medida, rápidos y orientados a convertir. Sin plantillas genéricas.</p>
            <Link to="/servicios" className="svc-list-link">
              Ver servicios <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="svc-list-item">
            <h3>Consultoría &amp; performance</h3>
            <p>Diagnóstico, estrategia y acompañamiento comercial. Mirada externa basada en datos.</p>
            <Link to="/servicios" className="svc-list-link">
              Ver servicios <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
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

      <section id="nuestra-historia" className="history-section scroll-mt-24">
        <div className="history-header">
          <h2 className="history-title">Nuestra <span>historia</span></h2>
          <p className="history-lead">El equipo y la visión detrás de RevCardinal.</p>
        </div>
        <div className="history-grid">
          <div className="history-text">
            <h3 className="history-heading">
              Desde 2019, transformando ideas en <span className="text-gradient-primary">resultados medibles</span>
            </h3>
            <p className="history-body">
              RevCardinal nació con una misión clara: llevar estrategias de marketing digital de alto rendimiento a empresas de todos los tamaños. Hoy colaboramos con marcas de más de 10 industrias en 6 países.
            </p>
            <p className="history-body">
              Combinamos análisis de datos, creatividad y ejecución precisa. Medimos cada decisión con KPIs claros y trabajamos en relaciones a largo plazo.
            </p>
            <div className="history-stats">
              <div className="history-stat">
                <span className="history-stat-num">+5</span>
                <p className="history-stat-label">Años de experiencia</p>
              </div>
              <div className="history-stat">
                <span className="history-stat-num">6</span>
                <p className="history-stat-label">Países con clientes activos</p>
              </div>
              <div className="history-stat">
                <span className="history-stat-num">15</span>
                <p className="history-stat-label">Personas en el equipo</p>
              </div>
            </div>
          </div>
          <div className="history-visual">
            <div className="history-img-box">
              <img src={resultadosMedibles} alt="Resultados medibles" />
            </div>
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
          <a href={homeHash('contacto')} className="btn-wa wa-big-btn">
            {WA_ICON}
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainHome;
