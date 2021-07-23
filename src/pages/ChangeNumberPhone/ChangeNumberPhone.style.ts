import { makeStyles } from "@material-ui/core";
import {colors} from "../../config/theme"
export const useStyles = makeStyles({
  root: {
    background: "red",
  },

  container: {
    position: "relative",
    background: colors.background,
    height: "100vh",
    overflow: "hidden",
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
    fontSize: "1.5rem",
    color: colors.primary.main,
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",
    
  },

  infoPhone: {  
    fontSize: "1.25rem",
    color: colors.primary.main,
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1.5rem",
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
  },


  button: {

    borderRadius: "10px",
    textTransform: "capitalize",

    
  },

  iconButton: {

  }
});