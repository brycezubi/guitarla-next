import { Layout } from '@/components'
import { formatearFecha } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogUrl = ({ blog }) => {
  // console.log(blog)
  const { image,createdAt,contenido , titulo} = blog[0].attributes
  return (
    <Layout>
      <main className='contenedor py-10'>
        <h1 className='title'>Blog</h1>

        <article className='flex flex-col gap-4 my-8 c '>
          <Image
            className='block object-cover mx-auto mw'
            width={600}
            height={350}
            src={image.data.attributes.url}
            alt={`blog-${titulo}`}
            priority />

          <section className='flex flex-col gap-2 max-w-lg mx-auto'>
            <h2 className='text-2xl font-bold text-amber-500'>{titulo}</h2>
            <small className='font-bold'>{formatearFecha(createdAt)}</small>
            <p className='text-lg'>{contenido}</p>

            <Link
              className='w-4/5  rounded-md p-1 font-semibold mt-4 text-white text-center uppercase bg-amber-500 mx-auto hover:bg-amber-400  hover:tracking-widest transition-all'
              href='/blog'>Ir a Blogs</Link>
          </section>

        </article>

      </main>
    </Layout>
  )
}

export default BlogUrl

export const getStaticPaths = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/blogs`)
  const { data } = await respuesta.json()
  console.log(data)

  const paths = data.map(blog => ({
    params: {
      url: blog.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async ({ params: { url } }) => {
  // console.log(datos)
  const respuesta = await fetch(`${process.env.API_URL}/blogs?filters[url]=${url}&populate=image`)
  const { data: blog } = await respuesta.json()
  return {
    props: {
      blog
    }
  }
}