import { FC, ReactNode } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: String;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
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
