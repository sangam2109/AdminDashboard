"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#FCBA28",
    },
    success: {
      main: "#00ff0d",
    },
    error: {
      main: "#ee2400",
    },
    background: {
      default: "#F2EDF3",
    },
  },
});

export default theme;
