import { Blog, Guitarra, Layout } from '@/components'
import Image from 'next/image'


export default function Home({ guitarras, blogs, curso }) {
  const { titulo, contenido,image } = curso.attributes
  
  return (
    <Layout
      title={'Inicio'}
      description='Tienda de guitarras electricas , acusticas , mejores precios'

    >
      <main className='py-10'>
        <h1 className='title'>Bienvenidos A GuitarLa </h1>

        <section className='contenedor grilla py-10'>
          {
            guitarras.map(guitarra => (
              <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
            ))
          }
        </section>

        <section className='relative  py-40 lg:py-52 text-white my-28'>
          
          <Image  
            className='absolute imagen bg-center object-cover z-10'
            src={image.data[0].attributes.url} 
            alt='resource curso online '
            fill
          />
          
          <div className='contenedor absolute top-0 left-0 right-0 bottom-0 text-center flex flex-col items-center justify-center gap-4 z-20'>
            <h2 className='text-5xl font-bold text-white'>{titulo}</h2>
            <small className='text-red-100 font-bold'>{contenido}</small>

          </div>
        </section>


        <section className='contenedor grilla my-10'>
          {
            blogs.map(blog => (
              <Blog key={blog.id} blog={blog.attributes} />
            ))
          }
        </section>

      </main>
    </Layout>

  )
}


export const getStaticProps = async () => {
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`;
  const urlBlog = `${process.env.API_URL}/blogs?populate=image`;
  const urlCurso = `${process.env.API_URL}/curso?populate=image`;


  // Multiples llamadas 
  const [resGuitarras, resBlogs, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlBlog),
    fetch(urlCurso)
  ])

  const [{ data: guitarras }, { data: blogs }, { data: curso }] = await Promise.all([
    resGuitarras.json(),
    resBlogs.json(),
    resCurso.json()
  ])

  return {
    props: {
      guitarras,
      blogs,
      curso
    }
  }

}
