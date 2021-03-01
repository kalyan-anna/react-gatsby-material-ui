import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#a3181b',
      light: '#ff8082',
    },
    secondary: {
      main: '#008800',
      light: '#00e000',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto Mono', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
