import Button from '@components/Button';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import LockClosedIcon from '../../public/icons/lock.svg';

const LiscoForm = ({ children, fields, btnText, ...props }) => {
  return (
    <Formik {...props}>
      {({ isValid, dirty }) => {
        return (
          <Form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              {fields.map((x) => (
                <Field key={x.name} {...x} />
              ))}
            </div>

            {children}

            <Button
              type="submit"
              disabled={!(dirty && isValid)}
              title={btnText}
              icon={() => (
                <LockClosedIcon
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="#fff"
                />
              )}
            />

            {/* <button
              type="submit"
              disabled={!(dirty && isValid)}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:bg-gray-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                  fill="rgb(99 102 241 / 1)"
                />
              </span>
              Sign up
            </button> */}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LiscoForm;
