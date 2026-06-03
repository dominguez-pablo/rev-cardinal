import React, { useRef, useEffect, useState } from 'react';
import '../css/mainhome.css';

const MainHome = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 2;

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

  return (
    <main className="pt-20 pb-margin-desktop px-gutter-desktop max-w-[1440px] mx-auto space-y-margin-desktop">
      {/* Hero Carousel Section */}
      <section
        className="relative h-[600px] md:h-[700px] rounded-xl overflow-hidden mt-margin-desktop border border-white/10"
        onMouseEnter={pauseAutoScroll}
        onMouseLeave={resumeAutoScroll}
      >
        <div ref={carouselRef} onScroll={handleScroll} className="flex overflow-x-auto snap-x snap-mandatory h-full hide-scrollbar scroll-smooth w-full" id="hero-carousel">
          {/* Slide 1 */}
          <div className="min-w-full h-full snap-center relative">
            <img alt="Modern office" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzK2zF1o72s5cTn4TB6snhqvxrotBJcTKMtGjN47Y0k8-HhweO64oBrupXrXORHSMaLVhQcZok8HFlKET2JMCIN96UhCs6QP9ndJgs2xt98xwPEpwwxdmGBFtQqNdPvBIA4LLh2G_WAIMj09gZUooHJi0vfXOZ1a1J8oygQe-3mhjH-G0oYHGoUgfoCLqntOONelcKA6OX_7EDTG0wIbGwMxCrowqnsHwuJg1H0dZld1cEHPYJ_PtObqFs4Zd6ryyqPJ2-TGpq0hxz" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-gutter-desktop md:p-margin-desktop">
              <div className="max-w-2xl space-y-4">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-variant/50 border border-white/10 font-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                  Agencia de Alto Rendimiento
                </div>
                <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface">
                  Escala el alcance de tu negocio con <span className="text-gradient-primary">precisión estratégica</span>
                </h1>
                <p className="font-body-md text-body-lg text-on-surface-variant max-w-xl">
                  Somos tus socios estratégicos en publicidad y marketing digital, conectando marcas con audiencias reales mediante datos e innovación.
                </p>
                <div className="pt-6 flex flex-wrap gap-4">
                  <button className="btn-primary px-8 py-4 rounded-lg font-label-md flex items-center justify-center gap-2">
                    Escala tu Negocio
                    <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                  </button>
                  <button className="btn-secondary px-8 py-4 rounded-lg font-label-md flex items-center justify-center gap-2 border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all">
                    WhatsApp 
                    <span className="material-symbols-outlined text-[20px]">chat</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Slide 2 */}
          <div className="min-w-full h-full snap-center relative">
            <img alt="Data visualization" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0WsB9Cr0exduOZ639LmSRq-JbMnOL6RT5ysZVWOdPLaLyrWcqtin9L01te9Aw1kKAqjdjCXeQrX1N6CXUwTYPMJ9WWKt-K__Iz1kiH9DjR_k3PAoDA0OO38vA5p5Vu59tUFuDcuYjk6sP0D7gS2tPejqUGyLe-khktTy-JyETdsFqH2nKMxyPgJrNsgN5f8GiBf9Q4_9SBTkOBsUCP6DUN38jqNz6HfRiNSkWb7XTtc69D3-5vIahePDjBEvx04StsBJ4dSXpg2Dv" />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
            <div className="absolute inset-0 flex items-center p-gutter-desktop md:p-margin-desktop">
              <div className="max-w-2xl space-y-4">
                <h1 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl text-on-surface">
                  Decisiones basadas en <span className="text-gradient-primary">datos duros</span>
                </h1>
                <p className="font-body-md text-body-lg text-on-surface-variant max-w-xl">
                  Transformamos la complejidad de los datos en estrategias claras y rentables para el crecimiento continuo.
                </p>
                <button className="btn-primary px-8 py-4 rounded-lg font-label-md mt-6">Explorar Metodología</button>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores de slide */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <div
              key={i}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === activeSlide ? 'bg-primary scale-125' : 'bg-white/20'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-margin-desktop border-b border-white/10">
        <div className="text-center mb-10">
          <h3 className="font-label-sm text-on-surface-variant uppercase tracking-widest opacity-80">Empresas que confían en nosotros</h3>
        </div>
        <div className="marquee-container">
          <div className="marquee-track">
            {/* Set original */}
            <img alt="Aether" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Vanguard" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Lumina" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Nexure" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Orizon" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            {/* Set duplicado para loop infinito */}
            <img alt="Aether" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Vanguard" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Lumina" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Nexure" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
            <img alt="Orizon" className="h-8 md:h-10 w-auto object-contain opacity-60 grayscale brightness-150" src="data:image/png;base64,..." />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-margin-desktop">
        <div className="text-center mb-margin-desktop space-y-3">
          <h2 className="font-headline-lg text-on-surface">Arquitectura de Crecimiento</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Soluciones integrales diseñadas para maximizar el retorno de inversión.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-variant/30 p-8 rounded-xl border border-white/10 card-hover group">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-8 border border-primary/20">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>web</span>
            </div>
            <h3 className="font-headline-md text-on-surface mb-4">Diseño Web</h3>
            <p className="font-body-md text-on-surface-variant mb-6">Interfaces de alta conversión, minimalistas y optimizadas para rendimiento extremo.</p>
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
          <div className="bg-surface-variant/30 p-8 rounded-xl border border-white/10 md:col-span-2 relative overflow-hidden card-hover group">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center px-2 py-1 rounded bg-primary/20 text-primary font-label-caps mb-4">Alto Impacto</div>
                <h3 className="font-headline-md text-on-surface mb-4">Campañas Publicitarias</h3>
                <p className="font-body-md text-on-surface-variant mb-8">Tráfico dirigido mediante algoritmos precisos. Maximizamos el ROI en plataformas clave.</p>
                <div className="flex gap-4 flex-wrap">
                  <button className="btn-primary px-6 py-2 rounded-lg font-label-md">Iniciar Campaña</button>
                  <button className="btn-secondary px-6 py-2 rounded-lg font-label-md border-[#25D366]/40 text-[#25D366]">Consulta WhatsApp</button>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-40 rounded-lg bg-black/30 border border-white/10 p-4 relative">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs text-on-surface-variant uppercase tracking-wider">CPA Optimizado</span>
                  <span className="text-primary font-bold">-$12.40</span>
                </div>
                <svg className="w-full h-full" viewBox="0 0 100 40">
                  <path d="M0,40 L20,30 L40,35 L60,10 L80,20 L100,5" fill="none" stroke="#ff1f1f" strokeWidth="2"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Row Card */}
          <div className="bg-surface-variant/30 p-8 rounded-xl border border-white/10 md:col-span-3 flex flex-col md:flex-row items-center justify-between card-hover">
            <div className="flex items-center gap-6 mb-6 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0">
                <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>architecture</span>
              </div>
              <div>
                <h3 className="font-headline-md text-on-surface mb-1">Estrategia Digital</h3>
                <p className="font-body-md text-on-surface-variant max-w-xl">Hojas de ruta personalizadas basadas en auditorías profundas.</p>
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
        <div className="text-center mb-margin-desktop space-y-3">
          <h2 className="font-headline-lg text-on-surface">Impacto Visual</h2>
          <p className="font-body-md text-on-surface-variant max-w-2xl mx-auto">Explora nuestro trabajo a través de lentes de alta tecnología.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 md:h-[600px]">
          <div className="relative overflow-hidden rounded-xl border border-white/10 group md:col-span-2 md:row-span-2 h-64 md:h-auto">
            <img alt="Tour" className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZEu3mLT9jU5-5NUOAoVqZl2hVoXE9y-QIu9YdQ8ZNG_0-jFRSCfv7vYqAW0YH8z5-IT4q977Uw5qWw2oF08AUWRBK0hMAj_cnDwgK0X5OhUh2AEcWLT1BIxuBYcp0c7rWD2530drfqBrMl-5EDm1SJkPlMcGfqs4PyJrtSFLokkAmdJdLPahkaYR5U4rN2-T2LlEGi0L2mgEQcrHRJoqygyngTZLMamesJfK6IE62-oiEWYVfjUl2Rz57h024Pyad26Jqs-37FREY" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-3xl">play_arrow</span>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 font-label-caps text-white bg-primary px-2 py-1">Tour Virtual</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 group md:col-span-2 h-48 md:h-auto">
            <img alt="Design" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLtqtmuxkUeS-HphtxcuNaph3poDWcuvsZVKdEkodNSxCVzCd6mtsSpvqIKbsz6ptiPT6_WbyrVgA1BM7RRX5TjOodOJr9QK2wETcfQwm-UBc9qxq45TkfjLHO0saUUS4oD2chfh1t7D5fB-vriC8C-CBzmztdFtfczb7mpBvYLKW41TXb2LX2GwTXR5bDSFVpQsxQtVo7pGTNB_2XG3td-60UUyAVyzOHLC2lQZ3xh_EWMs81s9HUcIGGc" />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 text-white font-label-md">Diseño Estratégico</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 group h-48 md:h-auto">
            <img alt="Mapping" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLu_MAD0BrE2DC5TKAasDH7-Sxazsp14wYC88D4rmdL56MbxUczWA3nQUXtZClpZM3LEcd4JWgw_teEzb4CpfFgBp6x1b02vh2B-wjo0gNBPkzlPV9uB-Y8k3S0_Kh0FMZhnjlwF4woUkD8-P9-R94AEnr1asaRBYLbURP5p8EURqfh20Bo-DHBuBKT7zByu2m8NbLnjSApTsultPv7NcjbW1xaMn9C8xlE3KvJslwDNl4F7MJHKI6jamHb9" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-4 left-4 text-white font-label-sm">Mapping</div>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-white/10 group h-48 md:h-auto">
            <img alt="Conversion" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLuZbgjZ19fwGaqPwCxuRYckSejsiKzSK6Jge4AkwW9JkgKoGQ1ofl7yvdC_E4mGUDh9Mp2X3JwHqrvmClN1E8Iw521loFKY_jLCEYYW-Co-hg281HrCmRaCrLczz0HfG5TYScZWohFignoR2LCAxfSGES0r1BtC9EiQDWjHNYAX7U85h3YtlOeXTCjKyfpwV_qTAvWRhAIlz_cDO58LlP034h5b5fywrAGaaDmMn4dMuhhr93syqqokqgo0" />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-4 left-4 text-white font-label-sm">Conversion</div>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-margin-desktop border-t border-white/10">
        <h2 className="font-headline-lg text-center text-on-surface mb-16">Metodología <span className="text-primary">Cardinal</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-variant/20 p-8 rounded-xl border border-white/10 text-center group hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center font-headline-md text-primary mb-6 border border-primary/20 group-hover:scale-110 transition-transform">1</div>
            <h4 className="font-headline-md text-on-surface mb-3">Análisis</h4>
            <p className="font-body-md text-on-surface-variant">Auditoría profunda del mercado y competencia para identificar brechas.</p>
          </div>
          <div className="bg-surface-variant/20 p-8 rounded-xl border border-white/10 text-center group hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center font-headline-md text-primary mb-6 border border-primary/20 group-hover:scale-110 transition-transform">2</div>
            <h4 className="font-headline-md text-on-surface mb-3">Estrategia</h4>
            <p className="font-body-md text-on-surface-variant">Diseño de una hoja de ruta táctica omnicanal con KPIs definidos.</p>
          </div>
          <div className="bg-surface-variant/20 p-8 rounded-xl border border-white/10 text-center group hover:border-primary/30 transition-colors">
            <div className="w-14 h-14 mx-auto bg-primary/10 rounded-full flex items-center justify-center font-headline-md text-primary mb-6 border border-primary/20 group-hover:scale-110 transition-transform">3</div>
            <h4 className="font-headline-md text-on-surface mb-3">Ejecución</h4>
            <p className="font-body-md text-on-surface-variant">Optimización en tiempo real basada en datos para escalar resultados.</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 rounded-2xl bg-gradient-to-br from-surface-variant/40 to-surface-container-lowest border border-white/10 relative overflow-hidden flex flex-col items-center text-center px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-2xl space-y-6">
          <h2 className="font-headline-lg text-on-surface">¿Listo para dominar tu mercado?</h2>
          <p className="font-body-lg text-on-surface-variant">Agenda una sesión estratégica gratuita de 30 minutos. Analizaremos tu situación actual y te daremos 3 acciones inmediatas.</p>
          <div className="pt-6">
            <button className="bg-[#25D366] text-white px-10 py-5 rounded-lg font-label-md text-lg flex items-center justify-center gap-3 mx-auto hover:scale-105 transition-all shadow-[0_10px_30px_-10px_rgba(37,211,102,0.4)]">
              Contactar por WhatsApp
              <span className="material-symbols-outlined">chat</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainHome;