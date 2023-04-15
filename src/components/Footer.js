import React from 'react'
import Navegacion from './Navegacion'

const Footer = () => {
  return (
    <footer className='bg-slate-900 py-10 text-xl text-white '>
      <div className='contenedor md:flex md:justify-between md:items-center '>
        <Navegacion />

        <section className='flex flex-col gap-2 text-center pt-4 lg:pt-0 lg:flex-row'>
          <p>Proyecto Realizado en Next Js</p>
          <span>💗</span>
          <p>Tailwind CSS</p>
        </section>
      </div>
    </footer>
  )
}

export default Footer