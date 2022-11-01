import { SET_FAVORITE, SET_FAVORITES, SET_LOADING, SET_POKEMONS } from '../actions/types'

const initialState = {
  pokemons: [],
  loading: false,
  favorites: []
}
export const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS:
      return { ...state, pokemons: action.payload }
    case SET_LOADING:
      return { ...state, loading: action.payload }
    case SET_FAVORITE:
    {
      const newPokemonList = [...state.pokemons]
      const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId
      })
      if (currentPokemonIndex === -1) return state
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
      return { ...state, pokemons: newPokemonList }
    }
    case SET_FAVORITES:
      return { ...state, favorites: action.payload }
    default:
      return state
  }
}
