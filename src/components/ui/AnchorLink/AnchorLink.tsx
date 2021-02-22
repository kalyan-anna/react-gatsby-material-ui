import { ColorProps, SpaceProps, color, space } from 'styled-system';
import { GatsbyLinkProps, Link } from 'gatsby';

import styled from 'styled-components';
import { theme } from '@theme';

type AnchorLinkProps = GatsbyLinkProps<any> &
  SpaceProps &
  ColorProps & {
    disableDecoration?: boolean;
  };

const AnchorLink = styled(Link)<AnchorLinkProps>(
  {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
    '&:focus': {
      outline: `2px solid ${theme?.colors?.accent}`,
    },
  },
  space,
  color,
  props => {
    if (props.disableDecoration) {
      return {
        '&:hover': {
          textDecoration: 'none',
        },
      };
    }
    return {
      '&:hover': {
        textDecoration: 'underline',
      },
    };
  },
);

AnchorLink.defaultProps = {
  color: 'primary',
};

export { AnchorLink };
