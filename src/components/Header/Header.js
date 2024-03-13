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
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <SmallScreenHeader>
          <Logo />
          <MobileButtonWrapper>
            <MobileButton>
              <Icon id={"shopping-bag"} stroke={2} size={24} />
            </MobileButton>
            <MobileButton>
              <Icon id={"search"} stroke={2} size={24} />
            </MobileButton>
            <MobileButton>
              <Icon id={"menu"} stroke={2} size={24} />
            </MobileButton>
          </MobileButtonWrapper>
        </SmallScreenHeader>
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

  @media ${QUERIES.talbletAndUp} {
    padding: 0 32px;
    align-items: center;
  }
  @media ${QUERIES.phoneAndUp} {
    padding: 0 16px;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.talbletAndUp} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.talbletAndUp} {
    display: none;
  }
`;

const SmallScreenHeader = styled.nav`
  display: none;

  @media ${QUERIES.talbletAndUp} {
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: space-between;
    align-items: center;
  }
`;

const MobileButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${QUERIES.phoneAndUp} {
    gap: 1rem;
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
