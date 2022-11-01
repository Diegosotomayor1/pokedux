const ListFavorites = ({ pokemons }) => {
  return (
    <div className='list-favorites mt-5 flex flex-row justify-center items-center gap-4 flex-wrap '>
      {pokemons.map(poke => {
        return (
          <div
            key={poke.id}
            className='flex flex-row items-center justify-center gap-4 bg-white rounded-xl '
          >
            <h3>{poke.name}</h3>
            <img
              className='w-24 h-24 -m-[10%]'
              src={poke.sprites.front_default}
              alt=''
            />
          </div>
        )
      })}
    </div>
  )
}
export default ListFavorites
