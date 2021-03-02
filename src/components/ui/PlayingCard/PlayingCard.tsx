import { Box, Grid, Theme, makeStyles } from '@material-ui/core';
import { Card, CardFace, CardSuit } from '@state/snap';
import { blue, grey, red } from '@material-ui/core/colors';

import { ClubImg } from '../ClubImg/ClubImg';
import { DiamondImg } from '../DiamondImg/DiamondImg';
import { HeartImg } from '../HeartImg/HeartImg';
import React from 'react';
import { SpadeImg } from '../SpadeImg/SpadeImg';
import classNames from 'classnames';

interface PlayingCardProps {
  card: Card;
  position?: number;
  active: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'inline-block',
    position: 'absolute',
    top: 2,
    right: 0,
    height: '100%',

    left: (props: PlayingCardProps) =>
      props.position ? props.position + 3 : 1,

    zIndex: (props: PlayingCardProps) => props.position || 1,
    fontWeight: 700,

    cursor: (props: PlayingCardProps) => (props.active ? 'pointer' : 'default'),

    backgroundColor: (props: PlayingCardProps) =>
      props?.card?.face === CardFace.FACE_UP ? grey[100] : blue[700],

    boxShadow: theme.shadows[3],
    borderRadius: '20px',

    [theme.breakpoints.up('xs')]: {
      height: '145px',
      width: '95px',
    },
    [theme.breakpoints.up('sm')]: {
      height: '195px',
      width: '145px',
    },
    [theme.breakpoints.up('md')]: {
      height: '295px',
      width: '195px',
    },
    transition: 'background-color 0.5s',
  },

  rootHover: {
    '&:hover': {
      backgroundColor: (props: PlayingCardProps) =>
        props?.card?.face === CardFace.FACE_UP ? grey[100] : blue[600],
    },
  },

  fullHeight: {
    height: '100%',
  },

  rank: {
    textAlign: 'center',
    fontWeight: 600,
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.2rem',
      padding: '1px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.7rem',
      padding: '4px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
      padding: '3px',
    },
    color: (props: PlayingCardProps) =>
      props.card.suit === CardSuit.DIAMOND || props.card.suit === CardSuit.HEART
        ? red[900]
        : grey[900],
  },
  rotate: {
    transform: 'rotate(-180deg)',
  },
}));

const FaceUpPlayingCard: React.FC<PlayingCardProps> = (
  props: PlayingCardProps,
) => {
  const classes = useStyles(props);

  const suitImage = () => {
    switch (props.card.suit) {
      case CardSuit.CLUB:
        return <ClubImg />;
      case CardSuit.HEART:
        return <HeartImg />;
      case CardSuit.SPADE:
        return <SpadeImg />;
      case CardSuit.DIAMOND:
        return <DiamondImg />;
    }
  };

  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="stretch"
      className={classes.fullHeight}
    >
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        {suitImage()}
        <div className={classes.rank}>{props.card.rank}</div>
      </Grid>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-end"
      >
        <div className={classes.rotate}>
          {suitImage()}
          <div className={classes.rank}>{props.card.rank}</div>
        </div>
      </Grid>
    </Grid>
  );
};

export const PlayingCard: React.FC<PlayingCardProps> = (
  props: PlayingCardProps,
) => {
  const classes = useStyles(props);

  return (
    <Box
      className={classNames(classes.root, {
        [classes.rootHover]: props.active,
      })}
      p={2}
    >
      {props.card.face === CardFace.FACE_UP && <FaceUpPlayingCard {...props} />}
    </Box>
  );
};
