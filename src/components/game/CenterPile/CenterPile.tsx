import { Card, CardFace, CardSuit, PACK_OF_CARDS } from '@state/snap';
import { Grid, makeStyles } from '@material-ui/core';

import { PlayingCard } from 'components/ui/PlayingCard/PlayingCard';
import React from 'react';
import { StyledPile } from '@ui';

export const CenterPile = () => {
  const allCards = [
    {
      id: 'c12',
      suit: CardSuit.CLUB,
      rank: 'Q',
      face: CardFace.FACE_DOWN,
    } as Card,
    {
      id: 'c13',
      suit: CardSuit.CLUB,
      rank: 'K',
      face: CardFace.FACE_DOWN,
    } as Card,
  ].map(card => ({
    ...card,
    face: CardFace.FACE_UP,
  }));

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <div></div>
      </Grid>
      <Grid item xs={6} md={12}>
        <StyledPile>
          {allCards.map((card, index) => {
            let position = index;
            if (allCards.length > 1) {
              if (index === allCards.length - 1) {
                position += 50;
              } else if (index === allCards.length - 1) {
                position += 5;
              }
            }
            return (
              <PlayingCard
                card={card}
                position={position}
                active={index === allCards.length - 1}
                key={card.id}
              />
            );
          })}
        </StyledPile>
      </Grid>
      <Grid item xs={3} md={12}></Grid>
    </Grid>
  );
};
