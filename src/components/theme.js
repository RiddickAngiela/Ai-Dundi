import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
    // Theme customization goes here as usual, including tonalOffset and/or
    // contrastThreshold as the augmentColor() function relies on these
  });

const customTheme = createTheme(theme, {
    palette: {
      black: theme.palette.augmentColor({
        color: {
          main: grey[900],
        },
        name: "black",
      }),
    },
  });


  customTheme.typography.h1 = {
    fontSize: 50,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "black",
    letterSpacing: "1px",
  };
  
  customTheme.typography.h3 = {
    fontSize: 25,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "black",
    letterSpacing: "1px",
  };
  
  customTheme.typography.h4 = {
    fontSize: 15,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "black",
    letterSpacing: "1px",
  };
  
  customTheme.typography.h5 = {
    fontSize: 14,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "white",
    letterSpacing: "1px",
  };
  
  customTheme.typography.h6 = {
    fontSize: 15,
    fontWeight: 600,
    textTransform: "capitalize",
    color: "dark-gray",
    letterSpacing: "1px",
    lineHeight: 1.5,
  };

  export default customTheme;