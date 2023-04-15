import Link from 'next/link'
import { useRouter } from 'next/router';
import { AiOutlineShoppingCart } from 'react-icons/ai';


const Navegacion = () => {
  const router = useRouter()
  return (
    <nav>
      <ul className='flex gap-3 justify-center items-center capitalize text-lg'>
        <li>
          <Link className={ router.pathname === '/' ? 'text-white rounded-sm bg-amber-500 p-1' : 'text-white p-1'}
          href='/'>Home</Link>
        </li>
        <li>
          <Link className={ router.pathname === '/nosotros' ? 'text-white rounded-sm bg-amber-500 p-1' : 'text-white p-1'}
          href='/nosotros'>Nosotros</Link>
        </li>
        <li>
          <Link className={ router.pathname === '/tienda' ? 'text-white rounded-sm bg-amber-500 p-1' : 'text-white p-1'}
           href='/tienda'>Tienda</Link>
        </li>
        <li>
          <Link className={ router.pathname === '/blog' ? 'text-white rounded-sm bg-amber-500 p-1' : 'text-white p-1'}
          href='/blog'>Blog</Link>
        </li>
        <li className='flex justify-center items-center'>
          <Link className={ router.pathname === '/carrito' ? 'text-white rounded-sm bg-amber-500 p-1' : 'text-white'}
          href='/carrito'>
            <AiOutlineShoppingCart />
          </Link>
        </li>
      </ul>
    </nav >
  )
}

export default Navegacion