import React from "react";
import { AppBar as MuiAppBar, Box, Toolbar} from "@material-ui/core";
import close from "../../assets/icons/close.svg";
import "./style.scss";

import companyLogo from "../../assets/logo.svg";
import { useStyles } from "./AppBar.style";
import { useAlert } from "../../context/AlertContextProvider";

interface AppBarProps {
  action?: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = ({
  action,
}: AppBarProps) => {
  const style = useStyles();
  const {resetModalPassword} = useAlert();

  return (
    <MuiAppBar color="primary" position="relative">
      <Toolbar className={style.toolbar}>
        <Box className={style.logo}>
          <img src={companyLogo} onClick={resetModalPassword} alt="logo" />
        </Box>
        {action}

        <button 
          className="closeButton"
          onClick={resetModalPassword}
        >
          <img src={close} alt="fechar" />
          Cancelar
        </button>
      </Toolbar>
    </MuiAppBar>
  );
};