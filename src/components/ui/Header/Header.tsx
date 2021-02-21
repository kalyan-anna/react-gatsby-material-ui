import { AppLogoLink } from '../AppLogoLink/AppLogoLink';
import { Box } from '../Box/Box';
import React from 'react';
interface HeaderProps {
  appTitle: string;
}

const Header: React.FC<HeaderProps> = ({ appTitle }) => {
  return (
    <Box
      as="header"
      flexDirection="row"
      alignItems="center"
      display="flex"
      px={4}
      py={3}
    >
      <AppLogoLink appTitle={appTitle} />
    </Box>
  );
};

export { Header };
