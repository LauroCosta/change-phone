import { makeStyles } from "@material-ui/core";
import {colors} from "./config/theme"
export const useStyles = makeStyles({
  root: {
    background: "red",
  },

  container: {
    background: colors.background,
    height: "100vh",
    padding: "0",
  },

  content: {
    padding: "1rem",
  },


  input: {
    marginTop: "4rem",
  },

  info: {
    background: "#f9f9f9",
    height: "20%",
    padding: "1rem",
  },

  description: {
    fontSize: "20px",
    color: colors.primary.main,
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",
    
  },

  infoPhone: {  
    fontSize: "14px",
    color: colors.primary.main,
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1rem",
    margin: "2rem 0",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },

  test: {
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "70%",
  }
});