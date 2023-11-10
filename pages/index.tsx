import { Button } from '@nextui-org/react';
import { Layout } from '../components/layouts';

export default function Home() {
  return (
    <Layout>
      <main className='mx-2 my-2'>
        <h1 className='text-3xl font-bold mb-2'>Hello world</h1>
        <Button color='primary'>
          <h1>Button</h1>
        </Button>
      </main>
    </Layout>
  );
}
