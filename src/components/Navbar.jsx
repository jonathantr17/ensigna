import React, { useState } from 'react';
import logo from '../assets/logo.png';

export default function Navbar({ setPagina }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-800 shadow px-4 h-20 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo */}
      <div
        className="flex-shrink-0 h-full flex items-center cursor-pointer"
        onClick={() => { setPagina('Inicio'); setMenuOpen(false); }} // <- Agregado
      >
        <img
          src={logo}
          alt="Logo Tienda"
          className="h-46 w-58 max-w-[180px] object-contain"
        />
      </div>

      {/* Botones de navegación desktop */}
      <div className="hidden md:flex space-x-6">
        <button
          onClick={() => setPagina('Inicio')}
          className="hover:text-yellow-500 font-medium transition"
        >
          Inicio
        </button>
        <button
          onClick={() => setPagina('Ropa')}
          className="hover:text-yellow-500 font-medium transition"
        >
          Ropa
        </button>
        <button
          onClick={() => setPagina('Contacto')}
          className="hover:text-yellow-500 font-medium transition"
        >
          Contacto
        </button>
        <button
          onClick={() => setPagina('Nosotros')}
          className="hover:text-yellow-500 font-medium transition"
        >
          Nosotros
        </button>
      </div>

      {/* Botón menú móvil */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden">
          <button onClick={() => { setPagina('Inicio'); setMenuOpen(false); }} className="py-2 hover:text-yellow-500 font-medium">Inicio</button>
          <button onClick={() => { setPagina('Ropa'); setMenuOpen(false); }} className="py-2 hover:text-yellow-500 font-medium">Ropa</button>
          <button onClick={() => { setPagina('Contacto'); setMenuOpen(false); }} className="py-2 hover:text-yellow-500 font-medium">Contacto</button>
          <button onClick={() => { setPagina('Nosotros'); setMenuOpen(false); }} className="py-2 hover:text-yellow-500 font-medium">Nosotros</button>
        </div>
      )}
    </nav>
  );
}