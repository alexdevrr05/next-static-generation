import { Image } from '@nextui-org/react';

type Props = {};

const NoFavorites = (props: Props) => {
  return (
    <div>
      <div
        className='flex flex-col w-full justify-center items-center gap-4'
        style={{ height: 'calc(100vh - 100px)' }}
      >
        <h1 className='text-2xl font-bold'>No pokemons exist</h1>
        <div className='opacity-20'>
          <Image
            width={200}
            alt='No pokemons exist'
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg'
          />
        </div>
      </div>
    </div>
  );
};

export default NoFavorites;
