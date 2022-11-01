import axios from 'axios'
const getPokemons = async (limit, ofsset) => {
  try {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${ofsset}`
    )
    return res.data.results
  } catch (e) { console.error(e) }
}
const getPokemon = async (pokemon) => {
  try {
    const res = await axios.get(pokemon.url)
    return res.data
  } catch (e) { console.error(e) }
}
export { getPokemons, getPokemon }
