import { Grid, withStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

import { Footer } from 'components/ui/Footer/Footer';
import { Header } from 'components/ui/Header/Header';
import React from 'react';
import { SEO } from '../SEO/SEO';
import { brown } from '@material-ui/core/colors';
import { globalStyles } from '../../theme/global';

const AppContainer = withStyles({
  root: {
    backgroundColor: brown[500],
    minHeight: '100%',
  },
})(Grid);

type DefaultLayoutProps = {
  pageTitle: string;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  pageTitle,
  children,
}) => {
  globalStyles();

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  const appTitle: string = site.siteMetadata?.title;

  return (
    <>
      <SEO pageTitle={pageTitle} appTitle={appTitle} />
      <AppContainer
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Header appTitle={appTitle} />
        <Grid
          item
          component="main"
          style={{ flexGrow: 2, justifyContent: 'center' }}
          container={true}
        >
          {children}
        </Grid>
        <Footer />
      </AppContainer>
    </>
  );
};
