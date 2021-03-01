import { Box } from '@material-ui/core';
import { Link } from 'gatsby';
import { Logo } from '../Logo/Logo';
import React from 'react';

interface AppLogoLinkProps {
  appTitle: string;
}

export const AppLogoLink: React.FC<AppLogoLinkProps> = ({ appTitle }) => {
  return (
    <Box display="flex" alignItems="center" component={Link} to="/">
      <Logo />
      <Box display="flex" flexDirection="column">
        <Box
          mx={[2, 3]}
          fontSize={[20, 28]}
          fontWeight={600}
          letterSpacing={5}
          fontStyle="oblique"
          color="primary.main"
        >
          {appTitle}
        </Box>
        <Box
          mx={[2, 3]}
          fontSize={[8, 12]}
          fontWeight={600}
          fontStyle="oblique"
          color="secondary.main"
        >
          Real deal...
        </Box>
      </Box>
    </Box>
  );
};
