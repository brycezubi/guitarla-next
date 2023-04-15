import { Layout } from '@/components'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <Layout
      title={`Pagina No Encontrada`}
      description='Tienda de guitarras electricas , acusticas , mejores precios'
    >
      <main className='contenedor my-10'>
        <h1 className='title'>Pagina no Encontrada</h1>
        <p className='font-bold text-4xl text-center my-10'>Not Found</p>

        <div className='flex justify-center'>
          <Link
            className='p-2 rounded-md uppercase font-bold bg-amber-500 text-white hover:bg-amber-400'
            href='/'
          >Regresar a Pagina Principal</Link>

        </div>
      </main>
    </Layout>
  )
}

export default NotFound