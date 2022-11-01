import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPokemon, getPokemons } from '../api'
import { setLoading } from './uiSlices'

const initialState = {
  pokemons: [],
  favorites: []
}

export const AddColorsDependyVocalsInName = (pokemons) => {
  const pokemonColors = pokemons.map(poke => {
    let pokemons = poke
    const colors = []
    if (poke.name.includes('a')) {
      pokemons = { ...poke, colors: [...colors, '#87C19B'] }
      colors.push('#87C19B')
    }
    if (poke.name.includes('e')) {
      pokemons = { ...poke, colors: [...colors, '#EFE081'] }
      colors.push('#EFE081')
    }
    if (poke.name.includes('i')) {
      pokemons = { ...poke, colors: [...colors, '#F0B66B'] }
      colors.push('#F0B66B')
    }
    if (poke.name.includes('o')) {
      pokemons = { ...poke, colors: [...colors, '#F1713F'] }
      colors.push('#87C19B')
    }
    if (poke.name.includes('u')) {
      pokemons = { ...poke, colors: [...colors, '#AD84C7'] }
      colors.push('#87C19B')
    }
    return pokemons
  })
  return pokemonColors
}

export const getPokemonsWithDetails = createAsyncThunk(
  'data/getPokemonWithDetails',
  async (_, { dispatch, getState }) => {
    const pages = getState().data_ui.pagination
    dispatch(setLoading(true))
    const PokemonRes = await getPokemons(pages.limit, pages.offset)
    const pokemonDetails = await Promise.all(PokemonRes.map(poke => getPokemon(poke)))
    const PokemonsWithColors = AddColorsDependyVocalsInName(pokemonDetails)
    dispatch(setPokemons(PokemonsWithColors))
  }

)

const pokemonSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload
    },
    setFavorite: (state, action) => {
      const newPokemonList = [...state.pokemons]
      const currentPokemonIndex = newPokemonList.findIndex((pokemon) => {
        return pokemon.id === action.payload.pokemonId
      })
      if (currentPokemonIndex === -1) return state
      newPokemonList[currentPokemonIndex].favorite = !newPokemonList[currentPokemonIndex].favorite
    },
    setFavorites: (state, action) => {
      if (action.payload.favorite) state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload.id)
      else state.favorites.push(action.payload)
    }
  }
})

export const { setPokemons, setFavorite, setFavorites } = pokemonSlice.actions
export default pokemonSlice.reducer
