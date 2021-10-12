import { Stack } from "@mui/material";
import React from "react";
import { ThemeConsumer } from "styled-components";
import Switch from "@mui/material/Switch";

export default function ToggleMode() {
  return (
    <ThemeConsumer>
      {(theme) => (
        <Stack
          onClick={(e) =>
            theme.setTheme(
              theme.mode === "dark"
                ? { ...theme, mode: "light" }
                : { ...theme, mode: "dark" }
            )
          }
        >
          <Switch defaultChecked />
        </Stack>
      )}
    </ThemeConsumer>
  );
}
