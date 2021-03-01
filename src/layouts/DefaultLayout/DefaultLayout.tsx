import { Container, Grid, makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';

import { Footer } from 'components/ui/Footer/Footer';
import { Header } from 'components/ui/Header/Header';
import React from 'react';
import { SEO } from '../SEO/SEO';

const useStyles = makeStyles({
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

type DefaultLayoutProps = {
  pageTitle: string;
};

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
  pageTitle,
  children,
}) => {
  useStyles();

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
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="stretch"
      >
        <Header appTitle={appTitle} />
        <Grid item component="main">
          {children}
        </Grid>
        <Footer />
      </Grid>
    </>
  );
};
