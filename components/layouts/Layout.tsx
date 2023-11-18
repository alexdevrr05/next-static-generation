import { FC, ReactNode } from 'react';
import Head from 'next/head';

import { CustomNavbar } from '../ui';

interface LayoutProps {
  children: ReactNode;
  title?: String;
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const origin = typeof window === 'undefined' ? '' : window.origin;

  return (
    <>
      <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name='author' content='Alex DevRR' />
        <meta
          name='description'
          content={`Information about Pokemon ${title}`}
        />
        <meta name='keyword' content={`${title}, pokemon, pokedex`} />

        {/* Open Graph Meta Tags */}
        <meta
          property='og:title'
          content={`Information about pokemon ${title}`}
        />
        <meta
          property='og:description'
          content={`This page is about the Pokemon ${title}`}
        />
        <meta property='og:image' content={`${origin}/img/banner.jpeg`} />
      </Head>

      <CustomNavbar />
      <main className='px-4 py-4'>{children}</main>
    </>
  );
};

export default Layout;
