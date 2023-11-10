import { Button } from '@nextui-org/react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Pokemon static' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='mx-2 my-2'>
        <h1 className='text-3xl font-bold mb-2'>Hello world</h1>
        <Button color='primary'>
          <h1>Button</h1>
        </Button>
      </main>
    </>
  );
}
