import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(true);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header style={{ position: "relative" }}>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">SaleSale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">MenMen</NavLink>
          <NavLink href="/women">WomenWomen</NavLink>
          <NavLink href="/kids">KidsKids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>

        <Side>
          <MenuIconWrapper>
            <Icon id="shopping-bag" />
            <Icon id="search" />
            <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
          </MenuIconWrapper>
        </Side>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      ></MobileMenu>
    </header>
  );
};

const MenuIconWrapper = styled.div`
  display: none;
  @media ${(props) => props.theme.QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
    margin-left: auto;
    justify-content: flex-end;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  @media ${(props) => props.theme.QUERIES.phoneAndDown} {
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.5vw - 4rem, 3rem);
  margin: 0px 48px;
  overflow: auto;
  @media ${(props) => props.theme.QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
