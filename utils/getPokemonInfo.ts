import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (param: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);

  const { id, name, sprites, stats } = data;

  return {
    id,
    name,
    sprites,
    stats,
  };
};
