import { Col, Row } from 'react-styled-flexboxgrid';

import { AnchorLink } from '../AnchorLink/AnchorLink';
import { Box } from '../Box/Box';
import React from 'react';

const Footer = () => {
  return (
    <Box
      as="footer"
      backgroundColor="secondary"
      minHeight={[100, 75]}
      p={[3, 4]}
      display="flex"
    >
      <Row>
        <Col xs={12} sm={6}>
          <AnchorLink to="/contact">Contact</AnchorLink>
        </Col>
        <Col xs={12} sm={6}>
          <AnchorLink to="/about">About</AnchorLink>
        </Col>
      </Row>
    </Box>
  );
};

export { Footer };
