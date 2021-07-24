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
    height: "8.313rem",
    padding: "1.313rem 1rem",
  },

  description: {
    fontSize: "1.25rem",
    color: colors.primary.main,
    fontWeight: 700,
    fontFamily: "Roboto, sans-serif",
    lineHeight: "1.25rem",
  },

  infoPhone: {  
    fontSize: "0.875rem",
    color: colors.primary.main,
    lineHeight: "1rem",
    fontWeight: 500,
    fontFamily: "Roboto, sans-serif",
    margin: "1.75rem 0",
  },

  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "1rem",
  },

  test: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    padding: "1rem 1rem 1.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "23.83rem",    
  },


  button: {

    borderRadius: "10px",
    textTransform: "capitalize",

    
  },

  iconButton: {

  }
});