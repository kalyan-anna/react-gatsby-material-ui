import { Box, Grid } from '@material-ui/core';

import { Link } from 'gatsby';
import React from 'react';

const Footer = () => {
  return (
    <Box component="footer" minHeight={[100, 75]} p={[3, 4]}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={2} md={1}>
          <Link to="/contact">Contact</Link>
        </Grid>
        <Grid item xs={12} sm={2} md={1}>
          <Link to="/about">About</Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export { Footer };
