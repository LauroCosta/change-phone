import { createTheme} from "@material-ui/core";

export const colors = {
  primary: {
    main: "#323751",
    opacity: "#656982",
  },
  secondary: "#5F82A6",
  background: "#FFFFFF",
  green: "#3FC93C",
  red: "#FF2727",
  textFieldBorder: "#C4C4C4",
};

export const textColors = {
  primary: colors.primary.main,
  gray: "#555555",
};

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
    secondary:{
      main: colors.background,
    },
     
  }
});
