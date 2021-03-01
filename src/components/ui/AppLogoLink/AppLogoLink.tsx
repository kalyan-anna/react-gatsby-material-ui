import { Box, withStyles } from '@material-ui/core';

import { Link } from 'gatsby';
import { Logo } from '../Logo/Logo';
import React from 'react';

const AppTitle = withStyles({
  root: {
    color: '#FFFFFF',
    textShadow:
      '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
    textTransform: 'uppercase',
  },
})(Box);

interface AppLogoLinkProps {
  appTitle: string;
}

export const AppLogoLink: React.FC<AppLogoLinkProps> = ({ appTitle }) => {
  return (
    <Box display="flex" alignItems="center" component={Link} to="/">
      <Logo />
      <Box display="flex" flexDirection="column">
        <AppTitle
          mx={[2, 3]}
          fontSize={[20, 28]}
          fontWeight={600}
          letterSpacing={5}
          fontStyle="oblique"
        >
          {appTitle}
        </AppTitle>
        <Box
          mx={[2, 3]}
          fontSize={[10, 14]}
          fontWeight={600}
          fontStyle="oblique"
          color="black"
          letterSpacing={3}
        >
          Real deal...
        </Box>
      </Box>
    </Box>
  );
};
