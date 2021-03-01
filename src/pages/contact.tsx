import { Box, Container, Typography } from '@material-ui/core';

import { DefaultLayout } from 'layouts';
import React from 'react';
import { grey } from '@material-ui/core/colors';

const Contact = () => {
  return (
    <DefaultLayout pageTitle="Contact">
      <Container maxWidth="md" style={{ color: grey[100] }}>
        <Box my={3}>
          <Typography variant="h3" component="h1">
            Contact
          </Typography>
          <p>
            <span style={{ marginRight: '5px' }}>Contact me on</span>
            <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
          </p>
        </Box>
      </Container>
    </DefaultLayout>
  );
};

export default Contact;
