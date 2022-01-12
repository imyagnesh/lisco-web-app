import Head from 'next/head';
import Image from 'next/image';
import Input from '@components/Input';
import Button from '@components/Button';

console.log('url', process.env.NEXT_PUBLIC_API_URL);

function Home({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="lisco home page" />
      </Head>
      <h1 className="text-red-300 text-4xl">Hello From Home</h1>
      <input type="checkbox" />
      <Input label="First Name" name="firstName" />
      <Input label="Last Name" name="lastName" />
      <Button />
      <img
        src="images/banner.jpg"
        alt="banner image"
        height={100}
        width={100}
      />
      <div
        style={{
          display: 'flex',
          height: '80vh',
        }}
      >
        <div style={{ flexGrow: 1, backgroundColor: 'blue' }}></div>
        <div
          style={{
            flexGrow: 1,
            backgroundColor: 'yellow',
            position: 'relative',
          }}
        >
          <Image src="/images/banner.jpg" alt="banner image" layout="fill" />
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  // const res = await fetch('http://localhost:1337/api/products');
  // const data = await res.json();

  return {
    props: {
      data: [],
    },
  };
};

export default Home;
