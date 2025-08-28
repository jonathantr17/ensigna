import React from 'react';

export default function Contacto() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
      <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700">Nombre</label>
          <input type="text" id="nombre" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Correo Electrónico</label>
          <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" />
        </div>
        <div className="mb-4">
          <label htmlFor="mensaje" className="block text-sm font-semibold text-gray-700">Mensaje</label>
          <textarea id="mensaje" rows="4" className="w-full p-3 border border-gray-300 rounded-lg"></textarea>
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600">Enviar</button>
      </form>
    </section>
  );
}