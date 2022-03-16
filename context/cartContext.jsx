import axiosInstance from 'lib/axiosInstance';
import { useSession } from 'next-auth/react';
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children, carts }) => {
  const [cartData, setCartData] = useState(carts);
  const session = useSession();

  console.log(cartData);

  const addToCart = async (productId) => {
    try {
      console.log('addto cart');
      const res = await axiosInstance.post(
        'api/carts',
        {
          data: {
            productId,
            userId: session?.data?.token?.id,
            quantity: 1,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${session?.data?.token?.jwt}`,
          },
        }
      );
      setCartData((val) => [...val, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartData,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
