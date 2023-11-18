import { FC, useState } from 'react';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Image,
  Image as ImageNextUI,
} from '@nextui-org/react';
import { GetStaticPaths, GetStaticProps } from 'next';
import confetti from 'canvas-confetti';

import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { getPokemonInfo, localFavorite } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
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
    <Layout title='Pokemon Page by Name'>
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

export default PokemonByNamePage;

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const pokemonNames: string[] = data.results.map((pokemon) => pokemon.name);

  return {
    paths: pokemonNames.map((name) => ({
      params: { name },
    })),
    // show 404 if id not exists
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { name } = ctx.params as { name: string };

  return {
    props: {
      pokemon: await getPokemonInfo(name),
    },
  };
};
