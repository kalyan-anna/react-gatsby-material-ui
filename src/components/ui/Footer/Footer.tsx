import { Box, Grid, makeStyles } from '@material-ui/core';

import { Link } from 'gatsby';
import React from 'react';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    color: grey[100],
    fontWeight: 600,
    letterSpacing: 2,
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" minHeight={[100, 75]} p={[3, 4]} borderTop={2}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} md={2}>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} sm={2} md={1}>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Footer };
