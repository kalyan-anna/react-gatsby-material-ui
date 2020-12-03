import React from 'react';
import { Anchor, Box, Footer as GommetFooter, Nav, Text } from 'grommet';
import { Logo } from '../Logo/Logo';
import { Link } from 'gatsby';

const FooterContent = () => {
  return (
    <Nav direction="row" pad="medium">
      <Anchor as={Link} href="/contact">
        Contact
      </Anchor>
      <Anchor as={Link} href="/about">
        About
      </Anchor>
    </Nav>
  );
};

const Footer = () => {
  return (
    <>
      <GommetFooter background="dark-1" pad="large">
        <FooterContent />
      </GommetFooter>
      <GommetFooter
        background="dark-2"
        pad={{ horizontal: 'large', vertical: 'small' }}
      >
        <Box direction="row-responsive" gap="small">
          <Logo />
          <Text alignSelf="center" color="brand">
            Do-Do
          </Text>
        </Box>
        <Text textAlign="center" size="small">
          © 2020 Copyright
        </Text>
      </GommetFooter>
    </>
  );
};

export { Footer };
