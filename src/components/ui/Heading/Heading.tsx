import React from 'react';
import { Text } from '../Text/Text';

interface HeadingProps {
  level?: string;
}

const Heading: React.FC<HeadingProps> = ({ level = 1, ...rest }) => {
  const Tag = `h${level}`;
  return <Text {...rest} as={Tag} />;
};

export { Heading };
