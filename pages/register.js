import AuthLayout from '@components/AuthLayout';
import { useRouter } from 'next/router';
import { registerFields, registerInitialValues } from 'forms/registerForm';
import LiscoForm from '@components/LiscoForm';
import axiosInstance from 'lib/axiosInstance';

console.log('url', process.env.NEXT_PUBLIC_API_URL);

function Register({ data }) {
  const router = useRouter();

  const onSubmitLogin = async (values, actions) => {
    try {
      const { confirmPassword, ...rest } = values;
      const res = await axiosInstance.post('auth/local/register', rest);
      actions.resetForm();
      sessionStorage.setItem('@lisco/token', JSON.stringify(res.data));
      router.replace('/');
    } catch (error) {
      const serverError = error.response.data.error.message || error.message;
      actions.setErrors({ serverError });
    }
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
