import { blue, red } from '@material-ui/core/colors';

import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600],
      light: blue[300],
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
