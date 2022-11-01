import { useDispatch, useSelector } from 'react-redux'
import PokemonList from '../components/PokemonList'
import SearchPokemon from '../components/SearchPokemon'
import '../assets/output.css'
import Spinner from '../components/Spinner'
import FavoritePokemons from '../components/FavoritePokemons'
import ButtonPagination from '../components/ButtonPagination'
import { useState, useEffect } from 'react'
import { setLoading } from '../features/uiSlices'

function Home () {
  const pokemons = useSelector(state => state.data.pokemons)
  const loading = useSelector(state => state.data_ui.loading)
  const pagination = useSelector(state => state.data_ui.pagination)
  const dispatch = useDispatch()
  const pages = () => {
    const numberPages = pagination.limit / 20
    const contador = []
    for (let i = 0; i < numberPages; i++) {
      contador.push(i + 1)
    }
    return { pagina: contador, total: numberPages, valorActual: 1 }
  }
  const resultsPokemons = (keyword = '') => {
    if (keyword.length < 2) {
      setPokemonsView(
        pokemons.slice(
          pagination.offset,
          pagination.offset + pagination.pokemonPerPage
        )
      )
    } else {
      setPokemonsView(
        pokemons.filter(pokemon => pokemon.name.indexOf(keyword) !== -1)
      )
    }
  }
  const [pokemonsView, setPokemonsView] = useState([])
  useEffect(() => {
    resultsPokemons()
    dispatch(setLoading(false))
  }, [pagination, pokemons, dispatch])
  return (
    <>
      <FavoritePokemons />
      <SearchPokemon resultsPokemons={resultsPokemons} />
      <div className='flex flex-wrap justify-center gap-2'>
        {pages().pagina.map(page => {
          return <ButtonPagination key={page} page={page} />
        })}
      </div>
      <Spinner loading={loading} />
      <PokemonList pokemons={pokemonsView} />
    </>
  )
}

export default Home
