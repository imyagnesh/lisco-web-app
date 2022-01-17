import Input from '@components/Input';
import Select from '@components/Select';

export const registerInitialValues = {
  name: '',
  gender: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const registerFields = [
  {
    name: 'name',
    component: Input,
    type: 'text',
    placeholder: 'Name',
    isFirst: true,
    validate: (value) => {
      if (!value) {
        return 'Required...';
      } else {
        return '';
      }
    },
  },
  {
    name: 'gender',
    component: Select,
    placeholder: 'Please Select Gender',
    options: [
      {
        value: 'male',
        text: 'Male',
      },
      {
        value: 'female',
        text: 'Female',
      },
      {
        value: 'other',
        text: 'Other',
      },
    ],
    validate: (value) => {
      if (!value) {
        return 'Required...';
      } else {
        return '';
      }
    },
  },
  {
    name: 'email',
    component: Input,
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      } else {
        return '';
      }
    },
  },

  {
    name: 'password',
    component: Input,
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Password',
    validate: (value) => {
      if (!value) {
        return 'Required...';
      } else if (
        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(value)
      ) {
        return 'Invalid password';
      } else {
        return '';
      }
    },
  },
  {
    name: 'confirmPassword',
    component: Input,
    type: 'password',
    autoComplete: 'new-password',
    placeholder: 'Confirm Password',
    isLast: true,
    validate: (value) => {
      if (!value) {
        return 'Required...';
      } else if (
        !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/i.test(value)
      ) {
        return 'Invalid password';
      } else if (password.value !== value) {
        return 'confirm password should match.';
      } else {
        return '';
      }
    },
  },
];
