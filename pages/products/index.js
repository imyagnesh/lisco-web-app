import ProductsQuery from '@queries/productsQuery';
import React from 'react';

const Products = ({ products }) => {
  console.log(products);
  const filterCategory = () => {
    //api
  };

  return <div>Products</div>;
};

export async function getServerSideProps(context) {
  console.log(context.query);
  const { category } = context.query;
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const variables = {};
  if (category) {
    variables.categoryId = category;
  }

  const res = await fetch(`${baseUrl}/graphql`, {
    method: 'post',
    body: JSON.stringify({
      query: ProductsQuery(category ? true : false),
      variables,
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  const json = await res.json();

  return {
    props: {
      products: json.data,
    },
  };
}

export default Products;
