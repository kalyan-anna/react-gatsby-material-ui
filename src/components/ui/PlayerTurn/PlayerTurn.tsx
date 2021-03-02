import { Box, withStyles } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

export const PlayerTurn = withStyles({
  root: {
    textShadow: '0 0 15px rgba(255,255,255,.5), 0 0 10px rgba(255,255,255,.5)',
    fontWeight: 600,
    color: blue[700],
  },
})(Box);
