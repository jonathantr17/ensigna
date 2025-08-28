import React, { useState, useEffect, forwardRef } from 'react';
import { ShoppingCart } from 'lucide-react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';

const productos = [
  { id: 1, nombre: 'Camiseta Básica', precio: '$19.99', descripcion: 'Camiseta cómoda de algodón', imagen: img1, categoria: 'Camisas' },
  { id: 2, nombre: 'Jeans Slim Fit', precio: '$39.99', descripcion: 'Jeans ajustados, modernos y cómodos', imagen: img2, categoria: 'Pantalones' },
  { id: 3, nombre: 'Chaqueta de Cuero', precio: '$89.99', descripcion: 'Chaqueta de cuero premium', imagen: img3, categoria: 'Conjuntos' },
  { id: 4, nombre: 'Zapatillas Deportivas', precio: '$59.99', descripcion: 'Zapatillas para cualquier actividad', imagen: img4, categoria: 'Tops' },
  { id: 5, nombre: 'Sudadera', precio: '$49.99', descripcion: 'Sudadera cálida y confortable', imagen: img5, categoria: 'Sudaderas' },
];

const categorias = ['Todos', 'Camisas', 'Pantalones', 'Conjuntos', 'Tops', 'Sudaderas'];

const SeccionRopa = forwardRef(({ categoriaFiltrada }, ref) => {
  const [filtro, setFiltro] = useState('Todos');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  useEffect(() => {
    if (categoriaFiltrada) {
      setFiltro(categoriaFiltrada);
      if (ref?.current) ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [categoriaFiltrada, ref]);

  const productosFiltrados =
    filtro === 'Todos' ? productos : productos.filter((p) => p.categoria === filtro);

  return (
    <section ref={ref} id="seccion-ropa" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Nuestra Ropa</h2>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-6 py-2 rounded-full border transition ${
                filtro === cat ? 'bg-yellow-500 text-white border-yellow-500' : 'bg-white text-gray-700 border-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productosFiltrados.map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-lg flex flex-col rounded-lg group overflow-hidden hover:shadow-xl transition"
            >
              <div className="h-96 w-full relative flex justify-center items-center p-4 bg-gray-50">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                  onClick={() => setProductoSeleccionado(producto)}
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  onClick={() => setProductoSeleccionado(producto)}
                >
                  <span className="text-white text-sm font-semibold py-2 px-4 bg-yellow-500 rounded-full">
                    Ver Producto
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center py-4 px-2 text-center">
                <h3 className="text-lg font-semibold">{producto.nombre}</h3>
                <p className="text-base text-gray-700">{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {productoSeleccionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white w-11/12 md:w-3/4 lg:w-2/3 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl font-bold z-50"
              onClick={() => setProductoSeleccionado(null)}
            >
              ×
            </button>

            <div className="md:w-1/2 h-96 md:h-auto bg-gray-100 flex items-center justify-center p-4">
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">{productoSeleccionado.nombre}</h3>
                <p className="text-gray-700 mb-4">{productoSeleccionado.descripcion}</p>
                <p className="text-2xl font-semibold mb-6">{productoSeleccionado.precio}</p>
              </div>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 w-full md:w-auto">
                <ShoppingCart className="w-5 h-5" />
                Comprar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
});

export default SeccionRopa;