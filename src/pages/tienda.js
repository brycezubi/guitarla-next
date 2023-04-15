import { Guitarra, Layout } from '@/components'

const tienda = ({guitarras}) => {
  
  return (
    <Layout 
      title={'Tienda'}
      description='Tienda de guitarras electricas , acusticas , mejores precios'
    >
      <main className='contenedor my-10'>
        <h1 className='title'>Tienda</h1>
        <section className='grilla py-10'>
          {
            guitarras.map(guitarra =>(
              <Guitarra  key={guitarra.id} guitarra={guitarra.attributes}/>
            ))
          }
        </section>
      </main>
    </Layout>
  )
}

export default tienda;


// export const getStaticProps = async()=>{
//   const respuesta =  await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const {data : guitarras} = await respuesta.json()

//   return {
//     props:{
//       guitarras
//     }
//   }

// }

export const getServerSideProps =async()=>{
  const respuesta =  await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  const {data : guitarras} = await respuesta.json()

  return{
    props:{
      guitarras
    }
  }
  
}