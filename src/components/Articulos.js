import { formatearPrecio } from '@/utils';
import Image from 'next/image'
import { TiDeleteOutline } from 'react-icons/ti';

const Articulos = ({ articulo,eliminarProducto,actualizarCantidad }) => {

  const { cantidad, precio , nombre, imagen , id} = articulo

  const subtotal =  cantidad * precio 
  return (
    <article className='relative grid gap-4 md:grid-cols-2 py-8 md:place-items-center'>

      <Image
        className='block mx-auto w-2/3'
        width={400}
        height={200}
        src={imagen} 
        alt='reference price guitar , electrics , acustics'
        priority/>

      <section className='flex flex-col gap-3 text-center'>
        <h2 className='text-3xl text-amber-500 font-semibold'>{nombre}</h2>
        <p className='text-2xl text-amber-500 font-semibold'>Precio: {formatearPrecio(precio)}</p>
        <p className='text-2xl text-black font-semibold'>Subtotal: {formatearPrecio(subtotal)}</p>

        <div className='flex flex-col gap-2'>
          <label className='text-2xl text-amber-500 font-semibold' htmlFor="cantidad">Cantidad</label>
          <select  
          className='text-center w-3/5 mx-auto border border-black rounded-md'
          value={cantidad}
          onChange={ e=>actualizarCantidad({
            id:id,
            cantidad:+e.target.value
          })}
          id="cantidad">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </section>

      <button 
        onClick={()=>eliminarProducto(id)}
        className='absolute rounded-full top-3 right-0'>
        <TiDeleteOutline color='red' fontSize={20}/>
      </button>

    </article>
  )
}

export default Articulos