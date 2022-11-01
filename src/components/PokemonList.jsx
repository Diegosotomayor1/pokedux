import Pokemon from './Pokemon'
const PokemonList = ({ pokemons }) => {
  return (
    <div className='pokemons flex mt-5 gap-6 flex-wrap justify-center'>
      {pokemons.map((poke, index) => {
        return <Pokemon pokemon={poke} key={index} />
      })}
    </div>
  )
}
export default PokemonList
