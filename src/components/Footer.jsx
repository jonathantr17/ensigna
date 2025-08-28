import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Navegación */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Inicio</a></li>
            <li><a href="#" className="hover:text-gray-400">Tienda</a></li>
            <li><a href="#" className="hover:text-gray-400">Acerca de</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400">Dónde comprar</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contacto</h3>
          <p>Av. 19 de Mayo,<br />San Pablo</p>
          <p className="mt-2">Email: <a href="mailto:info@misitio.com" className="hover:text-gray-400">info@misitio.com</a></p>
          <p>Tel: <a href="tel:1800000000" className="hover:text-gray-400">0963351521</a></p>
        </div>

        {/* Enlaces útiles y redes */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Soporte</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-gray-400">Envíos y Devoluciones</a></li>
            <li><a href="#" className="hover:text-gray-400">Preguntas Frecuentes</a></li>
          </ul>

          {/* Redes sociales */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <a href="#" className="hover:text-gray-400"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-400"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="text-center border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
        © 2025 Tienda de Ropa. Todos los derechos reservados.
      </div>
    </footer>
  );
}