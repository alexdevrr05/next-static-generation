import { FavoritePokemonCard } from '.';

type Props = {
  pokemons: number[];
};

const FavoritePokemons = ({ pokemons }: Props) => {
  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
      {pokemons.map((id) => (
        <FavoritePokemonCard pokemonId={id} />
      ))}
    </div>
  );
};

export default FavoritePokemons;
