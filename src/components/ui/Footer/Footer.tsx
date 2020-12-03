import React from 'react';
import { Anchor, Box, Footer as GommetFooter, Nav, Text } from 'grommet';
import { Logo } from '../Logo/Logo';

interface FooterProps {
  title: string;
}

const FooterContent = () => {
  return (
    <Nav direction="row" pad="medium">
      <Anchor href="/contact">Contact</Anchor>
      <Anchor href="/about">About</Anchor>
    </Nav>
  );
};

const Footer: React.FC<FooterProps> = ({ title }) => {
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
            {title}
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
