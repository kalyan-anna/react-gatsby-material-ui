import { Box, Heading } from '@ui';

import { DefaultLayout } from 'layouts';
import React from 'react';

const About = () => {
  return (
    <DefaultLayout pageTitle="About">
      <Box alignItems="start" flexDirection="column" display="flex">
        <Heading>About</Heading>
        <div>
          This is your place to search for favourite events happening around
          you.
        </div>
        <ul>
          <li>Gatsby</li>
          <li>React</li>
          <li>Typescript</li>
          <li>styled-component</li>
          <li>Redux</li>
        </ul>
      </Box>
    </DefaultLayout>
  );
};

export default About;
