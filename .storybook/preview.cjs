import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import GlobalStyle from "../src/style/GlobalStyle";
import {themeObj as theme} from "../src/style/theme";
import {ThemeProvider} from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyle,
    themes: {
      theme
    },
    Provider: ThemeProvider,
  }),
];
