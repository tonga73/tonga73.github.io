import React from "react";
import {
  createTheme,
  ThemeProvider,
  Typography,
  Container,
  CssBaseline,
  Button,
} from "@mui/material";

import VirtualCurriculum from "./features/virtualCurriculum/VirtualCurriculum";

const theme = createTheme({
  palette: {
    background: {
      default: "#101820",
    },
    primary: {
      main: "#f2aa4c",
    },
    secondary: {
      main: "#101820",
    },
    text: {
      primary: "#101820",
      secondary: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      "Josefin Sans",
      "Nunito",
      "Roboto",
      "Helvetica Neue",
      "Arial",
      "sans-serif",
    ].join(","),
  },
});

function App() {
  return (
    <div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="App"
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <VirtualCurriculum />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
