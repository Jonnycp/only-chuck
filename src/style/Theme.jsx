import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyle";

const theme = {
  colors: {
    background: "#151f1f",
    primary: "#d2a741",
    secondary: "#ea596e",
    light: "#FFFFFF",
    dark: "#000000",
  },

  fonts: {
    normal: '"Roboto Condensed", sans-serif',
    logo: '"Readex Pro", sans-serif',
  },
};

const Theme = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

export default Theme;