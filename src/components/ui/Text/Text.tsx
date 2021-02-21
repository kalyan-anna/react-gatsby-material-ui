import {
  ColorProps,
  FontSizeProps,
  FontWeightProps,
  LineHeightProps,
  SpaceProps,
  TypographyProps,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  space,
  typography,
} from 'styled-system';

import styled from 'styled-components';

type TextProps = SpaceProps &
  FontSizeProps &
  FontWeightProps &
  LineHeightProps &
  ColorProps &
  TypographyProps;

const Text = styled.div<TextProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${typography}
`;

Text.defaultProps = {
  color: 'font',
};

export { Text };
