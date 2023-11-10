import { GetStaticProps, NextPage } from 'next';
import { Layout } from '../components/layouts';

import { pokeApi } from '@/api';

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <Layout title='Pokemon List'>
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get('/pokemon?limit=151');

  return {
    props: {
      pokemons: data.results,
    },
  };
};

export default Home;
