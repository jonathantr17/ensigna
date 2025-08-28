import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import camisa from "../../assets/ok.jpeg";
import top from "../../assets/SobreNosotros.png";
import conjunto from "../../assets/contacto.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";

export default function CarruselCategorias({ onSelectCategoria }) {
  const categoriasCarrusel = [
    { img: camisa, title: "Camisas", categoria: "Camisas" },
    { img: top, title: "Tops", categoria: "Tops" },
    { img: conjunto, title: "Conjuntos", categoria: "Conjuntos" },
    { img: img4, title: "Sudaderas", categoria: "Sudaderas" },
    { img: img5, title: "Pantalones", categoria: "Pantalones" },
  ];

  return (
    <div className="w-full bg-gray-100 py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Categorías</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1.8}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1, disableOnInteraction: false }}
        speed={5000}
        breakpoints={{
          0: { slidesPerView: 1.05, spaceBetween: 0 },
          640: { slidesPerView: 1.5, spaceBetween: 0 },
          1024: { slidesPerView: 1.8, spaceBetween: 0 },
        }}
        className="w-full"
      >
        {categoriasCarrusel.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="relative w-full h-[700px] md:h-[700px] sm:h-[500px] xs:h-[300px] cursor-pointer"
              onClick={() => onSelectCategoria(item.categoria)}
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-4xl md:text-4xl sm:text-3xl xs:text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}