import { createTheme } from "@mui/material";
import { themeColors } from "../constants/colors";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: themeColors.primary,
    },
    secondary: {
      main: themeColors.secondary,
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
