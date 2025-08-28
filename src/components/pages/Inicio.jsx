import React from 'react';
import okImage from '../../assets/ok.jpeg';

export default function Inicio({ onComprar }) {
  return (
    <section className="w-full">
      <div
        className="relative h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${okImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">Bienvenido a nuestra Tienda de Ropa</h1>
            <p className="text-xl mb-8">Explora nuestra última colección y encuentra tu estilo único.</p>
            <button
              className="bg-yellow-500 text-black px-6 py-3 rounded-full hover:bg-yellow-600"
              onClick={onComprar}  // <--- Aquí llamamos la función de App.jsx
            >
              Ver Colección
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}