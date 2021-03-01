import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#B1FFF0',
      light: 'rgba(177, 255, 240, 0.15)',
    },
    secondary: {
      main: '#FF2FF4',
      light: '#ffacfb',
      superLight: '#ffc1fc',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f9f9f9',
      paper: '#f2f2f2',
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto Mono', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
