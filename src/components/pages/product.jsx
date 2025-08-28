import React, { useRef, useState, useEffect } from 'react';
import { ShoppingCart } from 'lucide-react';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';

const productos = [
  { id: 1, nombre: 'Camiseta Básica', precio: '$19.99', descripcion: 'Camiseta cómoda de algodón', imagen: img1 },
  { id: 2, nombre: 'Jeans Slim Fit', precio: '$39.99', descripcion: 'Jeans ajustados, modernos y cómodos', imagen: img2 },
  { id: 3, nombre: 'Chaqueta de Cuero', precio: '$89.99', descripcion: 'Chaqueta de cuero premium', imagen: img3 },
  { id: 4, nombre: 'Zapatillas Deportivas', precio: '$59.99', descripcion: 'Zapatillas para cualquier actividad', imagen: img4 },
  { id: 5, nombre: 'Sudadera', precio: '$49.99', descripcion: 'Sudadera cálida y confortable', imagen: img5 },
];

export default function ProductosDestacados() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const width = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -width : width, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setShowLeftArrow(scrollRef.current.scrollLeft > 0);
      }
    };
    const container = scrollRef.current;
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 bg-gray-100 relative">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12">Productos Destacados</h2>

        {showLeftArrow && (
          <button
            onClick={() => scroll('left')}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 text-gray-700 text-4xl font-bold z-10 hover:text-yellow-500 transition px-4 hidden md:block"
          >
            &lt;
          </button>
        )}
        <button
          onClick={() => scroll('right')}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 text-gray-700 text-4xl font-bold z-10 hover:text-yellow-500 transition px-4 hidden md:block"
        >
          &gt;
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto md:overflow-x-hidden scroll-smooth hide-scrollbar"
        >
          {productos.map((producto) => (
            <div
              key={producto.id}
              className="bg-white shadow-lg flex flex-col flex-shrink-0 h-[450px] relative group rounded-lg w-[80%] sm:w-[60%] md:w-[24%]"
            >
              {/* Imagen */}
              <div className="h-[75%] w-full relative flex justify-center items-center border border-white rounded-lg px-3 py-3 box-border bg-gray-50">
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 group-hover:rounded-none"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-20 flex justify-center items-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  onClick={() => setProductoSeleccionado(producto)}
                >
                  <span className="text-white text-sm font-semibold py-1 px-3 bg-yellow-500 rounded-full">
                    Ver Producto
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="h-[25%] flex flex-col justify-center items-center px-2 py-2 font-serif text-center">
                <h3 className="text-base font-semibold">{producto.nombre}</h3>
                <p className="text-sm text-gray-700">{producto.precio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Producto */}
      {productoSeleccionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="relative bg-white w-11/12 md:w-3/4 lg:w-2/3 flex flex-col md:flex-row rounded-lg overflow-hidden shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-black text-2xl font-bold z-50"
              onClick={() => setProductoSeleccionado(null)}
            >
              ×
            </button>

            {/* Imagen a la izquierda */}
            <div className="md:w-1/2 h-96 md:h-auto bg-gray-100 flex items-center justify-center p-4">
              <img
                src={productoSeleccionado.imagen}
                alt={productoSeleccionado.nombre}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Info a la derecha */}
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
}