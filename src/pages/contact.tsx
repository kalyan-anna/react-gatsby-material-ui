import { DefaultLayout } from 'layouts';
import React from 'react';

const Contact = () => {
  return (
    <DefaultLayout pageTitle="Contact">
      <h1>Contact</h1>
      <p>
        <span style={{ marginRight: '5px' }}>Contact me on</span>
        <a href="mailto: kalyan.anna@yahoo.com">kalyan.anna@yahoo.com</a>
      </p>
    </DefaultLayout>
  );
};

export default Contact;
