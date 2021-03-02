import { Box, Theme, withStyles } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

export const PlayerTurn = withStyles((theme: Theme) => ({
  root: {
    textShadow: '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)',
    fontWeight: 600,
    color: blue[700],
    [theme.breakpoints.up('xs')]: {
      fontSize: '.70rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
  },
}))(Box);
