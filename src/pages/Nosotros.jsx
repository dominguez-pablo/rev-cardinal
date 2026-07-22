import Header from '../components/Header';
import Footer from '../components/Footer';
import MainNosotros from '../components/MainNosotros';

const Nosotros = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white antialiased">
      <Header />
      <MainNosotros />
      <Footer />
    </div>
  );
};

export default Nosotros;
