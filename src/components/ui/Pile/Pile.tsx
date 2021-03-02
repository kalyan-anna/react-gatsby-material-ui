import { Box, Theme, withStyles } from '@material-ui/core';

import { Card } from '@state/snap';
import { PlayingCard } from '../PlayingCard/PlayingCard';
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
  activateLastCard?: boolean;
}

export const Pile: React.FC<PileProps> = ({
  cards,
  activateLastCard = false,
}) => {
  return (
    <StyledPile>
      {cards.map((card, index) => (
        <PlayingCard
          card={card}
          key={card.id}
          position={index}
          active={activateLastCard && index === cards.length - 1 ? true : false}
        />
      ))}
    </StyledPile>
  );
};
