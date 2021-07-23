import React from 'react';
import {Router} from "../Router";
import { ThemeProvider } from '@material-ui/core';
import { theme } from "../../config/theme";
import "../../style/global.scss";

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}