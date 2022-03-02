import '@styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';

// <> -> Fragment

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
