import { configureStore } from '@reduxjs/toolkit'
import pokemonsReducer from './features/pokemonSlices'
import uiReducer from './features/uiSlices'

export const store = configureStore({
  reducer: {
    data: pokemonsReducer,
    data_ui: uiReducer
  }
})
