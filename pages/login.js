import AuthLayout from '@components/AuthLayout';
import { Form, Formik, Field } from 'formik';
import cn from 'classnames';
import LockClosedIcon from '../public/icons/lock.svg';
import { loginFields, loginInitialValues } from 'forms/loginForm';
import Typography from '@components/Typography';
import LiscoForm from '@components/LiscoForm';

console.log('url', process.env.NEXT_PUBLIC_API_URL);

function Login({ data }) {
  const onSubmitLogin = (values) => {
    console.log(values);
  };
  return (
    <LiscoForm
      fields={loginFields.filter((x) => x.type)}
      initialValues={loginInitialValues}
      onSubmit={onSubmitLogin}
      btnText="Sign In"
    >
      <div className="flex items-center justify-between">
        <Field {...loginFields[2]} />
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </LiscoForm>
  );
}

Login.getLayout = function getLayout(page) {
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

export default Login;
