import { createTheme } from "@mui/material";
import { themeColors } from "../constants/colors";
import { orange, red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: { main: themeColors.primary },
    secondary: {
      main: themeColors.secondary,
    },
    error: {
      main: red[100],
    },
  },
});

export default theme;
