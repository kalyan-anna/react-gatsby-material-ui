import React, { ReactElement } from 'react';

import { Box } from '../Box/Box';

interface CardProps {
  body: ReactElement;
  footer: ReactElement;
}

const Card: React.FC<CardProps> = ({ body, footer }) => {
  return (
    <Box display="flex" flexDirection="row">
      {body}
      {footer}
    </Box>
  );
};

export { Card };
