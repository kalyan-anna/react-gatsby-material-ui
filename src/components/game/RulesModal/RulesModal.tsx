import { Button, Grid } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { animated, useSpring } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support

import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref,
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

interface RulesModalProps {
  open: boolean;
  setOpen: Function;
}

export const RulesModal: React.FC<RulesModalProps> = ({ open, setOpen }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <h2 id="spring-modal-title">Game Rules</h2>
          <Grid id="spring-modal-description" component="p">
            <ul>
              <li>
                A standard deck of 52 player cards is shuffled at the start of
                each game
              </li>
              <li>Each player is dealt 26 cards from the deck</li>
              <li>The first player to play is chosen at random each game</li>
              <li>
                Each player turns over the top card from their face-down pile
                and places it on the pile in centre middle.
              </li>
              <li>
                The player does this by clicking on their pile. The computer
                will do it automacally.
              </li>
              <li>
                When a card matches the previous card on the pile (e.g. two Aces
                in a row), the first player to ‘call snap’ wins the pile. The
                player does this by clicking the centre pile. The computer will
                automacally do this
              </li>
              <li>
                Play connues unl one player runs out of cards at which point the
                other player is the winner.
              </li>
            </ul>
          </Grid>
          <Grid>
            <Button
              size="medium"
              variant="contained"
              onClick={() => setOpen(false)}
            >
              OK
            </Button>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
};
