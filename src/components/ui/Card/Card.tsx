import React, { ReactElement } from 'react';

import { Box } from '../Box/Box';

interface CardProps {
  body: ReactElement;
  footer: ReactElement;
}

const Card: React.FC<CardProps> = ({ body, footer }) => {
  return (
    <Box display="flex" flexDirection="column">
      {body}
      {footer}
    </Box>
  );
};

export { Card };
