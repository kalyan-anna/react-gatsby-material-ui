import { Avatar, Pile } from '@ui';

import { Grid } from '@material-ui/core';
import React from 'react';

export const HumanPile = () => {
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <Avatar type="human" name="You" />
      </Grid>
      <Grid item xs={6} md={12}>
        <Pile cards={[]} />
      </Grid>
      <Grid item xs={3} md={12}></Grid>
    </Grid>
  );
};
