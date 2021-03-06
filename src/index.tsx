import React from 'react';
import ReactDOM from 'react-dom';
import { App } from "../src/components/App";
import { CssBaseline, ThemeProvider} from '@material-ui/core';
import { theme } from "./config/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
