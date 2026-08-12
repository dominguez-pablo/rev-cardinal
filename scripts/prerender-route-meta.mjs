import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pageSeo from '../src/constants/page-seo.json' with { type: 'json' };

const SITE_URL = (process.env.VITE_SITE_URL || 'https://revcardinal.com').replace(/\/$/, '');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');

function escapeAttr(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;');
}

function canonicalUrl(routePath) {
  if (!routePath || routePath === '/') return `${SITE_URL}/`;
  return `${SITE_URL}${routePath.startsWith('/') ? routePath : `/${routePath}`}`;
}

function buildJsonLd(meta) {
  const canonical = canonicalUrl(meta.path);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'RevCardinal',
        url: `${SITE_URL}/`,
        logo: `${SITE_URL}/og-image.png`,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'RevCardinal',
        url: `${SITE_URL}/`,
        inLanguage: 'es-AR',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: meta.title,
        description: meta.description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
        inLanguage: 'es-AR',
      },
    ],
  });
}

function injectRouteMeta(html, meta) {
  const canonical = canonicalUrl(meta.path);
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);
  const jsonLd = buildJsonLd(meta);

  return html
    .replace(/<title>.*?<\/title>/, `<title>${title}</title>`)
    .replace(
      /<meta name="description" content="[^"]*"\s*\/>/,
      `<meta name="description" content="${description}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonical}" />`,
    )
    .replace(
      /<meta property="og:title" content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${title}" />`,
    )
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${description}" />`,
    )
    .replace(
      /<meta property="og:url" content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${canonical}" />`,
    )
    .replace(
      /<meta name="twitter:title" content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${title}" />`,
    )
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${description}" />`,
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n      ${jsonLd}\n    </script>`,
    );
}

if (!fs.existsSync(indexPath)) {
  console.error('dist/index.html no existe. Ejecutá vite build primero.');
  process.exit(1);
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');

for (const meta of Object.values(pageSeo)) {
  const html = injectRouteMeta(baseHtml, meta);

  if (meta.path === '/') {
    fs.writeFileSync(indexPath, html);
    continue;
  }

  const routeDir = path.join(distDir, meta.path.slice(1));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), html);
}

console.log('Meta por ruta generada en dist/');
