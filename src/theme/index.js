import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#00c5ff',
    },
    secondary: {
      main: '#ffea00',
    },
    background: {
      default: 'rgb(0, 30, 60)',
      paper: '#424242',
    },
    text: {
      primary: '#ffffff',
    },
    divider: '#263238',
  },
  text: {
    primary: '#ffffff',
    secondary: 'rgba(255,255,255,0.69)',
    disabled: 'rgba(255,255,255,0.49)',
    hint: 'rgba(255,255,255,0.49)',
  },
  error: {
    main: '#f44336',
    light: 'rgb(246, 104, 94)',
    contrastText: '#fff',
  },
});

// const Theme = responsiveFontSizes(theme);

export default theme;

