import { Truck, ShoppingBag, User } from "lucide-react"; // íconos

export default function SeccionVentajas() {
  const ventajas = [
    {
      titulo: "Envíos rápidos y seguros",
      descripcion: "Recibe tus pedidos en tiempo récord, sin preocupaciones y en perfectas condiciones.",
      icono: <Truck className="w-12 h-12 text-yellow-500 mb-4" />,
    },
    {
      titulo: "Ropa de calidad",
      descripcion: "Materiales premium y diseños duraderos para que siempre luzcas increíble.",
      icono: <ShoppingBag className="w-12 h-12 text-yellow-500 mb-4" />,
    },
    {
      titulo: "Atención personalizada",
      descripcion: "Estamos para ayudarte con tus dudas y ofrecerte la mejor experiencia de compra.",
      icono: <User className="w-12 h-12 text-yellow-500 mb-4" />,
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Por qué elegirnos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ventajas.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              {item.icono}
              <h3 className="text-xl font-semibold mb-2">{item.titulo}</h3>
              <p className="text-gray-600">{item.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}