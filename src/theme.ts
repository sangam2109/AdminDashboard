"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F9F4DA",
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
      default: "#231F20",
    },
  },
});

export default theme;
