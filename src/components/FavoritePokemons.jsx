import ListFavorites from './ListFavorites'
import { useSelector } from 'react-redux'

const FavoritesPokemons = () => {
  const favorites = useSelector(state => state.data.favorites)
  return (
    <div>
      <h3>Tienes {favorites.length} pokemones favoritos</h3>
      <ListFavorites pokemons={favorites} />
    </div>
  )
}
export default FavoritesPokemons
