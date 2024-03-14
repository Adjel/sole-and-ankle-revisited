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
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <Side />
        <SmallScreenHeader>
          <Logo />
          <MobileActions>
            <UnstyledButton>
              <Icon id={"shopping-bag"} stroke={2} size={24} />
            </UnstyledButton>
            <UnstyledButton>
              <Icon id={"search"} stroke={2} size={24} />
            </UnstyledButton>
            <UnstyledButton onClick={setShowMobileMenu}>
              <Icon id={"menu"} stroke={2} size={24} />
            </UnstyledButton>
          </MobileActions>
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

  overflow: auto;
  overflow-y: hidden;

  @media ${QUERIES.talbletAndSmaller} {
    padding: 0 32px;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 0 16px;
    align-items: center;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(3rem, 9.1vw - 2.75rem, 5rem);
  margin: 0px 48px;

  @media ${QUERIES.talbletAndSmaller} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.talbletAndSmaller} {
    display: none;
  }
`;

const SmallScreenHeader = styled.nav`
  display: none;

  @media ${QUERIES.talbletAndSmaller} {
    display: flex;
    width: 100%;
    margin: 0;
    justify-content: space-between;
    align-items: center;
  }
`;

const MobileActions = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media ${QUERIES.phoneAndSmaller} {
    gap: 1rem;
  }
`;

const UnstyledButton = styled.button`
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
