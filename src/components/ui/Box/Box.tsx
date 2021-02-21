import {
  BorderProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  border,
  color,
  flexbox,
  layout,
  shadow,
  space,
} from 'styled-system';

import styled from 'styled-components';

type BoxProps = LayoutProps &
  SpaceProps &
  ColorProps &
  FlexboxProps &
  BorderProps &
  ShadowProps;

const Box = styled.div<BoxProps>(
  {
    boxSizing: 'border-box',
    minWidth: 0,
  },
  space,
  color,
  layout,
  flexbox,
  border,
  shadow,
);

export { Box, BoxProps };
