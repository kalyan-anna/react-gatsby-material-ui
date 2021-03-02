import { Avatar, Pile, PlayerTurn, SnapBubble, WinnerBubble } from '@ui';

import { Grid } from '@material-ui/core';
import { PACK_OF_CARDS } from '@state/snap';
import React from 'react';

export const HumanPile = () => {
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <Avatar type="human" name="You" />
      </Grid>
      <Grid item xs={6} md={12}>
        <Pile cards={PACK_OF_CARDS} type="human" />
      </Grid>
      <Grid item xs={3} md={12}>
        <SnapBubble />
        <PlayerTurn>Your turn</PlayerTurn>
      </Grid>
    </Grid>
  );
};
