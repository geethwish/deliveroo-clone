import { createTheme } from "@mui/material";
import { themeColors } from "../constants/colors";
import { red } from "@mui/material/colors";

// create themes and color palette
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
