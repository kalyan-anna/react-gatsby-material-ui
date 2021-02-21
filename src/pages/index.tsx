import { DefaultLayout } from 'layouts';
import { EventListContainer } from '@event';
import React from 'react';

const IndexPage = () => (
  <DefaultLayout pageTitle="Home">
    <EventListContainer />
  </DefaultLayout>
);

export default IndexPage;
