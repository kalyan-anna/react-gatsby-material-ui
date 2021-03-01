/* eslint-disable @typescript-eslint/restrict-template-expressions */

const cgf = {
  siteMetadata: {
    title: `Snapii`,
    description: `Sample gatsby material ui project`,
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
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:300,400,400i,700`,
          `Roboto Mono\:300,400,400i,700`,
        ],
        display: 'swap',
      },
    },
  ],
};

module.exports = cgf;
