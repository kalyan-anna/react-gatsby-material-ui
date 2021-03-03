import { Avatar, Pile, PlayerTurn, SnapBubble, WinnerBubble } from '@ui';
import {
  Player,
  computerCallsSnap,
  computerTurnsCard,
  snapSelector,
} from '@state/snap';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';
import React from 'react';
import { appSelector } from '@state/app';
import { useInterval } from '../../../hooks';

export const ComputerPile = () => {
  const cards = useSelector(snapSelector.computerCards);
  const whoseTurn = useSelector(snapSelector.whoseTurn);
  const whoSnapped = useSelector(snapSelector.whoSnapped);
  const winner = useSelector(snapSelector.winner);
  const isPlaying = useSelector(snapSelector.isPlaying);
  const reactionTime = useSelector(appSelector.reactionTime);
  const isMatching = useSelector(snapSelector.isMatching);
  const dispatch = useDispatch();

  useInterval(() => {
    if (!isPlaying) {
      return;
    }
    if (isMatching) {
      dispatch(computerCallsSnap());
      return;
    }
    if (whoseTurn === Player.COMPUTER && cards.length > 0) {
      dispatch(computerTurnsCard());
    }
  }, reactionTime);

  return (
    <Grid container spacing={3} justify="center" alignItems="center">
      <Grid item xs={3} md={12}>
        <Avatar type="computer" name="Computer" />
      </Grid>
      <Grid item xs={6} md={12}>
        <Pile cards={cards} />
      </Grid>
      <Grid item xs={3} md={12}>
        {whoSnapped === Player.COMPUTER && <SnapBubble />}
        {whoseTurn === Player.COMPUTER && (
          <PlayerTurn>Computer's turn</PlayerTurn>
        )}
        {winner === Player.COMPUTER && <WinnerBubble />}
      </Grid>
    </Grid>
  );
};
