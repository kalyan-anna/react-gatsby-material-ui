import { Grid } from '@material-ui/core';
import React from 'react';
import { StyledPile } from '@ui';

export const CenterPile = () => {
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <div></div>
      </Grid>
      <Grid item xs={6} md={12}>
        <StyledPile />
      </Grid>
      <Grid item xs={3} md={12}></Grid>
    </Grid>
  );
};
