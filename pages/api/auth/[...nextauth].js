import axiosInstance from 'lib/axiosInstance';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        identifier: { label: 'Username', type: 'text', placeholder: 'jsmith' },
        password: { label: 'Password', type: 'password' },
      },
      session: {
        jwt: true,
      },
      async authorize(credentials) {
        try {
          const res = await axiosInstance.post('api/auth/local', {
            identifier: credentials.identifier,
            password: credentials.password,
          });
          console.log(res.data);
          return res.data;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        token.jwt = user.jwt;
        token.id = user.user.id;
        token.name = user.user.username;
        token.email = user.user.email;
      }
      return Promise.resolve(token);
    },
    session: async (session, user) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        session.jwt = user.jwt;
        session.id = user.id;
      }
      return Promise.resolve(session);
    },
  },
});
