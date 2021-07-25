import React from 'react';
import {Router} from "../Router";
import { ThemeProvider } from '@material-ui/core';
import { theme } from "../../config/theme";
import "../../style/global.scss";
import { AlertContextProvider } from '../../hooks/useAlert';

export const App: React.FC = () => {
  return (
    <AlertContextProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </AlertContextProvider>

  );
}