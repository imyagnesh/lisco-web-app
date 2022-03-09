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
      async authorize(credentials, req) {
        console.log({
          identifier: credentials.identifier,
          password: credentials.password,
        });
        try {
          const res = await fetch(
            'https://beb1-110-227-246-36.ngrok.io/api/auth/local',
            {
              method: 'POST',
              body: JSON.stringify({
                identifier: credentials.identifier,
                password: credentials.password,
              }),
              headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
              },
            }
          );
          const json = await res.json();
          console.log('json', JSON.stringify(json));
          return json.user;
        } catch (error) {
          console.error(error);
        }
      },
    }),
  ],
});
