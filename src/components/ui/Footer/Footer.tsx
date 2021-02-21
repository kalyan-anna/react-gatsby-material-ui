import { Box } from '../Box/Box';
import React from 'react';

interface FooterProps {
  appTitle: string;
}

// const FooterContent = () => {
//   return (
//     <Nav direction="row" pad="medium">
//       <AnchorLink to="/contact" label="Contact" color="brand"></AnchorLink>
//       <AnchorLink to="/about" label="About" color="brand"></AnchorLink>
//     </Nav>
//   );
// };

const Footer: React.FC<FooterProps> = ({ appTitle: title }) => {
  return (
    <Box as="footer">
      <div>This is a footer</div>
    </Box>
  );
};

export { Footer };
