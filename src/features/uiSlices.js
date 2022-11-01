import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  pagination: {
    limit: 100,
    offset: 0,
    pokemonPerPage: 20
  }
}

const uiSlices = createSlice({
  name: 'ui_data',
  initialState,
  reducers: {
    setPagination (state, action) {
      state.pagination = action.payload
    },
    setLoading (state, action) {
      state.loading = action.payload
    }
  }
})

export const { setPagination, setLoading } = uiSlices.actions

export default uiSlices.reducer
