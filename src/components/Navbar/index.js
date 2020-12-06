import React from 'react';

import {FaBars} from 'react-icons/fa';
import {
  NavbarContainer,
  NavbarIcon,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
  NavbarWrapper
} from './Navbar.elements';

function Navbar({scrolled}) {
  return (
    <NavbarWrapper scrolled={scrolled}>
      <NavbarContainer>
        <NavbarLogo src={require("../../images/Logo.svg")} />
        <NavbarIcon>
          <FaBars />
        </NavbarIcon>
        <NavbarMenu >
          <NavbarLink>Projects</NavbarLink>
          <NavbarLink>About</NavbarLink>
          <NavbarLink>Pricing</NavbarLink>
          <NavbarLink>Contact us</NavbarLink>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarWrapper>
  )
}

export default Navbar;