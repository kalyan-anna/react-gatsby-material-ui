import { Box, Theme, withStyles } from '@material-ui/core';

import { Card } from '@state/snap';
import React from 'react';
import { grey } from '@material-ui/core/colors';

export const StyledPile = withStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    position: 'relative',
    backgroundColor: grey[500],
    boxShadow: `inset 0 0 10px ${grey[900]}`,
    borderRadius: '25px',
    [theme.breakpoints.up('xs')]: {
      height: '150px',
      width: '100px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '200px',
      width: '150px',
    },
    [theme.breakpoints.up('md')]: {
      height: '300px',
      width: '200px',
    },
  },
}))(Box);

interface PileProps {
  cards: Card[];
}

export const Pile: React.FC<PileProps> = ({ cards }) => {
  return <StyledPile></StyledPile>;
};
