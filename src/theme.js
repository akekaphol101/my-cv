import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0e0f14",
      paper: "#141620",
    },
    primary: {
      main: "#8b5cf6", // purple-violet accent
    },
    secondary: {
      main: "#14b8a6", // teal accent
    },
    text: {
      primary: "#e2e8f0",
      secondary: "#94a3b8",
    },
    divider: "#1e293b",
  },
  typography: {
    fontFamily: "'Inter', 'Prompt', sans-serif",
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
  },
});

export default theme;
