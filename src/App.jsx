import React, { useState, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Inicio from './components/pages/Inicio.jsx'
import Ropa from './components/pages/Ropa.jsx'
import Contacto from './components/pages/Contacto.jsx'
import Nosotros from './components/pages/nosotros.jsx'
import ProductosDestacados from './components/pages/product.jsx'
import CarruselCategorias from './components/pages/carrusel.jsx'
import WhyChoolse from './components/pages/WhyChoolse.jsx'
import Seccion from './components/pages/Seccion.jsx'

export default function App() {
  const [pagina, setPagina] = useState('Inicio')
  const [categoriaFiltro, setCategoriaFiltro] = useState(null)
  const ropaRef = useRef(null)

  const irARopa = (categoria) => {
    setCategoriaFiltro(categoria)
    setPagina('Ropa')
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 50)
  }

  const renderPage = () => {
    switch (pagina) {
      case 'Inicio':
        return (
          <>
            <Inicio onComprar={() => irARopa(null)} />
            <Seccion setPagina={setPagina} /> {/* <-- PASAR setPagina */}
            <ProductosDestacados />
            <CarruselCategorias onSelectCategoria={irARopa} />
            <WhyChoolse />
          </>
        )
      case 'Ropa':
        return <Ropa categoriaFiltrada={categoriaFiltro} ref={ropaRef} />
      case 'Contacto':
        return <Contacto />
      case 'Nosotros':
        return <Nosotros />
      default:
        return <Inicio onComprar={() => irARopa(null)} />
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar setPagina={setPagina} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer />
    </div>
  )
}