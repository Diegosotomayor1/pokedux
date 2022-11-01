import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFavorite, setFavorites } from '../features/pokemonSlices'
import { setLoading } from '../features/uiSlices'

const Pokemon = ({ pokemon }) => {
  const favoriteHover = useRef()
  const favorite = pokemon.favorite ? 'grayscale-0' : 'grayscale'
  const dispatch = useDispatch()
  let colors = ''
  pokemon.colors ? (colors = pokemon.colors.join()) : (colors = 'pink')
  const name = pokemon.name
  const nameCapitalize =
    name[0].toUpperCase() + name.substring(1, name.lenght) || name

  const FavoriteHover = () => {
    const styleFavorite = [...favoriteHover.current.classList]
    if (styleFavorite.includes('hidden')) {
      favoriteHover.current.classList.remove('hidden')
      favoriteHover.current.classList.add('flex')
    } else {
      favoriteHover.current.classList.add('hidden')
      favoriteHover.current.classList.remove('flex')
    }
  }

  const handleFavorite = async () => {
    await dispatch(setFavorite({ pokemonId: pokemon.id }))
    dispatch(setFavorites(pokemon))
  }

  return (
    <div
      className={
        'pokemon w-[300px] relative p-5 text-white flex flex-col justify-center rounded-2xl transition-all duration-300 hover:scale-110'
      }
      style={{
        backgroundColor: colors,
        background: `linear-gradient(45deg, ${colors})`
      }}
      onMouseEnter={FavoriteHover}
      onMouseLeave={FavoriteHover}
    >
      <h3 className='font-semibold py-2 px-5 max-w-fit rounded-xl text-sm bg-opacity-50 bg-white text-gray-600'>
        {nameCapitalize}
      </h3>
      <img
        src={pokemon.sprites.other['official-artwork'].front_default}
        alt=''
        className='w-48 mx-auto'
      />
      <div className='flex justify-end gap-2'>
        {pokemon.abilities.map(ability => {
          return (
            <span
              className='rounded-xl bg-opacity-50 bg-white text-gray-600 text-xs px-3 py-1'
              key={ability.ability.name}
            >
              {ability.ability.name}
            </span>
          )
        })}
      </div>
      <div
        ref={favoriteHover}
        className='hidden favorites absolute flex-col gap-4 justify-center items-center top-0 left-0 rounded-2xl w-full h-full backdrop-blur-sm bg-[rgba(255,255,255,0.2)]'
      >
        <div
          className={
            'text-4xl transition-all duration-300 cursor-pointer hover:scale-125 hover:grayscale-0 ' +
            favorite
          }
          onClick={handleFavorite}
        >
          ⭐
        </div>
      </div>
    </div>
  )
}
export default Pokemon
