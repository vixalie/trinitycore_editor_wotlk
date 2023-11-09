import { createTheme } from "@mantine/core";

export const theme = createTheme({
  colors: {
    "light-blue": [
      "#e0fbff",
      "#cbf2ff",
      "#9ae2ff",
      "#64d2ff",
      "#3cc5fe",
      "#23bcfe",
      "#09b8ff",
      "#00a1e4",
      "#0090cd",
      "#007cb5",
    ],
    "blue-gray": [
      "#f1f3f8",
      "#e1e3ea",
      "#c0c5d6",
      "#9ca5c2",
      "#7e89b2",
      "#6a78a8",
      "#6070a5",
      "#505f90",
      "#465481",
      "#3a4874",
    ],
  },
  primaryColor: "light-blue",
  fontSizes: {
    xs: "0.7rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.8rem",
    xl: "2.4rem",
  },
  spacing: {
    xs: "10px",
    sm: "15px",
    md: "20px",
    lg: "30px",
    xl: "50px",
  },
});
