import { makeStyles } from '@material-ui/core';

export const globalStyles = makeStyles({
  '@global': {
    'html, body, #___gatsby': {
      height: '100%',
    },
    body: {
      margin: 0,
    },
    "div[role='group'][tabindex], #gatsby-focus-wrapper": {
      height: '100%',
    },
  },
});
