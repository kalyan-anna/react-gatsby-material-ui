import { Theme } from 'styled-system';

export const theme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  shadows: {
    none: 'none',
    elevation1:
      'rgb(0 0 0 / 20%) 0px 2px 1px -1px, rgb(0 0 0 / 14%) 0px 1px 1px 0px, rgb(0 0 0 / 12%) 0px 1px 3px 0px',
    elevation2:
      'rgb(0 0 0 / 20%) 0px 3px 1px -2px, rgb(0 0 0 / 14%) 0px 2px 2px 0px, rgb(0 0 0 / 12%) 0px 1px 5px 0px',
    elevation3:
      'rgb(0 0 0 / 20%) 0px 3px 3px -2px, rgb(0 0 0 / 14%) 0px 3px 4px 0px, rgb(0 0 0 / 12%) 0px 1px 8px 0px',
  },
  radii: [0, 2, 4, 16, 9999, '100%'],
  sizes: {
    widths: [16, 32, 64, 128, 256],
    heights: [16, 32, 64, 128, 256],
    maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
    minHeights: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  },
  colors: {
    color: '#2f516d',
    fontSecondary: '#899bb2',
    primary: '#e1e1e1',
    secondary: '#ffffff',
    accent: '#444444',
  },
};
