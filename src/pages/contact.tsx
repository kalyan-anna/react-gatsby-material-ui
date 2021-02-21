import { AppLayout } from '@layout';
import React from 'react';

const Contact = () => {
  return (
    <AppLayout pageTitle="Contact">
      <div>
        <p>
          <span style={{ marginRight: '5px' }}>Contact me on</span>
          <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
        </p>
      </div>
    </AppLayout>
  );
};

export default Contact;
