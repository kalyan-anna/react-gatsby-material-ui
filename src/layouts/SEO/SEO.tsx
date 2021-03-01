import { Helmet } from 'react-helmet';
import React from 'react';

interface SEOProps {
  appTitle: string;
  pageTitle: string;
}

export const SEO: React.FC<SEOProps> = ({ appTitle, pageTitle }) => {
  return (
    <Helmet
      title={pageTitle}
      titleTemplate={appTitle ? `%s | ${appTitle}` : undefined}
    >
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Helmet>
  );
};
