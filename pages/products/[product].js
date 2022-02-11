import React from 'react';

const Product = ({ product }) => {
  const productObj = JSON.parse(product);
  return <div>{productObj.title}</div>;
};

export async function getServerSideProps(context) {
  const productId = context.params.product;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${productId}`
  );

  const json = await res.json();

  return {
    props: {
      product: JSON.stringify(json),
    },
  };
}

export default Product;
