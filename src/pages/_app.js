import '@/styles/globals.css'
import { useState, useEffect } from 'react'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ?
    JSON.parse(localStorage.getItem('carrito')) ?? [] : []
  // console.log(carritoLS)

  const [carrito, setCarrito] = useState(carritoLS)
  const [paginaLista, setPaginaLista] = useState(false)


  useEffect(() => {
    setPaginaLista(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])


  const agregarCarrito = guitarra => {
    // Comprobar si la guitarra ya esta en el carrito...
    if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
      // Iterar para actualizar la cantidad
      const carritoActualizado = carrito.map(guitarraState => {
        if (guitarraState.id === guitarra.id) {
          guitarraState.cantidad = guitarra.cantidad;
        }
        return guitarraState;
      });
      // Se asigna al array
      setCarrito([...carritoActualizado]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    } else {
      // En caso de que el articulo no exista, es nuevo y se agrega
      setCarrito([...carrito, guitarra]);
      localStorage.setItem('carrito', JSON.stringify(carrito));
    }

  }

  const eliminarProducto = id => {
    let mensaje = window.confirm('¿Seguro de que quieres eliminar el Producto?')

    if (mensaje === true) {
      const carritoActualizado = carrito.filter(producto => producto.id != id)
      setCarrito(carritoActualizado)

      window.localStorage.setItem('carrito', JSON.stringify(carrito));
      return
    }
  }

  const actualizarCantidad = guitarra => {
    const carritoActualizado = carrito.map(guitarraState => {
      if (guitarraState.id === guitarra.id) {
        guitarraState.cantidad = parseInt(guitarra.cantidad)
      }
      return guitarraState
    })
    setCarrito(carritoActualizado)
    window.localStorage.setItem('carrito', JSON.stringify(carrito));
  }

  return paginaLista ?
    <main className={roboto.className}>
      < Component {...pageProps}
        carrito={carrito}
        agregarCarrito={agregarCarrito}
        actualizarCantidad={actualizarCantidad}
        eliminarProducto={eliminarProducto}
      />
    </main>
    : null
}
