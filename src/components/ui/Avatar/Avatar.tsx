import { Grid, makeStyles } from '@material-ui/core';

import React from 'react';
import ReactAvatar from '@material-ui/core/Avatar';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  center: {
    textAlign: 'center',
  },
  name: {
    fontWeight: 600,
    color: grey[900],

    textShadow:
      '2px 8px 6px rgba(0,0,0,0.2), 0px -5px 35px rgba(255,255,255,0.3)',
  },
}));

interface AvatarProps {
  type: 'human' | 'computer';
  name: string;
}

export const Avatar: React.FC<AvatarProps> = ({ type, name }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item className={classes.center}>
        <ReactAvatar
          alt={type}
          src={`/images/avatars/${type}.png`}
          sizes="la"
          className={classes.large}
        />
      </Grid>
      <Grid item className={classes.center}>
        <div className={classes.name}>{name}</div>
      </Grid>
    </Grid>
  );
};
