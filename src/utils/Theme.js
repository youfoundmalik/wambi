import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#172955" },
    secondary: { main: "#CBA01E" },
  },
  spacing: 5,
  typography: {
    fontFamily: [
      "Gordita",
      "Arial",
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    h1: {
      fontSize: "55px",
      lineHeight: "65px",
      fontWeight: 700,
    },
    h2: {
      fontSize: "36px",
      lineHeight: "50px",
      fontWeight: 700,
    },
    h3: {
      fontSize: "30px",
      lineHeight: "42px",
      fontWeight: 700,
    },
    h6: {
      fontSize: "22px",
      lineHeight: "35px",
    },
  },
});

export default theme;
