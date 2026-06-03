import React from 'react';
import "../css/header.css"; 

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-white/10 flex justify-between items-center h-20 px-gutter-desktop max-w-[1440px] left-1/2 -translate-x-1/2 z-50">
      <div className="font-headline-lg text-headline-lg font-bold text-on-surface tracking-tight">
        RevCardinal
      </div>
      <div className="hidden md:flex space-x-10 font-label-md">
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Servicios</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Proyectos</a>
        <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Nosotros</a>
      </div>
      <button className="btn-secondary px-6 py-2 rounded-lg font-label-md hidden md:block">
        Contacto
      </button>
    </nav>
  );
};

export default Header;