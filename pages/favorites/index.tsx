import { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts';
import { NoFavorites } from '@/components/ui';
import { FavoritePokemons } from '@/components/pokemon';

import localStorageFavorite from '@/utils/localStorageFavorite';

const Favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localStorageFavorite.pokemons);
  }, []);

  return (
    <Layout title='Favorites-pokemons'>
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons pokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default Favorites;
