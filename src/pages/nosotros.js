import { Layout } from '@/components'
import Nosotros from '../../public/img/nosotros.jpg'
import Image from 'next/image'

const nosotros = () => {
  return (
    <Layout
      title={` Nosotros`}
      description='Tienda de guitarras electricas , acusticas , mejores precios'
    >
      <main className='contenedor my-10'>
        <article className="contenedor w-11/12 mx-auto ">
          <h1 className="title">Nosotros </h1>
          <Image
            className="block w-full max-w-2xl mx-auto rounded-sm py-4 lg:pb-8"
            src={Nosotros}
            alt="ilustracion de referencia sobre nosotros"
            priority />
          <section className="mx-auto max-w-3xl text-lg pb-5" >
            <p>
              GuitarLa.pe es la primera tienda online especializada en
              instrumentos musicales y audio profesional para Perú. Descubre todo
              tipo de instrumentos musicales exclusivos en un solo lugar. Nos
              caracterizamos por ofrecer a nuestros usuarios las marcas más
              prestigiosas de la industria musical, y mantener un excelente
              estándar de atención y calidad de servicio.
            </p>

            <p className="my-5">
              Contamos con el mejor equipo de especialistas en cuanto a música se
              refiere, los cuales tienen como misión ofrecer la mejor
              recomendación y asesoría personalizada para nuestros clientes.
            </p>
          </section>
        </article>

      </main>
    </Layout>
  )
}

export default nosotros