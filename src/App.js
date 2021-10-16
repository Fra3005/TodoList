import "./App.css";
import React, { useState, useMemo } from "react";
import InsertItem from "./Components/InsertBox/InsertBox";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SetThemeContextProvider } from "./contexts/SetThemeContext";

function App() {
  const [themeState, setThemeState] = useState("light");

  const setMode = useMemo(
    () => ({
      setTheme: (theme) => {
        setThemeState(theme);
      },
    }),
    []
  );

  const theme = createTheme({
    palette: {
      mode: themeState,
    }
  },[themeState]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <SetThemeContextProvider value={setMode}>
          <InsertItem />
        </SetThemeContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
