import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { QUERIES } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <ReverseWrapper>
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
      <Header />
    </ReverseWrapper>
  );
};

const ReverseWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.desktopAndSmaller} {
  }
  @media ${QUERIES.talbletAndSmaller} {
    padding: 48px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`;

export default App;
