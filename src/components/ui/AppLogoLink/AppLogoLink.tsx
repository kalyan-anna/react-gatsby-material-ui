import { AnchorLink } from '../AnchorLink/AnchorLink';
import { Box } from '../Box/Box';
import { Logo } from '../Logo/Logo';
import React from 'react';
import { Text } from '../Text/Text';

interface AppLogoLinkProps {
  appTitle: string;
}

const AppLogoLink: React.FC<AppLogoLinkProps> = ({ appTitle }) => (
  <Box display="flex" alignItems="center" as={AnchorLink} to="/">
    <Logo />
    <Text
      mx={[2, 3]}
      fontSize={[4, 5]}
      fontWeight={6}
      letterSpacing="tracked"
      fontStyle="oblique"
    >
      {appTitle}
    </Text>
  </Box>
);

export { AppLogoLink };
