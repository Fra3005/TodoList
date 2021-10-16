import React from "react";
import Switch from "@mui/material/Switch";
import { useSetThemeContext } from "./contexts/SetThemeContext";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import IconButton from "@mui/material/IconButton";

export default function ToggleMode() {
  const { setTheme } = useSetThemeContext();
  const theme = useTheme();

  const toggleColorMode = () => {
    if (theme.palette.mode === "dark") {
      setTheme("light");
     
      
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </>
  );
}
