import React, { useState } from "react";
import Theme from "./style/Theme";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header";
import Phrases from "./components/Phrases";
import Footer from "./components/Footer";

const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const App = () => {
  const [category, setCategory] = useState("random");
  const [frasi, setFrasi] = useState(["Scorri per iniziare"]);
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Theme>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <Container>
        <Header category={category} setCategory={setCategory} />
        <Phrases category={category} frasi={frasi} setFrasi={setFrasi} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
        <Footer frase={currentSlide > 0 ? frasi[currentSlide-1] : undefined}/>
      </Container>
    </Theme>
  );
};

export default App;
