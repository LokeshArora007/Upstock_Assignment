import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
/** State Management */
import { StoreProvider } from "easy-peasy";
import store from "./state/store";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
// Material-ui import
import theme from "./theme";

ReactDOM.render(
  /**
   * @desc Provides a store for easy peasy state management
   */
  <StoreProvider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        >
        <App />
      </CssBaseline>
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
