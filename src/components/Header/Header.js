import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <SmallScreenNav>
          <MobileButton>
            <Icon id={"shopping-bag"} stroke={2} size={24} />
          </MobileButton>
          <MobileButton>
            <Icon id={"search"} stroke={2} size={24} />
          </MobileButton>
          <MobileButton>
            <Icon id={"menu"} stroke={2} size={24} />
          </MobileButton>
        </SmallScreenNav>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.phoneAndUp} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.phoneAndUp} {
    display: none;
  }
`;

const SmallScreenNav = styled.nav`
  display: none;

  @media ${QUERIES.phoneAndUp} {
    display: flex;
    margin: 0;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.phoneAndUp} {
    margin-right: auto;
  }
`;

const MobileButton = styled.button`
  color: ${COLORS.gray[900]};
  background: none;
  border: none;
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
