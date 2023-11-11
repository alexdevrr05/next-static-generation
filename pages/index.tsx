import { GetStaticProps, NextPage } from 'next';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { Layout } from '../components/layouts';
import { pokeApi } from '@/api';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemon List'>
      <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemons: SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default Home;
