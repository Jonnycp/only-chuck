import React, { useState, useEffect } from "react";
import Theme from "./style/Theme";
import styled from "styled-components";

import Header from "./components/Header";
import Phrases from "./components/Phrases";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [category, setCategory] = useState("random");

  return (
    <Theme>
      <Container>
        <Header category={category} />
        <Phrases category={category} />
      </Container>
    </Theme>
  );
};

export default App;
