import React from 'react';
import sobreNosotros from '../../assets/SobreNosotros.png'; // Imagen de la tienda o equipo

export default function SeccionNosotros() {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
        
        {/* Imagen */}
        <div className="md:w-1/2 w-full overflow-hidden rounded-xl shadow-lg group">
          <img
            src={sobreNosotros}
            alt="Nosotros"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Texto */}
        <div className="md:w-1/2 w-full flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-800">Sobre Nosotros</h2>
          <p className="text-gray-600 text-lg">
            Somos una tienda de ropa moderna, apasionados por el estilo y la calidad. 
            Cada prenda es seleccionada cuidadosamente para que encuentres tu look perfecto.
          </p>
          <p className="text-gray-600 text-lg">
            Creemos en la moda como una forma de expresión. Nuestro objetivo es que cada cliente
            se sienta único y cómodo con cada outfit.
          </p>
          <button
            className="bg-yellow-500 text-black px-6 py-3 rounded-full w-max hover:bg-yellow-600 transition"
          >
            Conócenos
          </button>
        </div>

      </div>
    </section>
  );
}