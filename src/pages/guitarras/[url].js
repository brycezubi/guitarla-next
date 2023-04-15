import { GuitarraDetalle, Layout } from "@/components"

const GuitarraUrl = ({ guitarra , agregarCarrito }) => {
  return (
    <Layout
      title={`Guitarra ${guitarra[0].attributes.nombre}`}
      description='Tienda de guitarras electricas , acusticas , mejores precios'

    >
      <main className="contenedor my-10">
        <h1 className="title pb-4">Guitarra</h1>
        <GuitarraDetalle guitarra={guitarra[0]} agregarCarrito={agregarCarrito}/>
      </main>
    </Layout>

  )
}

export default GuitarraUrl


// export const getServerSideProps = async ({query:{url}}) => {
//   // console.log(datos)
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const { data: guitarra } = await respuesta.json()
//   return {
//     props: {
//       guitarra
//     }
//   }
// }


export const getStaticPaths = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()
  // console.log(data)

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  return {
    paths,
    fallback: false
  }
}


export const getStaticProps = async ({ params: { url } }) => {
  // console.log(datos)
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json()
  return {
    props: {
      guitarra
    }
  }
}