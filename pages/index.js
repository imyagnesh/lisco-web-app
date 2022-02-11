import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Suspense } from 'react/cjs/react.production.min';
import MainLayout from '@components/MainLayout';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const Button = dynamic(() => import('@components/Button'), {
  suspense: true,
});

const Home = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button type="button" onClick={() => setCounter((val) => val + 1)}>
        Increment Counter
      </button>
      <h1>{counter}</h1>
      {counter > 5 && (
        <Suspense
          fallback={
            <Image
              alt="Mountains"
              src={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
              width={700}
              height={475}
            />
          }
        >
          <Button title="Add" />
        </Suspense>
      )}
    </div>
  );
};

Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export default Home;
