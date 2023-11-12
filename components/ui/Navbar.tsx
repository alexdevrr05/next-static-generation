import NextJSLink from 'next/link';

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';

const CustomNavbar = () => {
  return (
    <Navbar maxWidth='full'>
      <NavbarBrand>
        <NextJSLink href='/' className='font-bold text-inherit'>
          Home
        </NextJSLink>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <NextJSLink color='foreground' href='#'>
            Features
          </NextJSLink>
        </NavbarItem>
        <NavbarItem>
          <NextJSLink href='#' aria-current='page'>
            Customers
          </NextJSLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden md:flex font-bold'>
          <NextJSLink className='text-danger' href='/favorites'>
            Favorites
          </NextJSLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
