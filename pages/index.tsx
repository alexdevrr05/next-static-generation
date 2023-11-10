import { GetStaticProps, NextPage } from 'next';
import axios from 'axios';

import { Layout } from '../components/layouts';
import { pokeApi } from '@/api';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemon List'>
      <ul>
        {pokemons.map(({ name, id }) => (
          <li key={id} className='font-semibold'>
            {name}
          </li>
        ))}
      </ul>
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
