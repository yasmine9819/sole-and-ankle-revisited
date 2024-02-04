import React from "react";
import styled from "styled-components/macro";
import { ThemeProvider } from "styled-components";

import Header from "../Header";
import ShoeIndex from "../ShoeIndex";
const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
};

const theme = {
  QUERIES: {
    phoneAndDown: `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
    tabletAndDown: `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
    laptopAndDown: `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
  },
};

const App = () => {
  const [sortId, setSortId] = React.useState("newest");

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </ThemeProvider>
  );
};

const Main = styled.main`
  padding: 64px 32px;
`;

export default App;
