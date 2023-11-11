import { Layout } from '@/components/layouts';
import { useRouter } from 'next/router';

const PokemonPage = () => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Layout>
      <h1 className='font-bold'>PokemonPage</h1>
    </Layout>
  );
};

export default PokemonPage;
