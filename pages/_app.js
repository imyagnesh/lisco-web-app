import Footer from '@components/Footer';
import Header from '@components/Header';
import '@styles/globals.css';

// <> -> Fragment

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
