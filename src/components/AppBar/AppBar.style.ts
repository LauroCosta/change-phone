import {makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  
  appbar: {
    height: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "space-between",
    padding: "1rem",
    boxShadow: "none",
    
  },
  
  cancelButton: {
    marginLeft: "16px",
  },
  logo: {

    width: "80px",
    borderRadius: "0px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
});
