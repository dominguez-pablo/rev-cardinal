import React, { useRef } from 'react';
import '../css/nosotros.css';
import NosStoryBackdrop from './NosStoryBackdrop';
import logoBlanco from '../img/Ícono Blanco fondo transparente.png';
import { homeHash } from '../constants/links';

const WA_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="wa-svg">
    <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.2-1.36A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.09.8.83-3-.2-.31A8.2 8.2 0 1 1 12 20.2Zm4.5-6.13c-.25-.12-1.47-.72-1.7-.8-.22-.09-.39-.13-.55.12-.16.25-.63.8-.77.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-3.35-2.93c-.25-.43.25-.4.72-1.34.08-.16.04-.3-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.43h-.47c-.16 0-.43.06-.65.3-.22.25-.86.84-.86 2.05 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.2 3.7.59.26 1.05.41 1.4.52.6.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.22-.16-.47-.28Z" />
  </svg>
);

const setSpotlight = (e, name) => {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty(`--${name}-x`, `${e.clientX - rect.left}px`);
  el.style.setProperty(`--${name}-y`, `${e.clientY - rect.top}px`);
};

const introParagraphs = [
  'RevCardinal nació mucho antes de tener un nombre, una oficina o una cartera de clientes.',
  'Comenzó en las calles de Tucumán, en la curiosidad de un chico que se detenía frente a cada concesionario nuevo para observar sus vidrieras, descubrir los modelos que llegaban y dejarse sorprender por todo lo que una marca podía transmitir. Los autos fueron una de sus primeras grandes pasiones: no solamente por su diseño o potencia, sino por las historias, los sueños y las emociones que representaban.',
  'Con el paso de los años, esa fascinación se transformó en una inquietud más amplia: entender por qué algunas marcas logran generar una conexión especial con las personas, mientras que otras pasan desapercibidas.',
  'Así comenzó un recorrido que combinó estudios en marketing, programación, comercio electrónico, estrategia, publicidad digital y tecnología. Un camino construido desde la curiosidad, el aprendizaje constante y la convicción de que la creatividad genera verdadero valor cuando está acompañada por estrategia y capacidad de ejecución.',
  'A los 21 años, aquella pasión de la infancia comenzó a convertirse en una carrera profesional. La oportunidad de trabajar con marcas como BMW permitió conocer desde adentro la exigencia, el cuidado por los detalles y la construcción de una experiencia de marca premium. Con el tiempo, ese recorrido se amplió hacia empresas de diferentes industrias, mercados y tamaños, desde emprendimientos locales hasta marcas de alcance nacional e internacional.',
];

const storyChapters = [
  {
    title: 'El nacimiento de RevCardinal',
    paragraphs: [
      'RevCardinal surge de la necesidad de crear una agencia diferente: cercana a sus clientes, comprometida con sus resultados y preparada para acompañar cada proyecto de manera integral.',
      'No queríamos ser simplemente una agencia que publica contenido o administra campañas. Queríamos comprender los negocios, involucrarnos en sus desafíos y convertirnos en un verdadero socio estratégico.',
      'Por eso combinamos marketing, comunicación, publicidad, producción audiovisual, desarrollo web, tecnología, automatización y análisis de datos. Cada proyecto se construye de manera personalizada, seleccionando las herramientas, plataformas y formatos que mejor se adapten a sus objetivos.',
      'Trabajamos en canales tradicionales y emergentes, desde Meta y Google hasta TikTok, Pinterest, LinkedIn, YouTube, X, Reddit, medios programáticos y comunidades digitales. No creemos en utilizar una plataforma solamente porque está de moda: creemos en encontrar el lugar donde cada marca pueda destacarse y generar una conexión real.',
    ],
  },
  {
    title: 'La pasión detrás de cada proyecto',
    paragraphs: [
      'Aunque los automóviles fueron una parte importante del comienzo, la verdadera pasión siempre fue construir.',
      'Construir marcas más sólidas. Crear experiencias que las personas recuerden. Transformar ideas en proyectos concretos. Ayudar a que una empresa pueda mostrar en el mundo digital el mismo nivel de calidad que ofrece todos los días en su trabajo.',
      'Nos motiva descubrir la esencia de cada cliente, comprender aquello que lo hace diferente y convertirlo en una comunicación clara, atractiva y efectiva.',
      'Nos involucramos en cada proyecto con la misma dedicación con la que comenzó esta historia: observando, aprendiendo, haciendo preguntas y buscando constantemente una mejor manera de avanzar.',
    ],
  },
  {
    title: 'Nuestro recorrido continúa',
    paragraphs: [
      'RevCardinal representa el resultado de años de aprendizaje, experiencias, desafíos y relaciones construidas con clientes que confiaron en nosotros para acompañar el crecimiento de sus marcas.',
      'Pero también representa todo lo que todavía queda por hacer.',
      'Cada proyecto es una nueva oportunidad para crear, innovar y demostrar que una buena estrategia puede transformar la manera en que una empresa se presenta, se comunica y crece.',
      'Esta no es solamente nuestra historia. También es la historia de cada persona, equipo y empresa que decidió permitirnos formar parte de su camino.',
    ],
  },
];

const MainNosotros = () => {
  const storyRef = useRef(null);

  return (
    <main className="pt-20">
      <section
        ref={storyRef}
        className="nos-story scroll-mt-24"
        aria-labelledby="nos-story-title"
      >
        <NosStoryBackdrop containerRef={storyRef} />
        <div className="nos-story-vignette" aria-hidden="true" />
        <div className="nos-story-glow nos-story-glow--left" aria-hidden="true" />
        <div className="nos-story-glow nos-story-glow--right" aria-hidden="true" />
        <div className="nos-story-rail nos-story-rail--left" aria-hidden="true" />
        <div className="nos-story-rail nos-story-rail--right" aria-hidden="true" />

        <article className="nos-story-inner">
          <header className="nos-story-header">
            <span className="eyebrow">Nosotros</span>
            <h1 id="nos-story-title" className="nos-story-title">
              Nuestra <span>historia</span>
            </h1>
          </header>

          <div className="nos-story-intro">
            {introParagraphs.map((text) => (
              <p key={text.slice(0, 48)}>{text}</p>
            ))}
          </div>

          {storyChapters.map((chapter) => (
            <section key={chapter.title} className="nos-story-chapter">
              <h2>{chapter.title}</h2>
              {chapter.paragraphs.map((text) => (
                <p key={text.slice(0, 48)}>{text}</p>
              ))}
            </section>
          ))}

          <p className="nos-story-outro">
            <strong>
              Bienvenidos a RevCardinal. Donde la pasión se convierte en estrategia y las ideas comienzan a moverse.
            </strong>
          </p>
        </article>
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

export default MainNosotros;
