import { Box } from '../Box/Box';
import { Logo } from '../Logo/Logo';
import React from 'react';
import { Text } from '../Text/Text';

interface AppLogoLinkProps {
  appTitle: string;
}

const AppLogoLink: React.FC<AppLogoLinkProps> = ({ appTitle }) => (
  <Box display="flex" alignItems="center">
    <Logo />
    <Text mx={3} fontSize={[4, 5]}>
      {appTitle}
    </Text>
  </Box>
);

export { AppLogoLink };
