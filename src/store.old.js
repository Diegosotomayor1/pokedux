import thunk from 'redux-thunk'
import { pokemonsReducer } from './reducers/pokemons'
import { logger, AddColorsDependyVocalsInName } from './middlewares'
import { legacy_createStore as createStore, compose, applyMiddleware } from 'redux'

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const composeEnhancers = composeAlt(
  applyMiddleware(thunk, logger, AddColorsDependyVocalsInName)
)
const store = createStore(pokemonsReducer, composeEnhancers)

export default store
