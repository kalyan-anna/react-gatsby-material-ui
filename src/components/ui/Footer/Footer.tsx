import { Col, Grid, Row } from 'react-styled-flexboxgrid';

import { AnchorLink } from '../AnchorLink/AnchorLink';
import { Box } from '../Box/Box';
import React from 'react';

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="primary"
      minHeight={[100, 75]}
      p={[3, 4]}
      display="flex"
      alignItems="center"
    >
      <Row top="xs">
        <Col xs={12} sm={6}>
          <AnchorLink to="/contact" my={3}>
            Contact
          </AnchorLink>
        </Col>
        <Col xs={12} sm={6}>
          <AnchorLink to="/about" my={3}>
            About
          </AnchorLink>
        </Col>
      </Row>
    </Box>
  );
};

export { Footer };
