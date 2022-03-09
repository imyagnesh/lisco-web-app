import { SessionProvider } from 'next-auth/react';
import '@styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';

// <> -> Fragment

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      {getLayout(<Component {...pageProps} />)}
    </SessionProvider>
  );
}

export default MyApp;
