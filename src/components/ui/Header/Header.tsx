import { AppLogoLink } from '../AppLogoLink/AppLogoLink';
import { Box } from '@material-ui/core';
import React from 'react';

interface HeaderProps {
  appTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ appTitle }) => {
  return (
    <Box
      component="header"
      flexDirection="row"
      alignItems="center"
      display="flex"
      px={[3, 4]}
      py={[2, 3]}
      boxShadow={3}
    >
      <AppLogoLink appTitle={appTitle} />
    </Box>
  );
};
