import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pokemon App</title>
        <meta name='author' content='Alex DevRR' />
        <meta name='description' content='Information about pokemon XXXX' />
        <meta name='keyword' content='XXXX, pokemon, pokedex' />
      </Head>

      {/* Navbar */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
