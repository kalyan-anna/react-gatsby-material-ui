import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  SpaceProps,
  color,
  flexbox,
  layout,
  space,
} from 'styled-system';

import styled from 'styled-components';

type BoxProps = LayoutProps & SpaceProps & ColorProps & FlexboxProps;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
);

export { Box, BoxProps };
