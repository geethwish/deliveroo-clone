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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          border: "1px solid #e8ebeb",
          marginRight: "20px",
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
