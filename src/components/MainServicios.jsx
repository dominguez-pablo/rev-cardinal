import React, { useRef } from 'react';
import '../css/servicios.css';
import ServiciosHeroBackdrop from './ServiciosHeroBackdrop';

const serviciosData = [
  {
    category: 'Performance & Medios',
    items: [
      {
        title: 'Paid Media',
        desc: 'Gestión integral de la inversión publicitaria. Cada peso administrado con criterio estratégico para que trabaje y genere retorno.',
        highlight: 'Lo lleva directamente nuestro responsable de paid media.',
        list: [
          'Campañas en Meta, Google, Pinterest y X',
          'Estrategia y segmentación de audiencias',
          'Optimización continua y escalado',
          'Reportes claros: CPA, ROAS, CTR',
        ],
      },
      {
        title: 'Retail Media',
        desc: 'Pauta dentro de los marketplaces y retailers donde la gente realmente compra. El anuncio aparece en el momento exacto.',
        highlight: 'Hemos manejado retail media en LatAm y gigantes de EE.UU.',
        platforms: ['Mercado Ads', 'Walmart Connect', 'Instacart', 'Kroger', 'Criteo', 'Target'],
      },
    ],
  },
  {
    category: 'Contenido & Marca',
    items: [
      {
        title: 'Community Management',
        desc: 'Gestión profesional de las redes para que la marca tenga una presencia viva y coherente.',
        highlight: 'El orgánico alineado con la pauta y estrategia general.',
        list: ['Estrategia de contenido y calendario', 'Interacción y escucha activa'],
      },
      {
        title: 'Contenido Institucional',
        desc: 'Producción de contenido que construye autoridad, confianza y profesionalismo.',
        highlight: 'Producción in-house para coherencia total.',
        list: ['Videos corporativos y de cultura', 'Cobertura de eventos y lanzamientos'],
      },
      {
        title: 'Diseño Multimedia',
        desc: 'Un equipo de diseñadores que convierte la marca en piezas que comunican y venden.',
        highlight: 'Diseño pensado para performar, no solo verse bien.',
        list: ['Piezas para campañas y animaciones', 'Identidad visual adaptada'],
      },
      {
        title: 'Producción Audiovisual',
        desc: 'Grabación con equipo propio de primer nivel. Del concepto a la edición final.',
        highlight: 'Agilidad y control de calidad total sin terceros.',
        list: ['Drones, cámaras y set de lentes', 'Edición y color profesional'],
      },
    ],
  },
  {
    category: 'Tecnología',
    items: [
      {
        title: 'Desarrollo Web',
        desc: 'Sitios construidos a medida para ser la base digital del negocio: rápidos, sólidos y orientados a convertir.',
        highlight: 'Código propio y a medida: más control, mejor rendimiento y libertad para escalar.',
        list: [
          'Desarrollo con código a medida, sin plantillas genéricas',
          'Sitios institucionales, landing pages y desarrollos específicos',
          'Diseño orientado a conversión',
          'Optimización de velocidad y adaptación a celulares',
        ],
      },
    ],
  },
  {
    category: 'Estrategia',
    items: [
      {
        title: 'Consultoría & Performance',
        desc: 'Acompañamiento externo para empresas que quieren ordenar, profesionalizar y escalar.',
        highlight: 'Mirada externa y objetiva, decisiones basadas en datos.',
        list: [
          'Optimización de procesos',
          'Acompañamiento de acciones comerciales',
          'Análisis de resultados',
          'Foco total en performance',
        ],
      },
    ],
  },
];

const whyItems = [
  { icon: 'monitoring', title: 'Performance primero:', text: 'todo se mide y se optimiza para generar retorno real.' },
  { icon: 'analytics', title: 'Decisiones con datos:', text: 'nada librado a la intuición.' },
  { icon: 'hub', title: 'Todo bajo un mismo techo:', text: 'pauta, contenido, producción, desarrollo y consultoría integrados.' },
  { icon: 'videocam', title: 'Equipo y equipamiento propios:', text: 'más agilidad, más control, menos costos.' },
  { icon: 'handshake', title: 'Trato directo:', text: 'acompañamiento real y cercano, no un cliente más en una lista.' },
];

const workSteps = [
  { num: '01', title: 'Diagnóstico', text: 'Entendemos el negocio, los objetivos y el punto de partida. Sin datos no hay estrategia.' },
  { num: '02', title: 'Estrategia', text: 'Definimos el plan, los canales y las métricas con las que vamos a medir el éxito.' },
  { num: '03', title: 'Producción y ejecución', text: 'Creamos, lanzamos y ponemos todo en marcha con equipo propio.' },
  { num: '04', title: 'Análisis y optimización', text: 'Medimos los resultados, leemos los datos y ajustamos para mejorar de forma continua.' },
];

const AccordionItem = ({ item }) => (
  <details className="sv-acc-item">
    <summary className="sv-acc-header">
      <div className="sv-acc-left">
        <span className="sv-acc-dash">—</span>
        <h4 className="sv-acc-title">{item.title}</h4>
      </div>
      <span className="sv-acc-icon">+</span>
    </summary>
    <div className="sv-acc-body">
      <div>
        <p className="sv-acc-desc">{item.desc}</p>
        <p className="sv-acc-highlight">{item.highlight}</p>
      </div>
      {item.list && (
        <ul className="sv-acc-list">
          {item.list.map((li, i) => (
            <li key={i}>
              <span className="material-symbols-outlined">check_circle</span> {li}
            </li>
          ))}
        </ul>
      )}
      {item.platforms && (
        <div className="sv-acc-platforms">
          <h5>Plataformas</h5>
          <ul>
            {item.platforms.map((p, i) => (
              <li key={i}>
                <span className="material-symbols-outlined">arrow_right</span> {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </details>
);

const MainServicios = () => {
  const heroRef = useRef(null);

  return (
    <main className="pt-20">
      <section ref={heroRef} className="sv-hero px-gutter-desktop">
        <ServiciosHeroBackdrop containerRef={heroRef} />
        <div className="sv-hero-vignette" aria-hidden="true" />
        <div className="max-w-[1100px] mx-auto w-full relative z-10">
          <div className="sv-hero-inner">
            <span className="eyebrow">Servicios</span>
            <div className="sv-hero-dash">
              <h1 className="sv-hero-title">
                Performance medible.<br />
                Decisiones con <span className="red">datos</span>.
              </h1>
            </div>
            <p className="sv-hero-desc">
              Agencia integral de marketing y producción. Estrategia, contenido, tecnología y pauta bajo un mismo techo — cada acción respaldada por números, no por intuición.
            </p>
            <div>
              <a href="#servicios-list" className="btn-primary px-8 py-3 font-label-md rounded-lg inline-flex items-center gap-2">
                Explorar servicios
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 px-gutter-desktop max-w-[1100px] mx-auto text-center">
        <blockquote className="sv-quote">
          &quot;No hacemos marketing para estar presentes. Hacemos marketing para crecer, y lo demostramos con números.&quot;
        </blockquote>
        <p className="sv-quote-desc">
          Todo lo que ejecutamos se mide, se analiza y se optimiza. Leemos los datos para entender qué funciona, qué no y por qué. Cada peso invertido tiene que justificar su retorno.
        </p>
      </section>

      <section id="servicios-list" className="py-10 px-gutter-desktop max-w-[1100px] mx-auto">
        {serviciosData.map((group, gi) => (
          <div key={gi} className="sv-cat-group">
            <div className="sv-cat-header">
              <h3 className="sv-cat-title">{group.category}</h3>
            </div>
            <div className="sv-accordion">
              {group.items.map((item, ii) => (
                <AccordionItem key={ii} item={item} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="sv-work sv-work-section">
        <div className="max-w-[1100px] mx-auto px-gutter-desktop">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="sv-work-title">Cómo trabajamos</h2>
              <div className="sv-work-grid">
                {workSteps.map((s) => (
                  <div key={s.num} className="sv-work-item">
                    <span className="sv-work-num">{s.num}</span>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sv-work-right">
              <h2 className="sv-work-title">Por qué RevCardinal</h2>
              <div className="sv-why-list">
                {whyItems.map((wi, i) => (
                  <div key={i} className="sv-why-item">
                    <span className="material-symbols-outlined">{wi.icon}</span>
                    <div>
                      <strong>{wi.title}</strong>
                      <span>{wi.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainServicios;
