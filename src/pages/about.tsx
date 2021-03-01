import { Box, Container, Typography } from '@material-ui/core';

import { DefaultLayout } from 'layouts';
import React from 'react';
import { grey } from '@material-ui/core/colors';

const About = () => {
  return (
    <DefaultLayout pageTitle="About">
      <Container maxWidth="md" style={{ color: grey[100] }}>
        <Box my={3}>
          <Typography variant="h3" component="h1">
            About
          </Typography>
          <div>Sample react / material-ui project</div>
          <ul>
            <li>Gatsby</li>
            <li>React</li>
            <li>Typescript</li>
            <li>material ui</li>
            <li>Redux toolkit</li>
          </ul>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default About;
