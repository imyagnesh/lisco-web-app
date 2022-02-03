import AuthLayout from '@components/AuthLayout';
import { Form, Formik, Field } from 'formik';
import cn from 'classnames';
import LockClosedIcon from '../public/icons/lock.svg';
import { registerFields, registerInitialValues } from 'forms/registerForm';
import LiscoForm from '@components/LiscoForm';

console.log('url', process.env.NEXT_PUBLIC_API_URL);

function Register({ data }) {
  const onSubmitLogin = async (values) => {
    try {
      const { confirmPassword, mobile, ...rest } = values;
      console.log(rest);
      const res = await fetch('http://localhost:1337/api/auth/local/register', {
        method: 'POST',
        body: JSON.stringify(rest),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await res.json();
      console.log(json);
    } catch (error) {}
  };
  return (
    <LiscoForm
      fields={registerFields}
      initialValues={registerInitialValues}
      onSubmit={onSubmitLogin}
      btnText="Sign Up"
    />
  );
}

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export const getServerSideProps = async () => {
  // const res = await fetch('http://localhost:1337/api/products');
  // const data = await res.json();

  return {
    props: {
      data: [],
    },
  };
};

export default Register;
