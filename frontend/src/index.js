import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { UserContainer } from "./UserContext";
//a very dark theme
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#212121",
    },
    secondary: { main: "#ff9800" },
    // @ts-ignore
    icons: "#602080",
    accent: "#602080",
    text: {
      primary: "#FFFFFF",
      secondary: "#757575",
    },
    divider: "#BDBDBD",
  },
  typography: {
    h4: {
      fontFamily: "Road Rage, cursive",
    },
    h1: {
      fontFamily: "bungee, cursive",
      fontSize: ["1.5rem", "1.5rem", "2.5rem", "2.5rem", "2.5rem"],
    },
    body2: {
      fontFamily: "Road Rage, cursive",
      fontSize: "1.5rem",
    },
  },
});
ReactDOM.render(
  <UserContainer>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UserContainer>,
  document.getElementById("root")
);
