import { formatearFecha } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'

const Blog = ({ blog }) => {
  const { titulo, contenido, url, image ,createdAt} = blog

  return (
    <article className='flex flex-col gap-4'>
      <Image
        className='block object-cover mx-auto w-full'
        width={400}
        height={200}
        src={image.data.attributes.formats.medium.url}
        alt={`blog-${titulo}`} 
        priority/>

      <section className='flex flex-col gap-2'>
        <h2 className='text-2xl font-bold text-amber-500'>{titulo}</h2>
        <small className='font-bold'>{formatearFecha(createdAt)}</small>
        <p className='descripcion text-lg'>{contenido}</p>

        <Link
          className='w-4/5  rounded-md p-1 font-semibold mt-4 text-white text-center uppercase bg-amber-500 mx-auto hover:bg-amber-400  hover:tracking-widest transition-all'
          href={`/blog/${url}`}>Seguir leyendo</Link>
      </section>

    </article>
  )
}

export default Blog