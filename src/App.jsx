import Home from './pages/Home';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import ScrollToTop from './components/ScrollToTop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Asegúrate de que esta línea esté presente para aplicar los estilos globales  

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/servicios" element={<Servicios />} />
       <Route path="/nosotros" element={<Nosotros />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;