import MainLayout from '@components/MainLayout';
import React from 'react';

const Contact = () => {
  return <div>hello from contact</div>;
};

Contact.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Contact;
