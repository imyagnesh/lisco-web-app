import Checkbox from '@components/Checkbox';
import Input from '@components/Input';

export const loginInitialValues = {
  email: '',
  password: '',
  remember_me: false,
};

export const loginFields = [
  {
    name: 'email',
    component: Input,
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    isFirst: true,
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
    autoComplete: 'current-password',
    placeholder: 'Password',
    isLast: true,
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
    name: 'remember_me',
    component: Checkbox,
    label: 'Remember Me',
  },
];
