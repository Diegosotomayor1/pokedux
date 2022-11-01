import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPagination } from '../features/uiSlices'

const ButtonPagination = ({ page }) => {
  const dispatch = useDispatch()
  const pagination = useSelector(state => state.data_ui.pagination)
  const actualPage = {
    limit: pagination.limit,
    offset: pagination.pokemonPerPage * (page - 1),
    pokemonPerPage: pagination.pokemonPerPage
  }
  const active = false
  return (
    <button
      className={
        active
          ? ' rounded-full p-2 px-5 text-white text-lg bg-black'
          : 'bg-purple-600 rounded-full p-2 px-5 text-white text-lg hover:bg-black focus:bg-black '
      }
      onClick={() => dispatch(setPagination(actualPage))}
    >
      {page}
    </button>
  )
}

export default ButtonPagination
