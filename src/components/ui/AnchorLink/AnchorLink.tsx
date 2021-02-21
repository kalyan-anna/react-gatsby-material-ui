import { GatsbyLinkProps, Link } from 'gatsby';

import styled from 'styled-components';
import { theme } from '@theme';

const AnchorLink = styled(Link)<GatsbyLinkProps<any>>({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  '&:focus': {
    outline: `2px solid ${theme?.colors?.secondaryFont}`,
  },
});

export { AnchorLink };
