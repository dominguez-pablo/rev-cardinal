import Header from '../components/Header.jsx';
import MainHome from '../components/MainHome.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white antialiased">
      <Header />
      <MainHome />
      <Footer />
    </div>
  )
}

export default Home