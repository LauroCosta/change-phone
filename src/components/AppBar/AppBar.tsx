import React from "react";
import { AppBar as MuiAppBar, Box, Toolbar, TextField, Button, Icon } from "@material-ui/core";
import {CloseRounded} from "@material-ui/icons";


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

        <Button 
          className={style.button}
          variant="contained" 
          startIcon={<CloseRounded />}
        >Cancelar</Button>
      </Toolbar>



    </MuiAppBar>
  );
};