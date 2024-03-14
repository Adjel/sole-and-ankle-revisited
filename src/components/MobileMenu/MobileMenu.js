/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { X } from "react-feather";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Dialog>
      <Content aria-label="Menu">
        <DismissButon onClick={onDismiss}>
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
          <X />
        </DismissButon>
        <Spacer />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <PolicyLink href="/terms">Terms and Conditions</PolicyLink>
          <PolicyLink href="/privacy">Privacy Policy</PolicyLink>
          <PolicyLink href="/contact">Contact Us</PolicyLink>
        </Footer>
      </Content>
    </Dialog>
  );
};

const Dialog = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: var(--color-backdrop);
  display: flex;
  justify-content: flex-end;

  :root {
    --reach-dialog: 1;
  }
`;

const Content = styled(DialogContent)`
  background-color: white;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const DismissButon = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  align-self: flex-end;
  top: 16px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const PolicyLink = styled.a`
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`;

const Spacer = styled.div`
  flex: 1;
`;

export default MobileMenu;
