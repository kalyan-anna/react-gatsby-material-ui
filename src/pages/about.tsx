import { DefaultLayout } from 'layouts';
import React from 'react';

const About = () => {
  return (
    <DefaultLayout pageTitle="About">
      <h1>About</h1>
      <div>Sample react / material-ui project</div>
      <ul>
        <li>Gatsby</li>
        <li>React</li>
        <li>Typescript</li>
        <li>material ui</li>
        <li>Redux toolkit</li>
      </ul>
    </DefaultLayout>
  );
};

export default About;
