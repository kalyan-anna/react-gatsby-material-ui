import { Grid, Slider, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { animated, useSpring } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import { appSelector, updateReactionTime } from '@state/app';
import { useDispatch, useSelector } from 'react-redux';

import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import { PrimaryButton } from '@ui';

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

interface SetingsModalProps {
  open: boolean;
  setOpen: Function;
}

export const SetingsModal: React.FC<SetingsModalProps> = ({
  open,
  setOpen,
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentReactionTime = useSelector(appSelector.reactionTime);
  const [reactionTime, setReactionTime] = useState<number>(currentReactionTime);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    dispatch(updateReactionTime(reactionTime));
  };

  const handleChange = (event: any, newValue: any) => {
    setReactionTime(newValue);
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
          <h2 id="spring-modal-title">Settings</h2>
          <div>
            <Typography id="non-linear-slider" gutterBottom>
              Computer reaction time
            </Typography>
            <Slider
              value={reactionTime}
              min={0}
              step={100}
              max={15000}
              onChange={handleChange}
              valueLabelDisplay="on"
              aria-labelledby="non-linear-slider"
            />
          </div>
          <Grid>
            <PrimaryButton size="medium" onClick={handleSave}>
              Save
            </PrimaryButton>
          </Grid>
        </div>
      </Fade>
    </Modal>
  );
};
