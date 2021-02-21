import {
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
} from 'styled-system';

import styled from 'styled-components';

type TextProps = SpaceProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  ColorProps;

const Text = styled.div<TextProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

export { Text };
