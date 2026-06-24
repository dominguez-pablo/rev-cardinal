import Header from '../components/Header'
import Footer from '../components/Footer'
import MainServicios from '../components/MainServicios'

const Servicios = () => {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white antialiased">
      <Header />
      <MainServicios />
      <Footer />
    </div>
  )
}

export default Servicios