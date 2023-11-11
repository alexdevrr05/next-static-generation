import { GetStaticProps, NextPage } from 'next';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import { PokemonListResponse, SmallPokemon } from '@/interfaces';
import { pokeApi } from '@/api';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Pokemon List'>
      <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
        {pokemons.map(({ name, id, img }) => (
          <Card
            shadow='sm'
            key={id}
            isPressable
            onPress={() => console.log('item pressed')}
          >
            <CardBody className='overflow-visible p-0'>
              <Image
                shadow='sm'
                radius='lg'
                width='100%'
                alt={`${name}-img`}
                className='w-full object-cover h-[240px]'
                src={img}
              />
            </CardBody>
            <CardFooter className='text-small justify-between'>
              <b className='capitalize'>{name}</b>
              <p className='text-default-500'>#{id}</p>
            </CardFooter>
          </Card>
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
