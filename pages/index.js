import React, { Suspense } from 'react';
import MainLayout from '@components/MainLayout/mainlayout';
import Banner from '@components/Banner/banner';
import Carousal from '@components/carousal';
import HomeQuery from '@queries/homeQuery';
import Image from 'next/image';

const myLoader = ({ src, width, quality = 75 }) => {
  const searchKey = 'upload/';
  const searchIndex = src.search(searchKey);
  if (searchIndex !== -1) {
    const imagePath = [
      src.slice(0, searchIndex + searchKey.length),
      `w_${width},q_${quality}/`,
      src.slice(searchIndex + searchKey.length),
    ].join('');
    return imagePath;
  }
  return src;
};

const placeholder = ({ src, width, quality = 75 }) => {
  const searchKey = 'upload/';
  const searchIndex = src.search(searchKey);
  if (searchIndex !== -1) {
    const imagePath = [
      src.slice(0, searchIndex + searchKey.length),
      `w_${width},q_${quality},e_blur:1000/`,
      src.slice(searchIndex + searchKey.length),
    ].join('');
    return imagePath;
  }
  return src;
};

const Home = ({ home }) => {
  console.log(process.env.NEXT_PUBLIC_API_URL);
  return (
    <>
      {(home?.products?.data || []).map((x) => {
        return (
          <Image
            key={x.id}
            loader={myLoader}
            src={x.attributes.productImage.data[0].attributes.url}
            alt={x.attributes.productName}
            height={100}
            width={100}
            quality={60}
            placeholder="blur"
            blurDataURL={placeholder({
              src: x.attributes.productImage.data[0].attributes.url,
              width: 100,
              quality: 1,
            })}
          />
        );
      })}
      <Carousal data={home?.banners?.data || []} />
      {(home?.categories?.data || []).map((x) => {
        return <h1 key={x.id}>{x.attributes.category}</h1>;
      })}
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
      query: HomeQuery,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  const json = await res.json();

  return {
    props: {
      home: json.data,
    },
  };
}

export default Home;
