import React from 'react';
import '../css/servicios.css';

const serviciosData = [
  {
    category: 'Performance & Medios',
    items: [
      {
        title: 'Paid Media',
        desc: 'Gestión integral de la inversión publicitaria. Cada peso administrado con criterio estratégico para que trabaje y genere retorno.',
        highlight: 'El diferencial: lo lleva directamente nuestro responsable de paid media.',
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
        highlight: 'El diferencial: manejamos retail media en LatAm y gigantes de EE.UU.',
        platforms: ['Mercado Ads', 'Walmart Connect'],
      },
    ],
  },
  {
    category: 'Contenido & Marca',
    items: [
      {
        title: 'Community Management',
        desc: 'Gestión profesional de las redes para que la marca tenga una presencia viva y coherente.',
        highlight: 'El diferencial: El orgánico alineado con la pauta y estrategia general.',
        list: ['Estrategia de contenido y calendario', 'Interacción y escucha activa'],
      },
      {
        title: 'Contenido Institucional',
        desc: 'Producción de contenido que construye autoridad, confianza y profesionalismo.',
        highlight: 'El diferencial: Producción in-house para coherencia total.',
        list: ['Videos corporativos y de cultura', 'Cobertura de eventos y lanzamientos'],
      },
      {
        title: 'Diseño Multimedia',
        desc: 'Un equipo de diseñadores que convierte la marca en piezas que comunican y venden.',
        highlight: 'El diferencial: Diseño pensado para performar, no solo verse bien.',
        list: ['Piezas para campañas y animaciones', 'Identidad visual adaptada'],
      },
      {
        title: 'Producción Audiovisual',
        desc: 'Grabación con equipo propio de primer nivel. Del concepto a la edición final.',
        highlight: 'El diferencial: Agilidad y control de calidad total sin terceros.',
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
        highlight: 'El diferencial: Código propio y a medida significa más control, mejor rendimiento y libertad total para escalar.',
        list: [
          'Desarrollo con código a medida, sin plantillas genéricas',
          'Sitios institucionales, landing pages y desarrollos específicos',
          'Diseño orientado a conversión',
          'Optimización de velocidad y adaptación a celulares',
          'Integración con herramientas de medición',
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
        highlight: 'El diferencial: Mirada externa y objetiva, decisiones basadas en datos y acompañamiento real.',
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
  <div className="sv-acc-item">
    <div className="sv-acc-header">
      <div className="sv-acc-left">
        <span className="sv-acc-dash">—</span>
        <h4 className="sv-acc-title">{item.title}</h4>
      </div>
      <span className="sv-acc-icon">+</span>
    </div>
    <div className="sv-acc-expand">
      <div className="sv-acc-inner">
        <div className="sv-acc-body">
          <div>
            <p className="sv-acc-desc">{item.desc}</p>
            <div className="sv-acc-highlight">
              <p>{item.highlight}</p>
            </div>
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
      </div>
    </div>
  </div>
);

const MainServicios = () => {
  return (
    <main className="pt-20">
      {/* ── Hero ── */}
      <section className="sv-hero px-gutter-desktop">
        <div className="sv-hero-bg"></div>
        <div className="max-w-[max-width] mx-auto w-full relative z-10 grid md:grid-cols-2 gap-xl items-center">
          <div className="space-y-lg sv-hero-content">
            <div className="sv-hero-dash">
              <h1 className="sv-hero-title">
                Performance que se<br />
                <span className="red">Mide</span>
              </h1>
              <h1 className="sv-hero-title" style={{marginTop: '.2em'}}>
                Decisiones que se toman con<br />
                <span className="red">Datos</span>
              </h1>
            </div>
            <p className="sv-hero-desc">
              Somos una agencia integral de marketing y producción. Convertimos cada acción en resultados medibles y cada decisión en una elección respaldada por datos —no por intuición. Estrategia, contenido, tecnología y pauta bajo un mismo techo.
            </p>
            <div className="flex gap-md">
              <a href="#servicios-list" className="btn-primary px-xl py-md font-label-md rounded-lg flex items-center gap-sm">
                Explorar Servicios
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative border border-line bg-panel p-md rounded-lg">
              <img
                alt="Dashboard Digital"
                className="w-full h-auto rounded opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbr_D6EySe08gOZM8b2NO7xDx_JPVmCuIfmh52A2BkYAWyflXwyF5De9uUaNs62QoLJ5Ny5nwQtRSY95ZepRw1U6bGSK1Z_KPzz4q6izlg-9f8n7m89qIffMxjLfJhvbEH48t3cEKJfslXiORF-6_ZI2L5dzlSb6q_Yy_YsZjRjKBEq1D8k6nfUTcbU0sXMIu2vSnKAc1X7bEuFz4IP91MKxXOkJye0SjmWVnPBySrcDNeWukMTsgTcgiAk-VV43vcEwH3JL8vZg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-xl px-gutter-desktop max-w-[max-width] mx-auto text-center">
        <blockquote className="sv-quote">
          &quot;No hacemos marketing para 'estar presentes'. Hacemos marketing para crecer, y lo demostramos con números.&quot;
        </blockquote>
        <p className="sv-quote-desc">
          Todo lo que ejecutamos —una campaña, una pieza, una web, una acción comercial— se mide, se analiza y se optimiza. Leemos los datos para entender qué funciona, qué no y por qué, y ajustamos el rumbo en consecuencia. Esa es nuestra forma de trabajar y nuestra mayor diferencia: cada peso invertido tiene que justificar su retorno. Performance real, decisiones con fundamento y mejora continua. Eso es lo que nos define.
        </p>
        
      </section>

      {/* ── Services Accordion ── */}
      <section id="servicios-list" className="py-xl px-gutter-desktop max-w-[max-width] mx-auto">
        {serviciosData.map((group, gi) => (
          <div key={gi} className="sv-cat-group">
            <div className="sv-cat-header">
              <h3 className="sv-cat-title">{group.category}</h3>
              <div className="sv-cat-bar"></div>
            </div>
            <div className="sv-accordion">
              {group.items.map((item, ii) => (
                <AccordionItem key={ii} item={item} />
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── Cómo Trabajamos + Por Qué ── */}
      <section className="sv-work sv-work-section">
        <div className="max-w-[max-width] mx-auto px-gutter-desktop">
          <div className="grid md:grid-cols-2 gap-xl">
            {/* Cómo trabajamos */}
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
            {/* Por qué RevCardinal */}
            <div className="sv-work-right">
              <div className="sv-why-card">
                <h2 className="sv-work-title">Por qué RevCardinal</h2>
                <div>
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
        </div>
      </section>
    </main>
  );
};

export default MainServicios;
