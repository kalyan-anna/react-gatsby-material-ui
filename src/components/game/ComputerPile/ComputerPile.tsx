import { Avatar, Pile, PlayerTurn, SnapBubble, WinnerBubble } from '@ui';

import { Grid } from '@material-ui/core';
import { PACK_OF_CARDS } from '@state/snap';
import React from 'react';

export const ComputerPile = () => {
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <Avatar type="computer" name="Computer" />
      </Grid>
      <Grid item xs={6} md={12}>
        <Pile cards={PACK_OF_CARDS} />
      </Grid>
      <Grid item xs={3} md={12}>
        <Grid
          container
          spacing={2}
          justify="center"
          alignItems="center"
          direction="column"
        >
          <SnapBubble />
          <PlayerTurn>Computer's turn</PlayerTurn>
        </Grid>
      </Grid>
    </Grid>
  );
};
