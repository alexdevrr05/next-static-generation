import { pokeApi } from '@/api';
import { Pokemon } from '@/interfaces';

export const getPokemonInfo = async (param: string) => {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${param}`);
    const { id, name, sprites, stats } = data;

    return {
      id,
      name,
      sprites,
      stats,
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
