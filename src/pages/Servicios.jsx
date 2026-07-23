import { useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainServicios from '../components/MainServicios';
import PageSEO from '../components/PageSEO';
import {
  PAGE_SEO,
  DEFAULT_OG_IMAGE,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
} from '../constants/seo';

const Servicios = () => {
  const meta = PAGE_SEO.servicios;
  const jsonLdGraph = useMemo(
    () => [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildWebPageSchema(meta),
      buildBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Servicios', path: '/servicios' },
      ]),
    ],
    [],
  );

  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white antialiased">
      <PageSEO
        title={meta.title}
        description={meta.description}
        canonicalPath={meta.path}
        ogImage={DEFAULT_OG_IMAGE}
        jsonLdGraph={jsonLdGraph}
      />
      <Header />
      <main id="main-content">
        <MainServicios />
      </main>
      <Footer />
    </div>
  );
};

export default Servicios;
