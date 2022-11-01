import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Favorites from './views/Favorites'
import { useEffect } from 'react'
import { getPokemonsWithDetails } from './features/pokemonSlices'
import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPokemonsWithDetails())
  }, [dispatch])
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favoritos' element={<Favorites />} />
        </Routes>
  )
}
export default App
