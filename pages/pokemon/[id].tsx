import { useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image as ImageNextUI,
} from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { Layout } from '@/components/layouts';
import { Pokemon } from '@/interfaces';
import { getPokemonInfo, localFavorite } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
  const [isFavPokemon, setIsFavPokemon] = useState<boolean>(
    localFavorite.isPokemonInFavorites(pokemon.id)
  );

  const onToggleFavorite = () => {
    localFavorite.toggleFavorite(pokemon.id);
    setIsFavPokemon(!isFavPokemon);

    if (isFavPokemon) return;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    // overflow: visible; en un elemento, este permite que el contenido sobresalga de su contenedor si es más grande que el contenedor mismo
    <Layout title={pokemon.name}>
      <div className='flex py-2 gap-4 flex-col md:flex-row'>
        <Card shadow='sm'>
          <CardBody className='overflow-visible items-center'>
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
          <CardHeader className='pb-0 sm:flex-row  items-center justify-between'>
            <h1 className='capitalize text-xl font-bold'>{pokemon.name}</h1>
            <Button
              isIconOnly
              color={isFavPokemon ? 'danger' : 'default'}
              aria-label='like'
              onClick={onToggleFavorite}
            >
              <Image src='/heart.png' alt='love-icon' width={25} height={25} />
            </Button>
          </CardHeader>

          <CardBody className='overflow-visible'>
            <h2 className='text-lg font-semibold pb-4'>Sprites: </h2>

            {/* Sprites content */}
            <div className='flex flex-col justify-between sm:flex-row items-center'>
              <ImageNextUI
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
              />
              <ImageNextUI
                src={pokemon.sprites.back_default}
                alt={pokemon.name}
              />
              <ImageNextUI
                src={pokemon.sprites?.front_shiny || '/no-image.png'}
                alt={pokemon.name}
              />
              <ImageNextUI
                src={pokemon.sprites?.back_shiny || '/no-image.png'}
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
    // fallback: false,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params as { id: string };

  const pokemon = await getPokemonInfo(id);

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        // puede que salgan nuevos pokemons
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
    revalidate: 86400, // 24 horas
  };
};

export default PokemonPage;
