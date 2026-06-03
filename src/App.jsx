import React from 'react';
import Header from './components/Header';
import MainHome from './components/MainHome';
import Footer from './components/Footer';
import './App.css'; // Asegúrate de que esta línea esté presente para aplicar los estilos globales  

function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary selection:text-white antialiased">
      <Header />
      <MainHome />
      <Footer />
    </div>
  );
}

export default App;