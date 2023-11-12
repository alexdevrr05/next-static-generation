import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image as ImageNextUI,
} from '@nextui-org/react';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

import Image from 'next/image';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  return (
    // overflow: visible; en un elemento, este permite que el contenido sobresalga de su contenedor si es más grande que el contenedor mismo
    <Layout>
      <div className='flex py-2 gap-4'>
        <Card shadow='sm'>
          <CardBody className='overflow-visible'>
            <ImageNextUI
              src={
                pokemon.sprites.other?.dream_world.front_default ||
                '/no-image.png'
              }
              alt={pokemon.name}
              width={300}
            />
          </CardBody>
        </Card>
        {/* isBlurred */}
        <Card fullWidth className='px-4 pt-2'>
          <CardHeader className='pb-0 sm:flex-row flex-col items-center justify-between'>
            <h1 className='capitalize text-xl font-bold'>{pokemon.name}</h1>
            <Button isIconOnly color='danger' aria-label='like'>
              <Image src='/heart.png' alt='love-icon' width={25} height={25} />
            </Button>
          </CardHeader>
          <CardBody className='overflow-visible'>
            <h2 className='text-lg font-semibold'>Sprites</h2>
            {/* Sprites content */}
            <div className='flex justify-center'>
              <ImageNextUI
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <ImageNextUI
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
              />
              <ImageNextUI
                src={pokemon.sprites?.front_female || '/no-image.png'}
                alt={pokemon.name}
              />
              <ImageNextUI
                src={pokemon.sprites?.back_female || '/no-image.png'}
                alt={pokemon.name}
              />
            </div>
          </CardBody>
        </Card>
      </div>
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

  return {
    props: {
      pokemon: data,
    },
  };
};

export default PokemonPage;
