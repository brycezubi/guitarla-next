import { Blog, Layout } from '@/components'
import React from 'react'

const blog = ({blogs}) => {
  return (
    <Layout
      title={`Blog`}
      description='Tienda de guitarras electricas , acusticas , mejores precios'
    >
      <main className='contenedor py-10'>
        <h1 className='title pb-5'>Blogs</h1>
        <section className='grilla my-10'>
          {
            blogs.map(blog =>(
              <Blog key={blog.id} blog={blog.attributes}/>
            ))
          }
        </section>
      </main>
    </Layout>
  )
}

export default blog

export const getStaticProps = async()=>{
  const respuesta =  await fetch(`${process.env.API_URL}/blogs?populate=image`);
  const {data : blogs} = await respuesta.json()

  return {
    props:{
      blogs
    }
  }

}