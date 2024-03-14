import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
import { QUERIES } from "../../constants";

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <Test>
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
      <Header />
    </Test>
  );
};

const Test = styled.div`
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
