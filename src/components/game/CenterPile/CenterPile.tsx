import { CardFace, PACK_OF_CARDS } from '@state/snap';

import { Grid } from '@material-ui/core';
import { PlayingCard } from 'components/ui/PlayingCard/PlayingCard';
import React from 'react';
import { StyledPile } from '@ui';

export const CenterPile = () => {
  const allCards = PACK_OF_CARDS;

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <div></div>
      </Grid>
      <Grid item xs={6} md={12}>
        <StyledPile>
          {allCards.map((card, index) => {
            let position = index;
            if (allCards.length > 1 && card.face === CardFace.FACE_UP) {
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
