import { useMemo } from 'react';
import Header from '../components/Header.jsx';
import MainHome from '../components/MainHome.jsx';
import Footer from '../components/Footer.jsx';
import PageSEO from '../components/PageSEO.jsx';
import {
  PAGE_SEO,
  DEFAULT_OG_IMAGE,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildWebPageSchema,
  buildProfessionalServiceSchema,
  buildFaqSchema,
} from '../constants/seo';
import { faqItems } from '../constants/faq';

const Home = () => {
  const meta = PAGE_SEO.home;
  const jsonLdGraph = useMemo(
    () => [
      buildOrganizationSchema(),
      buildWebSiteSchema(),
      buildProfessionalServiceSchema(),
      buildWebPageSchema(meta),
      buildFaqSchema(faqItems),
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
        <MainHome />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
