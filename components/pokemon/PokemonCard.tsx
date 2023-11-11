import { FC } from 'react';
import { SmallPokemon } from '@/interfaces';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  return (
    <Card
      shadow='sm'
      key={pokemon.id}
      isPressable
      onPress={() => console.log('item pressed')}
    >
      <CardBody className='overflow-visible p-0'>
        <Image
          shadow='sm'
          radius='lg'
          width='100%'
          alt={`${pokemon.name}-img`}
          className='w-full object-cover h-[240px]'
          src={pokemon.img}
        />
      </CardBody>
      <CardFooter className='text-small justify-between'>
        <b className='capitalize'>{pokemon.name}</b>
        <p className='text-default-500'>#{pokemon.id}</p>
      </CardFooter>
    </Card>
  );
};

export default PokemonCard;
