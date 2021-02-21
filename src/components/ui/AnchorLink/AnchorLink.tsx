import { GatsbyLinkProps, Link } from 'gatsby';
import { SpaceProps, space } from 'styled-system';

import styled from 'styled-components';
import { theme } from '@theme';

type AnchorLinkProps = GatsbyLinkProps<any> & SpaceProps;

const AnchorLink = styled(Link)<AnchorLinkProps>(
  {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      outline: `2px solid ${theme?.colors?.secondaryFont}`,
    },
  },
  space,
);

export { AnchorLink };
