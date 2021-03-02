import { Grid, styled } from '@material-ui/core';
import {
  borders,
  compose,
  palette,
  shadows,
  sizing,
  spacing,
} from '@material-ui/system';
import { green, grey } from '@material-ui/core/colors';

import { CenterPile } from '../CenterPile/CenterPile';
import { ComputerPile } from '../ComputerPile/ComputerPile';
import { HumanPile } from '../HumanPile/HumanPile';
import { PrimaryButton } from '@ui';
import React from 'react';

const BoardContainer = styled(Grid)(
  compose(sizing, borders, spacing, palette, shadows),
);
BoardContainer.defaultProps = {
  width: ['95%', '90%', '85%', '75%'],
  minHeight: ['300px', '500px'],
  maxHeight: ['800px'],
  bgcolor: green[500],
  my: 6,
  boxShadow: 5,
  borderRadius: 15,
  borderColor: grey[200],
  border: 2,
  p: 2,
};

export const Board = () => {
  return (
    <BoardContainer
      container
      direction="column"
      justify="flex-start"
      alignItems="stretch"
    >
      <Grid item container alignContent="center" style={{ flexGrow: 2 }}>
        <Grid item xs={12} md={4}>
          <ComputerPile />
        </Grid>
        <Grid item xs={12} md={4}>
          <CenterPile />
        </Grid>
        <Grid item xs={12} md={4}>
          <HumanPile />
        </Grid>
      </Grid>

      <Grid container direction="row" justify="center" alignItems="center">
        <PrimaryButton>New Game</PrimaryButton>
        <PrimaryButton>Setting</PrimaryButton>
        <PrimaryButton>Rules</PrimaryButton>
      </Grid>
    </BoardContainer>
  );
};
