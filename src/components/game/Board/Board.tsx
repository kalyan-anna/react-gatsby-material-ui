import { FlexContainer, FlexItem, PrimaryButton } from '@ui';
import { Grid, styled } from '@material-ui/core';
import {
  borders,
  compose,
  display,
  flexbox,
  palette,
  shadows,
  sizing,
  spacing,
} from '@material-ui/system';
import { green, grey } from '@material-ui/core/colors';

import { CenterPile } from '../CenterPile/CenterPile';
import { ComputerPile } from '../ComputerPile/ComputerPile';
import { HumanPile } from '../HumanPile/HumanPile';
import React from 'react';

const BoardContainer = styled(Grid)(
  compose(sizing, borders, spacing, palette, flexbox, shadows, display),
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
};

export const Board = () => {
  return (
    <BoardContainer>
      <Grid item container alignContent="center" style={{ flexGrow: 2 }}>
        <FlexItem item xs={12} md={4}>
          <ComputerPile />
        </FlexItem>
        <FlexItem item xs={12} md={4}>
          <CenterPile />
        </FlexItem>
        <FlexItem item xs={12} md={4}>
          <HumanPile />
        </FlexItem>
      </Grid>

      <FlexContainer mx={[0, 3]}>
        <FlexItem xs={12} md={4} my={[1, 0]}>
          <PrimaryButton>New Game</PrimaryButton>
        </FlexItem>
        <FlexItem xs={12} md={4} my={[1, 0]}>
          <PrimaryButton>Setting</PrimaryButton>
        </FlexItem>
        <FlexItem xs={12} md={4} my={[1, 0]}>
          <PrimaryButton>Rules</PrimaryButton>
        </FlexItem>
      </FlexContainer>
    </BoardContainer>
  );
};
