import { Pokemon } from '@/interfaces';

export const pokemonDataReturn = (pokemonData: Pokemon) => {
  const { id, name, sprites, stats } = pokemonData;

  return {
    id,
    name,
    sprites,
    stats,
  };
};
