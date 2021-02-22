import {
  BorderProps,
  ColorProps,
  LayoutProps,
  SpaceProps,
  border,
  color,
  layout,
  space,
} from 'styled-system';
import React, { InputHTMLAttributes } from 'react';

import styled from 'styled-components';
import { theme } from '@theme';

type TextInputProps = SpaceProps & ColorProps & LayoutProps & BorderProps;

const TextInputStyled = styled('input')<TextInputProps>(
  {
    '&:focus': {
      outline: 'none',
      borderColor: `${theme?.colors?.rockBlue}`,
    },
  },
  space,
  color,
  layout,
  border,
);

const TextInput = (props: InputHTMLAttributes<any>) => {
  return (
    <TextInputStyled
      type="text"
      {...props}
      p={2}
      backgroundColor="panelBackground"
      width="100%"
      borderColor="rockBlue"
      color="primary"
      borderRadius={3}
      border={2}
    />
  );
};

export { TextInput };
