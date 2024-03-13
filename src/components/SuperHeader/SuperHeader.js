import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES } from "../../constants";

import SearchInput from "../SearchInput";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";

const SuperHeader = () => {
  return (
    <Wrapper>
      <DesktopWrapper>
        <MarketingMessage>
          Free shipping on domestic orders over $75!
        </MarketingMessage>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <UnstyledButton>
          <Icon id="shopping-bag" strokeWidth={1} />
        </UnstyledButton>
      </DesktopWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  height: 40px;

  @media ${QUERIES.talbletAndUp} {
    height: 4px;
  }
`;

const DesktopWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 24px;
  font-size: 0.875rem;
  padding-left: 32px;
  padding-right: 32px;

  @media ${QUERIES.talbletAndUp} {
    display: none;
  }
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
  margin-right: auto;
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
