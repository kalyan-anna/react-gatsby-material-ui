import { Box } from '../Box/Box';
import React from 'react';

// const FooterContent = () => {
//   return (
//     <Nav direction="row" pad="medium">
//       <AnchorLink to="/contact" label="Contact" color="brand"></AnchorLink>
//       <AnchorLink to="/about" label="About" color="brand"></AnchorLink>
//     </Nav>
//   );
// };

const Footer = () => {
  return (
    <Box as="footer" backgroundColor="primary">
      <div>This is a footer</div>
    </Box>
  );
};

export { Footer };
