import { useSelector } from 'react-redux'
import PokemonList from '../components/PokemonList'

const Favorites = () => {
  const favorites = useSelector(state => state.data.favorites)
  return (
    <div>
      <h3>Tienes {favorites.length} pokemones favoritos</h3>
      <PokemonList pokemons={favorites} />
    </div>
  )
}
export default Favorites
