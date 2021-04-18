import styled from "styled-components";

export const NavbarWrapper = styled.div`
  position: ${({ scrolled }) => (scrolled ? "fixed" : "absolute")};
  height: ${({ scrolled }) => (scrolled ? "80px" : "100px")};
  width: 100%;
  z-index: 10;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ scrolled }) => (scrolled ? "#36404B" : "transparent")};
`;

export const NavbarContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1300px;
  margin: 0 30px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarLogo = styled.img`
  max-height: 35px;
  width: 200px;

  display: flex;
  justify-self: left;
  height: 40%;
`;

export const NavbarIcon = styled.div`
  display: none;

  @media screen and (max-width: 760px) {
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;

    display: flex;
    justify-self: left;
  }
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-self: right;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavbarLink = styled.a`
  margin: 0 14px;

  font-family: "Titillium Web", "Encoded Sans Expanded", sans-serif;
  border-bottom: 2px solid rgba(255, 255, 255, 0);
  font-size: 18px;
  color: #fff;

  transition: all 0.2s ease-in-out;

  &.active,
  &:hover {
    border-bottom: 2px solid rgba(255, 255, 255, 0.8);
  }
`;
