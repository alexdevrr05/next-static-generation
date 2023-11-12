import { FC } from 'react';
import { SmallPokemon } from '@/interfaces';
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
  pokemon: SmallPokemon;
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${pokemon.id}`);
  };

  return (
    <Card shadow='sm' key={pokemon.id} isPressable onPress={onClick}>
      <CardBody className='overflow-visible p-0'>
        <Image
          radius='lg'
          width='100%'
          alt={`${pokemon.name}-img`}
          className='w-full object-cover max-h-[300px]'
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
