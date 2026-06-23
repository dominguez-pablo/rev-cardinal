import Home from './pages/Home';
import Servicios from './pages/Servicios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // Asegúrate de que esta línea esté presente para aplicar los estilos globales  

function App() {
  return (
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/servicios" element={<Servicios />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;