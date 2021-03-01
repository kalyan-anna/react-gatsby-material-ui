import { CssBaseline } from '@material-ui/core';
import { Provider } from 'react-redux';
import React from 'react';
import ThemeTopLayout from 'gatsby-theme-material-ui-top-layout/src/components/top-layout';
import store from '../../state/store';

export default function TopLayout({ children, theme }) {
  return (
    <Provider store={store}>
      <ThemeTopLayout theme={theme}>
        <CssBaseline />
        {children}
      </ThemeTopLayout>
    </Provider>
  );
}
