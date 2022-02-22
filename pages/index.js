import React, { Suspense } from 'react';
import MainLayout from '@components/MainLayout/mainlayout';
import Banner from '@components/Banner/banner';
import bannerQuery from '@queries/bannerQuery';
import Carousal from '@components/carousal';

const Home = ({ banners }) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      <Carousal data={banners.banners.data} />
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/graphql`, {
    method: 'post',
    body: JSON.stringify({
      query: bannerQuery,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  const json = await res.json();

  return {
    props: {
      banners: json.data,
    },
  };
}

export default Home;
