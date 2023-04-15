import Logo from '../../public/img/logo.png'
import Navegacion from './Navegacion'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='header' >
      <div className='contenedor w-full flex flex-col gap-5 md:flex-row md:justify-between md:items-center'>
        <Image
          className='block mx-auto md:m-0'
          src={Logo} width={300} height={40} alt='guitarLa Logo' priority
        />
        <Navegacion />
      </div>
    </header>
  )
}

export default Header