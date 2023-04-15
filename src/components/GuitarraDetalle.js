import { formatearPrecio } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Guitarra = ({ guitarra, agregarCarrito }) => {

  const { nombre, precio, imagen, descripcion } = guitarra.attributes
  const [cantidad, setCantidad] = useState(0)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault(e)

    if (cantidad < 1) {
      setError(true)
      return
    }
    setError(false)
    
    const nuevaGuitarra = {
      id: guitarra.id,
      nombre,
      precio,
      imagen: imagen.data.attributes.url,
      cantidad
    }
    
    // Seteamos al context
    agregarCarrito(nuevaGuitarra)

    notify()
    

  }

  const notify = () => toast('🛍️ Producto Agregado!', {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });;

  return (
    <article className='grid gap-3  max-w-4xl mx-auto lg:grid-cols-2 lg:place-items-center'>
      <Image
        className=' block mx-auto object-cover'
        src={imagen.data.attributes.url}
        width={400} height={200}
        alt={`Guitarra-${nombre}`}
        priority />
      <section className='flex flex-col gap-4 text-center lg:text-left'>
        <h2 className='text-4xl text-center text-amber-500 font-bold'>{nombre}</h2>
        <p className='text-2xl  font-bold text-amber-500 text-center'> {formatearPrecio(precio)}</p>
        <p className='text-2xl font-bold'> <span className='font-normal'>{descripcion}</span></p>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col gap-3 text-center'>
          <label
            className='text-2xl text-amber-500 font-bold'
            htmlFor="cantidad">Cantidad</label>
          {
            error && <small className='text-red-500 font-semibold'>Seleccione una cantidad</small>
          }
          <select
            className='text-center border w-3/5 mx-auto rounded-md border-black'
            id="cantidad"
            onChange={e => setCantidad(+e.target.value)}
            value={cantidad}
          >
            <option value="0">---- Seleccione ----</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            className='w-3/5 lg:w-4/5  rounded-md p-1 font-semibold mt-4 text-white text-center uppercase bg-amber-500 mx-auto hover:bg-amber-400  hover:tracking-widest transition-all cursor-pointer'
            type="submit"
            value='Agregar al Carrito'
          />

          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <ToastContainer />
        </form>

        <Link
          className='w-4/5  rounded-md p-1 font-semibold mt-4 text-white text-center uppercase bg-amber-600 mx-auto hover:bg-amber-500  hover:tracking-widest transition-all'
          href='/tienda'
        >Seguir Comprando</Link>

      </section>
    </article>
  )
}

export default Guitarra