import { Avatar, Pile, PlayerTurn, SnapBubble, WinnerBubble } from '@ui';
import { Player, humanTurnsCard, snapSelector } from '@state/snap';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';
import React from 'react';

export const HumanPile = () => {
  const cards = useSelector(snapSelector.humanCards);
  const whoseTurn = useSelector(snapSelector.whoseTurn);
  const whoSnapped = useSelector(snapSelector.whoSnapped);
  const winner = useSelector(snapSelector.winner);
  const isPlaying = useSelector(snapSelector.isPlaying);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (isPlaying && whoseTurn === Player.HUMAN && cards.length > 0) {
      dispatch(humanTurnsCard());
    }
  };

  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      onClick={handleClick}
    >
      <Grid item xs={3} md={12}>
        <Avatar type="human" name="You" />
      </Grid>
      <Grid item xs={6} md={12}>
        <Pile cards={cards} activateLastCard={whoseTurn === Player.HUMAN} />
      </Grid>
      <Grid item xs={3} md={12}>
        {whoSnapped === Player.HUMAN && <SnapBubble />}
        {whoseTurn === Player.HUMAN && <PlayerTurn>Your turn</PlayerTurn>}
        {winner === Player.HUMAN && <WinnerBubble />}
      </Grid>
    </Grid>
  );
};
