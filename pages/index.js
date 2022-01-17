import MainLayout from '@components/MainLayout';
import React from 'react';

const Test = ({ children }) => {
  return <div id="test">{children}</div>;
};

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
