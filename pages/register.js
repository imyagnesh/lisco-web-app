import AuthLayout from '@components/AuthLayout';
import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Register page</h1>
    </div>
  );
};

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
