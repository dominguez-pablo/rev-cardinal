import { useEffect } from 'react';

const JSON_LD_ID = 'revcardinal-jsonld';

function upsertMeta(attr, key, content) {
  if (content == null || content === '') return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel, href, extra = {}) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
  Object.entries(extra).forEach(([k, v]) => {
    if (v != null) el.setAttribute(k, v);
  });
}

function setJsonLd(graph) {
  let el = document.getElementById(JSON_LD_ID);
  if (!graph || (Array.isArray(graph) && graph.length === 0)) {
    el?.remove();
    return;
  }
  const payload = Array.isArray(graph)
    ? {
        '@context': 'https://schema.org',
        '@graph': graph.map((node) => {
          if (!node || typeof node !== 'object') return node;
          const { '@context': _c, ...rest } = node;
          return rest;
        }),
      }
    : graph;
  if (!el) {
    el = document.createElement('script');
    el.id = JSON_LD_ID;
    el.type = 'application/ld+json';
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(payload);
}

/**
 * Actualiza title, meta, Open Graph, Twitter y JSON-LD por ruta (sin cambiar UI).
 */
export default function PageSEO({
  title,
  description,
  canonicalPath = '/',
  ogImage,
  ogType = 'website',
  noindex = false,
  jsonLdGraph = null,
}) {
  useEffect(() => {
    const canonical = canonicalPath.startsWith('http')
      ? canonicalPath
      : `${window.location.origin}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

    document.title = title;
    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');
    upsertMeta('name', 'author', 'RevCardinal');
    upsertMeta('name', 'theme-color', '#0c0c0f');

    upsertLink('canonical', canonical);

    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:site_name', 'RevCardinal');
    upsertMeta('property', 'og:locale', 'es_AR');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', canonical);
    upsertMeta('property', 'og:image', ogImage);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);

    setJsonLd(jsonLdGraph);
  }, [title, description, canonicalPath, ogImage, ogType, noindex, jsonLdGraph]);

  return null;
}
