import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const router = useRouter();
  return (
    <Layout>
      <h1 className='font-bold'>{pokemon.name}</h1>
    </Layout>
  );
};

// Esto solo se define porque la ruta es dinámica ([id.tsx])
export const getStaticPaths: GetStaticPaths = () => {
  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`);

  return {
    // paths: [{ params: { id: '1' } }],
    paths: pokemons151.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);

  const pokemon = {
    name: data.forms[0].name,
    stats: data.stats,
    moves: data.moves,
  };

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPage;
