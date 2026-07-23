import { useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MainNosotros from '../components/MainNosotros';
import PageSEO from '../components/PageSEO';
import {
  PAGE_SEO,
  DEFAULT_OG_IMAGE,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildBreadcrumbSchema,
} from '../constants/seo';

const Nosotros = () => {
  const meta = PAGE_SEO.nosotros;
  const jsonLdGraph = useMemo(
    () => [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildWebPageSchema(meta),
      buildBreadcrumbSchema([
        { name: 'Inicio', path: '/' },
        { name: 'Nosotros', path: '/nosotros' },
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
        <MainNosotros />
      </main>
      <Footer />
    </div>
  );
};

export default Nosotros;
