import { SessionProvider } from 'next-auth/react';
import '@styles/globals.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { CartContext, CartProvider } from 'context/cartContext';

// <> -> Fragment

function MyApp({ Component, pageProps: { session, carts, ...pageProps } }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <SessionProvider session={session}>
      <CartProvider carts={carts}>
        {getLayout(<Component {...pageProps} />)}
      </CartProvider>
    </SessionProvider>
  );
}

export default MyApp;
