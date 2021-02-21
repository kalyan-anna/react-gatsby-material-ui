import { Box, Heading } from '@ui';

import { AppLayout } from 'layouts';
import React from 'react';

const Contact = () => {
  return (
    <AppLayout pageTitle="Contact">
      <Box alignItems="start" flexDirection="column" display="flex">
        <Heading>Contact</Heading>
        <p>
          <span style={{ marginRight: '5px' }}>Contact me on</span>
          <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
        </p>
      </Box>
    </AppLayout>
  );
};

export default Contact;
