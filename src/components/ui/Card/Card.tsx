import { LayoutProps, SpaceProps } from 'styled-system';
import React, { ReactElement } from 'react';

import { Box } from '../Box/Box';

type CardProps = LayoutProps &
  SpaceProps & {
    body: ReactElement;
    footer: ReactElement;
  };

const Card: React.FC<CardProps> = ({ body, footer, ...rest }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      boxShadow="elevation2"
      overflow="hidden"
      {...rest}
    >
      <Box height="65%">{body}</Box>
      <Box p={1} px={3} height="35%">
        {footer}
      </Box>
    </Box>
  );
};

export { Card };
