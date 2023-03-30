import React, { useState, useEffect } from "react";
import Theme from "./style/Theme";
import styled from "styled-components";

import Header from "./components/Header";
import Phrases from "./components/Phrases";
import { getFrase } from "./utils/functions";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [category, setCategory] = useState("random");
  const [frasi, setFrasi] = useState([]);

  useEffect(() => generateNew(category, frasi, setFrasi), []);

  return (
    <Theme>
      <Container>
        <Header category={category} />
        <Phrases frasi={frasi} generateNew={() => generateNew(category, frasi, setFrasi)} />
      </Container>
    </Theme>
  );
};

const generateNew = (category, frasi, setFrasi) => {
    let loading = true;
    const _category = category === "random" ? undefined : category;

    setFrasi([...frasi, "Loading..."]);
    getFrase(_category).then((res) => {
      if (loading) {
        setFrasi([...frasi, res]);
      }
    });

    return () => (loading = false);
};

export default App;
