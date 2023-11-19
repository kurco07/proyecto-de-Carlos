import React from "react";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";

export const AppMui = ({ children }) => {
  const tema = createTheme({
    palette: {
      mode: "light",
    },
  });

  return <ThemeProvider theme={tema}>{children}</ThemeProvider>;
};

export default AppMui;
