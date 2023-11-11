import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

const CustomNavbar = () => {
  return (
    <Navbar maxWidth='full'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>Pokemon</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem isActive>
          <Link color='foreground' href='#'>
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='#' aria-current='page'>
            Customers
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden md:flex font-bold'>
          <Link className='text-danger' href='#'>
            Favoritos
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default CustomNavbar;
