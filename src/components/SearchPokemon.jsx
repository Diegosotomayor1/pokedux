const SearchPokemon = ({ resultsPokemons }) => {
  return (
    <div className='flex gap-4 my-5 shadow-lg py-5 px-10 rounded-3xl w-3/4 bg-white'>
      <p>Buscar:</p>
      <input
        type='text'
        name=''
        id=''
        className='border-b-[1px] border-gray-500  focus-visible:outline-none w-full'
        onChange={e => resultsPokemons(e.target.value)}
      />
    </div>
  )
}
export default SearchPokemon
