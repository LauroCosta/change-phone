import React from "react";
import { AppBar as MuiAppBar, Box, Toolbar, Button} from "@material-ui/core";
import close from "../../assets/icons/close.svg";
import "./style.scss";

import { useHistory } from "react-router-dom";
import companyLogo from "../../assets/logo.svg";
import { useStyles } from "./AppBar.style";


interface AppBarProps {
  homeRoute: string;
  action?: React.ReactNode;
}

export const AppBar: React.FC<AppBarProps> = ({
  homeRoute,
  action,
}: AppBarProps) => {
  const style = useStyles();
  const history = useHistory();

  const onLogoClick = () => history.push(homeRoute);

  return (
    <MuiAppBar color="primary" position="relative">
      <Toolbar className={style.toolbar}>
        <Box className={style.logo}>
          <img src={companyLogo} onClick={onLogoClick} alt="logo" />
        </Box>
        {action}

        <button className="closeButton">
          <img src={close} alt="fechar" />
          Cancelar
        </button>
      </Toolbar>
    </MuiAppBar>
  );
};