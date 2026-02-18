import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Main from "./Main";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
const theme = createTheme({
  palette: {
    primary: { main: "#607d8b" },
    secondary: { main: "#9c27b0" },
    background: { default: "#eceff1" },
    text: { primary: "#333", secondary: "#666" },
  },
});
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
