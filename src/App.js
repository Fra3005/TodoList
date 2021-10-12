import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import InsertItem from "./Components/InsertBox/InsertBox";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import style from "styled-theming";
import useTheme from "./useTheme";
const getBackground = style("mode", {
  light: "#EEE",
  dark: "#111",
});

const getForeground = style("mode", {
  light: "#111",
  dark: "#EEE",
});

const GlobalStyle = createGlobalStyle`body{
  background-color:${getBackground};
  color: ${getForeground};
}`;

function App() {
  const theme = useTheme();

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <InsertItem />
      </ThemeProvider>
    </>
  );
}

export default App;
