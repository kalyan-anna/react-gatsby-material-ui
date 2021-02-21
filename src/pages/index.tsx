import { AppLayout } from '@layout';
import { EventMain } from '@event';
import React from 'react';

const IndexPage = () => (
  <AppLayout pageTitle="Home">
    <EventMain />
  </AppLayout>
);

export default IndexPage;
