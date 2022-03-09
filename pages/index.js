import React, { Suspense } from 'react';
import { getSession } from 'next-auth/react';
import MainLayout from 'layouts/MainLayout';
import Banner from '@components/Banner/banner';
import Carousal from '@components/carousal';
import HomeQuery from '@queries/homeQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Pagination } from 'swiper';
import Section from '@components/Section';
import ProductImage from '@components/ProductImage';
import axiosInstance from 'lib/axiosInstance';

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
  const router = useRouter();
  console.log('home', home?.products?.data);
  console.log('banners', home?.banners?.data);
  console.log('category', home?.categories?.data);
  return (
    <>
      <Swiper
        className="h-screen"
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{
          dynamicBullets: true,
        }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {home?.banners?.data.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Image
              src={banner.attributes.bannerImage.data.attributes.url}
              alt="image"
              layout="fill"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="max-w-7xl mx-auto">
        <Section
          title="Shop By Category"
          linkText="Browse all Category"
          href="/"
        />
        <div className="flex gap-6 my-4">
          {home?.categories?.data.map((category) => {
            if (category?.attributes?.image?.data?.attributes?.url) {
              return (
                <ProductImage
                  key={category.id}
                  src={category.attributes.image.data.attributes.url}
                  alt={category.attributes.category}
                  title={category.attributes.category}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
      {/* <Carousal data={home?.banners?.data || []} />
      {(home?.categories?.data || []).map((x) => {
        return <h1 key={x.id}>{x.attributes.category}</h1>;
      })} */}
      {(home?.products?.data || []).map((x) => {
        return (
          <div
            key={x.id}
            role="button"
            onClick={() => router.push(`products/${x.id}`)}
          >
            <Image
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
          </div>
        );
      })}
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const res = await axiosInstance.post('graphql', {
    query: HomeQuery,
    variables: {
      categoryId: 1,
    },
  });

  console.log(res.data);

  console.log(session.token.jwt);

  const carts = await axiosInstance.get('/api/carts', {
    headers: {
      Authorization: `Bearer ${session.token.jwt}`,
    },
  });

  console.log(carts.data);

  return {
    props: {
      home: res.data.data,
      session,
    },
  };
}

export default Home;
