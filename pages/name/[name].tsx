import { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from '@nextui-org/react';

import { pokeApi } from '@/api';
import { Layout } from '@/components/layouts';
import { Pokemon, PokemonListResponse } from '@/interfaces';
import { getPokemonInfo } from '@/utils';

interface Props {
  pokemon: Pokemon;
}

const textPokemonInfo = 'text-2xl font-semibold';

const PokemonByNamePage: FC<Props> = ({ pokemon }) => {
  return (
    <Layout title='Pokemon Page by Name'>
      <div
        className='flex flex-col  w-full justify-center items-center'
        style={{ height: 'calc(100vh - 100px)' }}
      >
        <Card className='min-w-[400px]'>
          <CardHeader className='flex gap-3'>
            <Image
              alt='pokemon logo'
              height={70}
              radius='sm'
              src={pokemon.sprites.front_default}
              width={70}
            />
            <div className='flex flex-col'>
              <p className='text-md font-bold capitalize'>{pokemon.name}</p>
              <p className='text-small text-default-500'>alexdevrr05</p>
            </div>
          </CardHeader>
          <Divider />

          <CardBody>
            <p className={textPokemonInfo}>
              Weight:{' '}
              <span className='font-thin font-sm'>{pokemon.weight}kg</span>
            </p>
            <span className={textPokemonInfo}>Abilities:</span>
            <ul className=''>
              {pokemon.stats.map((stat, i) => {
                return (
                  <li className='capitalize' key={i}>
                    {stat.stat.name}
                  </li>
                );
              })}
            </ul>
          </CardBody>
          <CardFooter>
            <Link
              isExternal
              showAnchorIcon
              href={`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`}
            >
              Visit more information.
            </Link>
          </CardFooter>
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
