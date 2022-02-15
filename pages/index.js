import React, { Suspense } from 'react';
import MainLayout from '@components/MainLayout/mainlayout';
import Banner from '@components/Banner/banner';
import bannerQuery from '@queries/bannerQuery';
import Carousal from '@components/carousal';

const Home = ({ banners }) => {
  return (
    <>
      <Carousal />
      <Banner data={banners.banners.data} />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const res = await fetch(
    'https://f44d-2401-4900-555b-e1f6-b992-456f-a826-cd5.ngrok.io/graphql',
    {
      method: 'post',
      body: JSON.stringify({
        query: bannerQuery,
      }),
      headers: {
        'content-type': 'application/json',
      },
    }
  );

  const json = await res.json();

  return {
    props: {
      banners: json.data,
    },
  };
}

export default Home;
