import { useRouter } from 'next/router';
import { Card, CardBody, Image } from '@nextui-org/react';

type Props = {
  pokemonId: number;
};

const FavoritePokemonCard = ({ pokemonId }: Props) => {
  const router = useRouter();

  const onClick = () => router.push(`/pokemon/${pokemonId}`);

  return (
    <Card key={pokemonId} isPressable onPress={onClick}>
      <CardBody className='overflow-visible py-2 items-center'>
        <Image
          alt={`Pokemon Fav ${pokemonId}`}
          className='object-cover rounded-xl w-full h-48'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
        />
      </CardBody>
    </Card>
  );
};

export default FavoritePokemonCard;
