import axiosInstance from 'lib/axiosInstance';
import React, { useCallback, useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import Head from 'next/head';

const Cart = () => {
  const session = useSession();

  console.log(session);

  const [products, setProducts] = useState([]);

  const loadProducts = useCallback(async () => {
    if (session.status === 'authenticated') {
      console.log(session.data.token.jwt);
      const res = await fetch('https://jsonplaceholder.typicode.com/todos');

      const json = await res.json();

      console.log(json);

      setProducts(json);
    }
  }, [session]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  return (
    <div>
      <Head>
        <title>Cart</title>
      </Head>
      {products.map((x) => (
        <div key={x.id}>{x.title}</div>
      ))}
    </div>
  );
};

export default Cart;
