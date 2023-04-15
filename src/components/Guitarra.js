import { formatearPrecio } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Guitarra = ({ guitarra }) => {
  const { nombre, precio, imagen, descripcion, url } = guitarra
  return (
    <article className='grid gap-3  lg:grid-cols-2 lg:place-items-center'>
      <Image
        className=' block mx-auto object-cover max-w-md w-full'
        src={imagen.data.attributes.formats.medium.url}
        width={400} height={200}
        alt={`Guitarra-${nombre}`}
        priority></Image>
      <section className='flex flex-col gap-2 text-center lg:text-left'>
        <h2 className='text-3xl lg:text-2xl text-amber-500 font-bold'>{nombre}</h2>
        <p className='text-2xl lg:text-lg font-bold'>Precio: <span className='font-normal'>{formatearPrecio(precio)}</span></p>
        <p className='descripcion text-xl font-bold'>Descripcion: <span className='font-normal'>{descripcion}</span></p>
        <Link
          className='w-3/5 lg:w-full rounded-md p-1 font-semibold mt-4 text-white text-center uppercase bg-amber-500 mx-auto hover:bg-amber-400  hover:tracking-widest transition-all'
          href={`/guitarras/${url}`}>Detalles</Link>
      </section>
    </article>
  )
}

export default Guitarra