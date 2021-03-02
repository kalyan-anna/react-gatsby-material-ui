import { Grid, makeStyles, styled } from '@material-ui/core';
import { blue, green } from '@material-ui/core/colors';
import {
  borders,
  compose,
  palette,
  shadows,
  sizing,
  spacing,
} from '@material-ui/system';

import { CenterPile } from '../CenterPile/CenterPile';
import { ComputerPile } from '../ComputerPile/ComputerPile';
import { HumanPile } from '../HumanPile/HumanPile';
import { PrimaryButton } from '@ui';
import React from 'react';

const BoardContainer = styled(Grid)(
  compose(sizing, borders, spacing, palette, shadows),
);
BoardContainer.defaultProps = {
  maxWidth: ['95%', '85%', '85%', '60%'],
  minHeight: ['300px', '500px'],
  maxHeight: ['800px'],
  bgcolor: green[500],
  my: 6,
  boxShadow: 5,
  borderRadius: 15,
  borderColor: blue[200],
  border: 2,
  p: 2,
};

const useStyles = makeStyles(() => ({
  center: {
    textAlign: 'center',
  },
  fullHeight: {
    height: '100%',
  },
}));

export const Board = () => {
  const classes = useStyles();

  return (
    <BoardContainer
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
      spacing={1}
    >
      <Grid item style={{ flexGrow: 2 }}>
        <Grid
          container
          alignContent="center"
          direction="row"
          justify="space-around"
          alignItems="stretch"
          spacing={1}
          className={classes.fullHeight}
        >
          <Grid item xs={12} md={4} className={classes.center}>
            <ComputerPile />
          </Grid>
          <Grid item xs={12} md={4} className={classes.center}>
            <CenterPile />
          </Grid>
          <Grid item xs={12} md={4} className={classes.center}>
            <HumanPile />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction="row" justify="center" spacing={3}>
          <Grid item xs={12} sm={4} className={classes.center}>
            <PrimaryButton size="medium" mx="auto">
              New Game
            </PrimaryButton>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.center}>
            <PrimaryButton size="medium">Setting</PrimaryButton>
          </Grid>
          <Grid item xs={12} sm={4} className={classes.center}>
            <PrimaryButton size="medium">Rules</PrimaryButton>
          </Grid>
        </Grid>
      </Grid>
    </BoardContainer>
  );
};
