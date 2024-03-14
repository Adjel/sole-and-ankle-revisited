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
      <DismissButon onClick={onDismiss}>
        <X />
      </DismissButon>
      <Spacer />
      <MobileNav>
        <NavLink href="/sale">Sale</NavLink>
        <NavLink href="/new">New&nbsp;Releases</NavLink>
        <NavLink href="/men">Men</NavLink>
        <NavLink href="/women">Women</NavLink>
        <NavLink href="/kids">Kids</NavLink>
        <NavLink href="/collections">Collections</NavLink>
      </MobileNav>
      <Spacer>
        <PolicyFooter>
          <PolicyLink href="/terms">Terms and Conditions</PolicyLink>
          <PolicyLink href="/privacy">Privacy Policy</PolicyLink>
          <PolicyLink href="/contact">Contact Us</PolicyLink>
        </PolicyFooter>
      </Spacer>
    </Dialog>
  );
};

const Dialog = styled(DialogOverlay)`
  position: fixed;
  background-color: white;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  width: 85%;
  height: 100%;
  padding-left: 32px;
  padding-bottom: 32px;

  :root {
    --reach-dialog: 1;
  }
`;

const DismissButon = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
  padding: 26px 16px 0 0;
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
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

const PolicyFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
`;

const PolicyLink = styled.a`
  color: ${COLORS.gray[700]};
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
`;

const Spacer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: colum;
  align-items: flex-end;
`;

export default MobileMenu;
