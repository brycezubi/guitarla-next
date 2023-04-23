import { Articulos, Layout } from '@/components'
import { formatearPrecio } from '@/utils'
import React, { useEffect, useState } from 'react'

const CarritoPage = ({carrito,eliminarProducto,actualizarCantidad}) => {
  
  const [ monto , setMonto] = useState(0)
  const [ articulos , setArticulos] =  useState(0)

  useEffect(()=>{
    const total  = carrito.reduce((total , producto)=>
      total + (producto.cantidad * producto.precio) , 0
    )
    const articulosTotal  = carrito.reduce((total , articulos)=>
      total + articulos.cantidad , 0
    )

    setMonto(total)
    setArticulos(articulosTotal)
  },[carrito])

  return (
    <Layout title={`carrito de compras `}>
      <main className='contenedor py-10'>
        <h1 className='title'>Carrito</h1>

        <section className='carrito grid gap-8 md:grid-cols-2 w-11/12 mx-auto my-10'>

          <section>
            <h2 className='text-3xl text-center text-gray-700 font-bold pb-4' >Lista de Articulos</h2>
            {
              carrito.length === 0 ? <h2 className='text-2xl text-gray-700 font-bold pt-6'>Carrito Vacio</h2> : (
                carrito.map( articulo =>(
                  <Articulos 
                    key={articulo.id} 
                    articulo={articulo}
                    eliminarProducto={eliminarProducto}
                    actualizarCantidad={actualizarCantidad}
                    
                  />
                ))
              )
            }
          </section>

          <aside className='resumen bg-gray-100 max-h-52 p-6 rounded-md flex flex-col gap-4'>
            <h2 className='text-3xl text-center text-gray-700 font-bold' >Resumen de Compra</h2>
            <p className='text-xl font-semibold text-gray-700'>Total a Pagar : {formatearPrecio(monto)} </p>
            <p className='text-xl font-semibold text-gray-700'>Total de Articulos: {articulos}</p>
          </aside>

        </section>
      </main>
    </Layout>
  )
}

export default CarritoPage
