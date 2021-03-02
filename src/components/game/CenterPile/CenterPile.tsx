import { CardFace, humanCallsSnap, snapSelector } from '@state/snap';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';
import { PlayingCard } from 'components/ui/PlayingCard/PlayingCard';
import React from 'react';
import { StyledPile } from '@ui';

export const CenterPile = () => {
  const cards = useSelector(snapSelector.centerPileCards);
  const isMatching = useSelector(snapSelector.isMatching);
  const dispatch = useDispatch();

  const handleClicking = () => {
    if (isMatching) {
      dispatch(humanCallsSnap());
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      onClick={handleClicking}
    >
      <Grid item xs={3} md={12}>
        <div></div>
      </Grid>
      <Grid item xs={6} md={12}>
        <StyledPile>
          {cards.map((card, index) => {
            let position = index;
            if (cards.length > 1 && card.face === CardFace.FACE_UP) {
              if (index === cards.length - 1) {
                position += 50;
              } else if (index === cards.length - 1) {
                position += 5;
              }
            }
            return (
              <PlayingCard
                card={card}
                position={position}
                active={
                  card.face === CardFace.FACE_UP && index === cards.length - 1
                }
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
