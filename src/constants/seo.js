import { WHATSAPP_PHONE } from './links';
import pageSeo from './page-seo.json';

/** URL canónica del sitio (sin barra final). Definir VITE_SITE_URL en producción. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://revcardinal.com').replace(/\/$/, '');

export const SITE_NAME = 'RevCardinal';
export const SITE_LEGAL_NAME = 'RevCardinal Marketing';
export const DEFAULT_LOCALE = 'es_AR';

export const DEFAULT_DESCRIPTION =
  'Agencia de marketing digital en Argentina: pauta (Meta, Google), contenido, producción audiovisual y automatización comercial. Resultados medibles para marcas y concesionarios.';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

export const SOCIAL = {
  instagram: 'https://www.instagram.com/revcardinalarg/',
  linkedin: 'https://www.linkedin.com/company/revcardinal-marketing-company/',
};

export const PAGE_SEO = pageSeo;

export function absoluteUrl(path = '/') {
  if (!path || path === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    legalName: SITE_LEGAL_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/og-image.png`,
    description: DEFAULT_DESCRIPTION,
    sameAs: [SOCIAL.instagram, SOCIAL.linkedin],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: `+${WHATSAPP_PHONE}`,
      availableLanguage: ['Spanish'],
      areaServed: ['AR', 'MX', 'CL', 'PE', 'DO', 'US'],
    },
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    inLanguage: 'es-AR',
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
}

export function buildWebPageSchema({ path, title, description }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'es-AR',
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function buildFaqSchema(faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  };
}

export function buildProfessionalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#service`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    image: `${SITE_URL}/og-image.png`,
    description: DEFAULT_DESCRIPTION,
    areaServed: {
      '@type': 'Country',
      name: 'Argentina',
    },
    serviceType: [
      'Marketing digital',
      'Publicidad en redes sociales',
      'Producción audiovisual',
      'Automatización comercial',
    ],
    parentOrganization: { '@id': `${SITE_URL}/#organization` },
  };
}
