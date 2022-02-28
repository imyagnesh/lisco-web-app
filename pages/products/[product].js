import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import ProductQuery from '@queries/productQuery';
import MarkdownLayout from 'layouts/MarkdownLayout';
import React from 'react';

const Product = ({ product, mdxSource }) => {
  console.log(product);

  console.log(mdxSource);
  // return null;
  return (
    <div>
      <h1>{product.data.attributes.productName}</h1>
      <MarkdownLayout>{product.data.attributes.features}</MarkdownLayout>
    </div>
  );
};

export async function getServerSideProps(context) {
  const productId = context.params.product;

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/graphql`, {
    method: 'post',
    body: JSON.stringify({
      query: ProductQuery,
      variables: {
        id: productId,
      },
    }),
    headers: {
      'content-type': 'application/json',
    },
  });

  const json = await res.json();

  const mdxSource = await serialize(json.data.product.data.attributes.features);

  console.log(mdxSource);

  return {
    props: {
      product: json.data.product,
      mdxSource,
    },
  };
}

export default Product;
