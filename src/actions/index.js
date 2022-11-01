import { SET_FAVORITE, SET_FAVORITES, SET_LOADING, SET_POKEMONS } from './types'
import { getPokemon } from '../api'

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload
})
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload
})
export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload
})
export const setFavorites = (payload) => {
  const PokemonsFilter = payload.filter(pokemon => pokemon.favorite === true)
  return {
    type: SET_FAVORITES,
    payload: PokemonsFilter
  }
}
export const getPokemonWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonDetails = await Promise.all(pokemons.map(poke => getPokemon(poke)))
  dispatch(setPokemons(pokemonDetails))
}
