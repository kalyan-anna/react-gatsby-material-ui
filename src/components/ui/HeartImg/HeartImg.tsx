import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';
import React from 'react';

export const HeartImg = () => {
  const data = useStaticQuery(graphql`
    query {
      mobileImage: file(relativePath: { eq: "heart.png" }) {
        childImageSharp {
          fixed(width: 15, height: 15) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      desktopImage: file(relativePath: { eq: "heart.png" }) {
        childImageSharp {
          fixed(width: 30, height: 30) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const sources = [
    data.mobileImage.childImageSharp.fixed,
    {
      ...data.desktopImage.childImageSharp.fixed,
      media: `(min-width: 768px)`,
    },
  ];

  return <Img fixed={sources} alt="Heart image" />;
};
