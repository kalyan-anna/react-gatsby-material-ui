import { Board } from '@game';
import { DefaultLayout } from 'layouts';
import React from 'react';

const IndexPage = () => (
  <DefaultLayout pageTitle="Home">
    <Board />
  </DefaultLayout>
);

export default IndexPage;
