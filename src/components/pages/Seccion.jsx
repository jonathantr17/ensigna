import React from 'react';
import sobreNosotros from '../../assets/SobreNosotros.png';
import contacto from '../../assets/contacto.png';

export default function Seccion({ setPagina }) {
  const irANosotros = () => {
    setPagina('Nosotros'); // <-- Cambiado de 'Inicio' a 'Nosotros'
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  const irAContacto = () => {
    setPagina('Contacto');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50);
  };

  return (
    <section className="w-full flex flex-col md:flex-row gap-4 my-10 px-2 max-w-full mx-auto">
      {/* Tarjeta Nosotros */}
      <div
        className="relative flex-1 overflow-hidden cursor-pointer aspect-[4/3] group"
        onClick={irANosotros}
      >
        <img
          src={sobreNosotros}
          alt="Nosotros"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-3xl font-bold text-white text-center">Nosotros</h3>
        </div>
      </div>

      {/* Tarjeta Contacto */}
      <div
        className="relative flex-1 overflow-hidden cursor-pointer aspect-[4/3] group"
        onClick={irAContacto}
      >
        <img
          src={contacto}
          alt="Contacto"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="text-3xl font-bold text-white text-center">Contacto</h3>
        </div>
      </div>
    </section>
  );
}