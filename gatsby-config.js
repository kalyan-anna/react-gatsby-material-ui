/* eslint-disable @typescript-eslint/restrict-template-expressions */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

console.log(`Using environment config: '${activeEnv}'`);

require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const cgf = {
  siteMetadata: {
    title: `Pinata`,
    description: `Sample gatsby styled-component project`,
    author: `Kalyan Annamalai`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `Pinata`,
        start_url: `/`,
        background_color: `#e1e1e1`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-184832716-1',
        head: true,
        anonymize: true,
      },
    },
  ],
};

module.exports = cgf;
