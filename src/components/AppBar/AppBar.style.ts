import {makeStyles } from "@material-ui/core";
import {textColors } from "../../config/theme";

export const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "none",
  },
  cancelButton: {
    marginLeft: "16px",
  },
  logo: {
    height: "100%",
    width: "80px",
    borderRadius: "0px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
});
