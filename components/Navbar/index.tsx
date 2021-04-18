import { useEffect, useState } from "react";
import Link from "next/link";

import { FaBars } from "react-icons/fa";

import {
  NavbarContainer,
  NavbarIcon,
  NavbarLink,
  NavbarLogo,
  NavbarMenu,
  NavbarWrapper,
} from "./Navbar.module";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const changeScrolling = () => {
    setScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    changeScrolling();
    window.addEventListener("scroll", changeScrolling);
  }, []);

  return (
    <NavbarWrapper scrolled={scrolled}>
      <NavbarContainer>
        <NavbarLogo src={require("../../images/logo.svg")} />
        <NavbarIcon>
          <FaBars />
        </NavbarIcon>
        <NavbarMenu>
          <Link href={"/projects"}>
            <NavbarLink>Projects</NavbarLink>
          </Link>
          <Link href={"/about"}>
            <NavbarLink>About</NavbarLink>
          </Link>
          <Link href={"/pricing"}>
            <NavbarLink>Pricing</NavbarLink>
          </Link>
          <Link href={"/contactUs"}>
            <NavbarLink>Contact us</NavbarLink>
          </Link>
        </NavbarMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
}
