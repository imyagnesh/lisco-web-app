/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import Checkbox from '@components/Checkbox';
import LiscoForm from '@components/LiscoForm';
import { Field } from 'formik';
import { loginFields, loginInitialValues } from 'forms/loginForm';
import AuthLayout from 'layouts/AuthLayout';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

const Login = () => {
  const onLoginSubmit = (values) => {
    const { remember_me, ...rest } = values;
    console.log(rest);
    signIn('credentials', { ...rest, callbackUrl: '/' });
  };

  return (
    <LiscoForm
      initialValues={loginInitialValues}
      fields={loginFields.slice(0, 2)}
      btnText="Sign In"
      onSubmit={onLoginSubmit}
    >
      <div className="flex items-center justify-between">
        <Field name="remember_me" label="Remember Me" component={Checkbox} />
        <Link href="/">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </Link>
      </div>
    </LiscoForm>
  );
};

Login.getLayout = (page) => {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
