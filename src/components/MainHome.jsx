import React, { useRef, useEffect, useState } from 'react';
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
import cardenalVideo from '../videos/drift.mp4';
import estadisticaVideo from '../videos/estadistica.mp4';
import marketingVideo from '../videos/marketing.mp4';
import LogotipoCompletoBlanco from '../img/Logotipo completo blanco.png';

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
    <main className="pt-20 pb-margin-desktop px-gutter-desktop max-w-[max-width] mx-auto space-y-margin-desktop">
      {/* Hero Carousel Section */}
      <section
        className="section-fullwidth relative h-[600px] md:h-[700px] overflow-hidden mt-margin-desktop"
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
        data-aos="fade-in"
      >
        <div ref={carouselRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory h-full hide-scrollbar scroll-smooth w-full" id="hero-carousel">
          {/* Slide 1 - Video RevCardinal */}
          <div className="min-w-full h-full snap-center relative bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={cardenalVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/30 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 flex items-center p-gutter-desktop md:p-margin-desktop">
              <div className="space-y-6 max-w-2xl">
                <img src={LogotipoCompletoBlanco} alt="RevCardinal" className="w-80 md:w-[28rem] drop-shadow-[0_0_40px_rgba(255,255,255,0.15)]" />
                <h1 className="display text-[clamp(2rem,5vw,3.5rem)] md:text-[clamp(3rem,8vw,5rem)] text-white drop-shadow-lg">
                  Performance, <span className="text-primary">comunidad</span> & producción bajo un mismo techo.
                </h1>
                <p className="text-base md:text-lg text-white/75 max-w-xl font-medium leading-relaxed">
                  Estrategia digital con precisión quirúrgica. Datos, creatividad y ejecución para llevar tu marca al siguiente nivel.
                </p>
              </div>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className="min-w-full h-full snap-center relative bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={marketingVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-gutter-desktop md:p-margin-desktop">
              <div className="max-w-2xl space-y-5">
                <h1 className="hero-title-lg">
                  Escala el alcance de tu negocio con <span className="text-gradient-primary">precisión estratégica</span>
                </h1>
                <p className="hero-desc max-w-xl">
                  Somos tus socios estratégicos en publicidad y marketing digital, conectando marcas con audiencias reales mediante datos e innovación.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <button className="btn-primary px-8 py-4 rounded-lg font-label-md flex items-center justify-center gap-2">
                    Escala tu Negocio
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <button className="btn-secondary px-8 py-4 rounded-lg font-label-md flex items-center justify-center gap-2 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                    WhatsApp 
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide 3 */}
          <div className="min-w-full h-full snap-center relative bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={estadisticaVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-gutter-desktop md:p-margin-desktop">
              <div className="max-w-2xl space-y-5">
                <h1 className="hero-title-lg">
                  Decisiones basadas en <span className="text-gradient-primary">datos duros</span>
                </h1>
                <p className="hero-desc max-w-xl">
                  Transformamos la complejidad de los datos en estrategias claras y rentables para el crecimiento continuo.
                </p>
                <button className="btn-primary px-8 py-4 rounded-lg font-label-md mt-6">Explorar Metodología</button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer border-0 outline-none ${
                i === activeSlide ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <div className="marquee-belt">
        <div className="belt-label" data-aos="fade-up">
          Marcas que confiaron — <b style={{color:'var(--bone)', fontWeight:500}}>de concesionarios oficiales a hoteles, retail y e-commerce</b>
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

      {/* Proof Strip */}
      <div className="proof-strip">
        <div className="proof-tag">// Resultados de cuentas reales — no proyecciones</div>
        <div className="proof-grid">
          <div className="proof-cell"><div className="proof-num">7,46<b>×</b></div><div className="proof-label">ROAS en campañas full-funnel de performance</div></div>
          <div className="proof-cell"><div className="proof-num"><b>$</b>1,40</div><div className="proof-label">costo por conversación en campañas de leads</div></div>
          <div className="proof-cell"><div className="proof-num">120,5<b>K</b></div><div className="proof-label">visualizaciones en 30 días (+46% de crecimiento)</div></div>
          <div className="proof-cell"><div className="proof-num">6 <b>países</b></div><div className="proof-label">Argentina, México, Chile, Perú, R. Dominicana y EE.UU.</div></div>
        </div>
      </div>

      {/* Argentina Market Data */}
      <section id="mercado" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4" data-aos="fade-up">
          <span className="eyebrow">El mercado, hoy</span>
          <h2 className="section-title">Argentina ya compra<br/>distinto. ¿Tu marca<br/>vende distinto?</h2>
          <p className="section-subtitle" style={{maxWidth:760}}>No es una opinión: es lo que dicen los números del mercado argentino. El consumo se mudó al canal digital, y la pelea ya no es por estar — es por convertir.</p>
        </div>

        <div className="ar-grid" data-aos="fade-up">
          <div className="ar-cell"><div className="ar-num red">+60%</div><div className="ar-text">creció la facturación del e-commerce argentino en 2025 — el doble que la inflación. El consumo presencial, en cambio, sigue cayendo.</div></div>
          <div className="ar-cell"><div className="ar-num">18%</div><div className="ar-text">del retail argentino ya es online: casi el doble del promedio de Latinoamérica. El que no convierte online, regala mercado.</div></div>
          <div className="ar-cell"><div className="ar-num red">61%</div><div className="ar-text">de los nuevos compradores online son del interior del país. El crecimiento ya no pasa solo por Buenos Aires: pasa por acá.</div></div>
          <div className="ar-cell"><div className="ar-num">47%</div><div className="ar-text">de los argentinos ya compra en plataformas del exterior (Temu, Shein). Contra el precio chino no se compite con precio: se compite con marca y comunidad.</div></div>
        </div>
        <p className="ar-note">// Fuentes: CACE &amp; Kantar, Estudio Anual de Comercio Electrónico 2025.</p>

        <div className="ar-conclusion" data-aos="fade-up">
          <p><strong>Traducción:</strong> la oportunidad es enorme y la ventana está abierta. Pero la mayoría de las marcas invierte en pauta sin tener el circuito comercial preparado — y ahí es donde se pierde la plata.</p>
        </div>
        <div className="mid-cta" data-aos="fade-up">
          <p>¿De qué lado de estos números está tu marca?</p>
          <a href="#" className="btn-wa-header" style={{fontSize:15,padding:'13px 24px'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="wa-svg"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
            Pedir diagnóstico gratis
          </a>
        </div>
      </section>

      {/* El Embudo Roto */}
      <section id="embudo" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4" data-aos="fade-up">
          <span className="eyebrow">El problema real</span>
          <h2 className="section-title">Tu pauta no está rota.<br/>Tu embudo, sí.</h2>
          <p className="section-subtitle" style={{maxWidth:760}}>La mayoría de las PyMEs no sabe cuántas de sus consultas terminan en venta. Llega el lead… y se muere en un WhatsApp sin responder. Nosotros no "gestionamos anuncios": nos metemos en todo el circuito, de la campaña al cierre.</p>
        </div>
        <div className="leak-grid">
          <div className="leak-col bad" data-aos="fade-up">
            <div className="leak-tt">Lo que suele pasar</div>
            <ul>
              <li>Se invierte en pauta sin saber la tasa de conversión propia</li>
              <li>Las consultas llegan a un WhatsApp que responde tarde o nunca</li>
              <li>Nadie hace seguimiento: el interesado compra en otro lado</li>
              <li>No hay registro: cada lead perdido es invisible</li>
              <li>Conclusión equivocada: "la publicidad no funciona"</li>
            </ul>
          </div>
          <div className="leak-col good" data-aos="fade-up">
            <div className="leak-tt">Lo que armamos nosotros</div>
            <ul>
              <li>Pauta con objetivos y costos medidos en cada canal</li>
              <li>WhatsApp automatizado: respuesta al instante, 24/7</li>
              <li>CRM y flujos de seguimiento: ningún lead queda huérfano</li>
              <li>Tablero con los números que importan: costo por lead, conversión, ventas</li>
              <li>Conclusión con datos: qué escalar, qué cortar, qué ajustar</li>
            </ul>
          </div>
        </div>
        <p className="ar-note" style={{marginTop:22}}>// Las PyMEs que automatizaron su comunicación por WhatsApp reportan en promedio +27% de ventas recurrentes y −40% de tiempo de atención (Meta).</p>
        <div className="mid-cta" data-aos="fade-up">
          <p>¿Cuántos leads perdiste este mes sin saberlo?</p>
          <a href="#" className="btn-wa-header" style={{fontSize:15,padding:'13px 24px'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="wa-svg"><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
            Revisemos tu embudo
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-margin-desktop">
        <div className="text-center mb-margin-desktop space-y-4" data-aos="fade-up">
          <h2 className="section-title">Arquitectura de <span className="text-primary">Crecimiento</span></h2>
          <p className="section-subtitle">Soluciones integrales diseñadas para maximizar el retorno de inversión.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-panel p-8 rounded-xl border border-line card-hover group" data-aos="fade-up" data-aos-delay="100">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
            </div>
            <h3 className="card-title mb-4">Diseño Web</h3>
            <p className="card-text mb-6">Interfaces de alta conversión, minimalistas y optimizadas para rendimiento extremo.</p>
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 text-[#25D366] font-label-md hover:underline">
                <span className="material-symbols-outlined text-sm">chat</span> WhatsApp
              </button>
              <div className="flex items-center text-primary font-label-md group-hover:translate-x-1 transition-transform cursor-pointer">
                Explorar <span className="material-symbols-outlined ml-2 text-sm">arrow_right_alt</span>
              </div>
            </div>
          </div>

          {/* Featured Card */}
          <div className="bg-panel p-8 rounded-xl border border-line md:col-span-2 relative overflow-hidden card-hover group" data-aos="fade-up" data-aos-delay="200">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                
                <h3 className="card-title mb-4">Campañas Publicitarias</h3>
                <p className="card-text mb-8">Tráfico dirigido mediante algoritmos precisos. Maximizamos el ROI en plataformas clave.</p>
                <div className="flex gap-4 flex-wrap">
                  <button className="btn-primary px-6 py-2 rounded-lg font-label-md">Iniciar Campaña</button>
                  <button className="btn-secondary px-6 py-2 rounded-lg font-label-md border-[#25D366]/40 text-[#25D366]">Consulta WhatsApp</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-40 rounded-lg bg-black/30 border border-line p-4 relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-white/50 uppercase tracking-wider font-semibold">CPA Optimizado</span>
                  <span className="text-primary font-bold">-$12.40</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path d="M0,40 L20,30 L40,35 L60,10 L80,20 L100,5" fill="none" stroke="#ff1f1f" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Row Card */}
          <div className="bg-panel p-8 rounded-xl border border-line md:col-span-3 flex flex-col md:flex-row items-center justify-between card-hover" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <div>
                <h3 className="card-title mb-1">Estrategia Digital</h3>
                <p className="card-text max-w-xl">Hojas de ruta personalizadas basadas en auditorías profundas.</p>
                <button className="mt-2 text-[#25D366] font-label-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">chat</span> Contactar experto
                </button>
              </div>
            </div>
            <button className="btn-secondary px-8 py-3 rounded-lg font-label-md">Solicitar Auditoría</button>
          </div>
        </div>
      </section>

      {/* Visual Impact Bento Gallery */}
      <section className="py-margin-desktop">
        <div className="text-center mb-margin-desktop space-y-4" data-aos="fade-up">
          <h2 className="section-title">Impacto <span className="text-primary">Visual</span></h2>
          <p className="section-subtitle">Explora nuestro trabajo a través de una lente de alta tecnología.</p>
        </div>
        <div className="gallery-fullwidth grid grid-cols-2 md:grid-cols-4 gap-0 md:h-[500px] overflow-hidden border-y border-line">
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="100">
            <img alt="Tour" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZEu3mLT9jU5-5NUOAoVqZl2hVoXE9y-QIu9YdQ8ZNG_0-jFRSCfv7vYqAW0YH8z5-IT4q977Uw5qWw2oF08AUWRBK0hMAj_cnDwgK0X5OhUh2AEcWLT1BIxuBYcp0c7rWD2530drfqBrMl-5EDm1SJkPlMcGfqs4PyJrtSFLokkAmdJdLPahkaYR5U4rN2-T2LlEGi0L2mgEQcrHRJoqygyngTZLMamesJfK6IE62-oiEWYVfjUl2Rz57h024Pyad26Jqs-37FREY" />
            <div className="gallery-overlay"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="gallery-play-btn">
                <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
              </div>
            </div>
            <span className="gallery-label-tag">Tour Virtual</span>
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="150">
            <img alt="Design" src="https://lh3.googleusercontent.com/aida/AP1WRLtqtmuxkUeS-HphtxcuNaph3poDWcuvsZVKdEkodNSxCVzCd6mtsSpvqIKbsz6ptiPT6_WbyrVgA1BM7RRX5TjOodOJr9QK2wETcfQwm-UBc9qxq45TkfjLHO0saUUS4oD2chfh1t7D5fB-vriC8C-CBzmztdFtfczb7mpBvYLKW41TXb2LX2GwTXR5bDSFVpQsxQtVo7pGTNB_2XG3td-60UUyAVyzOHLC2lQZ3xh_EWMs81s9HUcIGGc" />
            <div className="gallery-overlay"></div>
            <span className="gallery-label">Diseño Estratégico</span>
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
            <img alt="Mapping" src="https://lh3.googleusercontent.com/aida/AP1WRLu_MAD0BrE2DC5TKAasDH7-Sxazsp14wYC88D4rmdL56MbxUczWA3nQUXtZClpZM3LEcd4JWgw_teEzb4CpfFgBp6x1b02vh2B-wjo0gNBPkzlPV9uB-Y8k3S0_Kh0FMZhnjlwF4woUkD8-P9-R94AEnr1asaRBYLbURP5p8EURqfh20Bo-DHBuBKT7zByu2m8NbLnjSApTsultPv7NcjbW1xaMn9C8xlE3KvJslwDNl4F7MJHKI6jamHb9" />
            <div className="gallery-overlay"></div>
            <span className="gallery-label">Mapping</span>
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="250">
            <img alt="Conversion" src="https://lh3.googleusercontent.com/aida/AP1WRLuZbgjZ19fwGaqPwCxuRYckSejsiKzSK6Jge4AkwW9JkgKoGQ1ofl7yvdC_E4mGUDh9Mp2X3JwHqrvmClN1E8Iw521loFKY_jLCEYYW-Co-hg281HrCmRaCrLczz0HfG5TYScZWohFignoR2LCAxfSGES0r1BtC9EiQDWjHNYAX7U85h3YtlOeXTCjKyfpwV_qTAvWRhAIlz_cDO58LlP034h5b5fywrAGaaDmMn4dMuhhr93syqqokqgo0" />
            <div className="gallery-overlay"></div>
            <span className="gallery-label">Conversion</span>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-margin-desktop border-t border-line">
        <h2 className="section-title text-center mb-16" data-aos="fade-up">Metodología <span className="text-primary">Cardinal</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container p-8 rounded-xl border border-line text-center group hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="100">
            <div className="method-number">1</div>
            <h4 className="method-title">Análisis</h4>
            <p className="method-text">Auditoría profunda del mercado y competencia para identificar brechas.</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-line text-center group hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="200">
            <div className="method-number">2</div>
            <h4 className="method-title">Estrategia</h4>
            <p className="method-text">Diseño de una hoja de ruta táctica omnicanal con KPIs definidos.</p>
          </div>
          <div className="bg-surface-container p-8 rounded-xl border border-line text-center group hover:border-primary/30 transition-colors" data-aos="fade-up" data-aos-delay="300">
            <div className="method-number">3</div>
            <h4 className="method-title">Ejecución</h4>
            <p className="method-text">Optimización en tiempo real basada en datos para escalar resultados.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 rounded-2xl bg-gradient-to-br from-panel to-ink relative overflow-hidden flex flex-col items-center text-center px-6" data-aos="fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_50%_0%,rgba(237,28,36,0.14),transparent_60%)]"></div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="section-title">¿Listo para dominar tu mercado?</h2>
          <p className="section-subtitle">Agenda una sesión estratégica gratuita de 30 minutos. Analizaremos tu situación actual y te daremos 3 acciones inmediatas.</p>
          <div className="pt-6">
            <button className="bg-[#25D366] text-white px-10 py-5 rounded-lg font-label-md text-lg flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-all shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)]">
              Contactar por WhatsApp
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section id="nuestra-historia" className="py-margin-desktop border-t border-line scroll-mt-24">
        <div className="text-center mb-margin-desktop space-y-4" data-aos="fade-up">
          <h2 className="section-title">Nuestra <span className="text-primary">Historia</span></h2>
          <p className="section-subtitle">Conocé el equipo y la visión detrás de RevCardinal.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-margin-desktop items-center">
          <div className="space-y-6" data-aos="fade-right">
            <h3 className="card-title">
              Más de 5 años transformando ideas en <span className="text-gradient-primary">resultados medibles</span>
            </h3>
            <p className="card-text">
              RevCardinal nació en 2019 con una misión clara: democratizar el acceso a estrategias de marketing digital de alto rendimiento para empresas de todos los tamaños. Lo que comenzó como un equipo de dos personas en un pequeño coworking, hoy es una agencia consolidada que colabora con marcas líderes en más de 10 industrias.
            </p>
            <p className="card-text">
              Nuestra metodología combina análisis de datos avanzado, creatividad táctica y ejecución precisa. Creemos en las relaciones a largo plazo, en medir cada decisión con KPIs claros y en nunca dejar de iterar. Cada cliente es un socio, cada campaña una oportunidad de superar los límites.
            </p>
            <div className="flex gap-8 pt-4">
              <div>
                <span className="stat-number">+200</span>
                <p className="stat-label">Clientes satisfechos</p>
              </div>
              <div>
                <span className="stat-number">+50</span>
                <p className="stat-label">Proyectos entregados</p>
              </div>
              <div>
                <span className="stat-number">15</span>
                <p className="stat-label">Expertos en el equipo</p>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="relative rounded-xl overflow-hidden border border-line aspect-[4/3]">
              <div className="absolute inset-0 bg-panel flex items-center justify-center">
                <span className="material-symbols-outlined text-6xl text-on-surface-variant/30">groups</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-surface-container-high border border-line rounded-xl p-4 shadow-lg hidden md:block" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">trending_up</span>
                </div>
                <div>
                  <p className="text-sm text-white/50 font-medium">Crecimiento promedio</p>
                  <p className="stat-number">+340% ROAS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-margin-desktop border-t border-line">
        <div className="text-center mb-margin-desktop space-y-4" data-aos="fade-up">
          <span className="eyebrow">Preguntas frecuentes</span>
          <h2 className="section-title">Lo que nos preguntan<br/>antes de escribirnos.</h2>
        </div>
        <details className="faq-item reveal" data-aos="fade-up">
          <summary>¿Cuánto cuesta trabajar con Rev Cardinal?</summary>
          <div className="faq-answer">Armamos planes a medida según tus objetivos y tu etapa: no vendemos paquetes enlatados. El diagnóstico inicial es <strong>gratis y sin compromiso</strong>, y cotizamos sobre trabajo medible — no sobre promesas.</div>
        </details>
        <details className="faq-item reveal" data-aos="fade-up">
          <summary>¿Trabajan solo con empresas de Tucumán?</summary>
          <div className="faq-answer">No. Trabajamos con marcas de toda Argentina y del exterior (México, Chile, Perú, R. Dominicana y EE.UU.). Pauta, contenidos, automatización y comunidades se gestionan 100% remoto.</div>
        </details>
        <details className="faq-item reveal" data-aos="fade-up">
          <summary>¿En cuánto tiempo se ven resultados?</summary>
          <div className="faq-answer">La pauta genera datos desde la primera semana, pero la optimización seria lleva <strong>60 a 90 días</strong> de iteración. Desconfiá de quien te promete magia en días.</div>
        </details>
        <details className="faq-item reveal" data-aos="fade-up">
          <summary>¿Qué los diferencia de otra agencia?</summary>
          <div className="faq-answer">No gestionamos anuncios sueltos: armamos el <strong>circuito comercial completo</strong> — pauta + WhatsApp automatizado + CRM + reporting. Todo se mide con los números que importan.</div>
        </details>
        <details className="faq-item reveal" data-aos="fade-up">
          <summary>¿Qué necesito para empezar?</summary>
          <div className="faq-answer">Un mensaje de WhatsApp. Te hacemos un diagnóstico honesto y gratuito de tu presencia digital. Si no podemos ayudarte, también te lo decimos.</div>
        </details>
      </section>

      {/* Big CTA */}
      <section id="contacto" className="big-cta scroll-mt-24">
        <div className="wrap reveal" data-aos="fade-up">
          <svg className="bird-mark" viewBox="0 0 100 100" aria-hidden="true"><path d="M14 62 L34 40 L30 22 L46 36 L52 18 L60 36 L84 30 L66 48 L88 56 L62 58 L70 78 L48 62 L26 74 L38 56 Z" fill="#ed1c24"/><circle cx="55" cy="46" r="4" fill="#0a0a0c"/></svg>
          <h2 className="display">¿Hablamos de tu marca<br/><span className="red">con números en la mano?</span></h2>
          <p>Un mensaje. Te respondemos en el día con un diagnóstico honesto — gratis y sin compromiso. Si no podemos ayudarte, también te lo decimos.</p>
          <p style={{fontFamily:'JetBrains Mono',fontSize:12,color:'#5e5e6a',marginTop:14,letterSpacing:'.06em'}}>// Somos boutique: tomamos un número limitado de cuentas por mes para no bajar la calidad.</p>
          <a href="#" className="btn btn-wa wa-big-btn" style={{display:'inline-flex',alignItems:'center',gap:10}}>
            <svg viewBox="0 0 24 24" fill="currentColor" style={{width:24,height:24}}><path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z"/></svg>
            Escribinos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
};

export default MainHome;