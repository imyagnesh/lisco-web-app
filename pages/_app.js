import Footer from '@components/Footer';
import Header from '@components/Header';
import '@styles/globals.css';

// <> -> Fragment

function MyApp({ Component, pageProps }) {
  console.log(Component);
  console.log(pageProps);
  return <Component {...pageProps} />;
}

export default MyApp;
