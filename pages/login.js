import AuthLayout from '@components/AuthLayout';
import { Form, Formik, Field } from 'formik';
import cn from 'classnames';
import LockClosedIcon from '../public/icons/lock.svg';
import { loginFields, loginInitialValues } from 'forms/loginForm';

console.log('url', process.env.NEXT_PUBLIC_API_URL);

function Login({ data }) {
  const onSubmitLogin = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={loginInitialValues} onSubmit={onSubmitLogin}>
      {({ isValid, dirty }) => {
        return (
          <Form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              {loginFields
                .filter((x) => x.type)
                .map((x) => (
                  <Field key={x.name} {...x} />
                ))}
            </div>

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

            <div>
              <button
                type="submit"
                disabled={!(dirty && isValid)}
                className={cn(
                  'group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
                  {
                    'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500': !(
                      dirty && isValid
                    ),
                  }
                )}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                    fill="rgb(99 102 241 / 1)"
                  />
                </span>
                Sign in
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
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
