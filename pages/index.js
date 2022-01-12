import Input from '../components/Input';
import Button from '../components/Button';

function Home({ data }) {
  console.log(data);
  return (
    <div>
      <h1 className="text-red-300 text-4xl">Hello From Home</h1>
      <input type="checkbox" />
      <Input label="First Name" name="firstName" />
      <Input label="Last Name" name="lastName" />
      <Button />
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
