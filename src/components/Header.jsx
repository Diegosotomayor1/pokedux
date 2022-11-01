import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='header p-5 fixed w-full z-20'>
      <div className='main-header rounded-3xl flex justify-center items-center p-5 bg-purple-500 '>
        <div className='flex justify-between w-full md:w-5/6 text-white'>
          <div className='logo-header font-bold '>FAVORITE POKEMONS</div>
          <div className='menu-header flex gap-4'>
            <Link to='/'>Inicio</Link>
            <Link to='/favoritos'>Favoritos</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Header
