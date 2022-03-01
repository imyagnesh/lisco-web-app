// import { serialize } from 'next-mdx-remote/serialize';
// import { MDXRemote } from 'next-mdx-remote';
import ProductQuery from '@queries/productQuery';
import MarkdownLayout from 'layouts/MarkdownLayout';
import markdownToHtml from 'lib/markdownToHtml';
import React from 'react';

const Product = ({ product, content }) => {
  console.log(product);

  // return null;
  return (
    <div>
      <h1>{product.data.attributes.productName}</h1>
      <MarkdownLayout content={content} />
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

  const content = await markdownToHtml(
    json.data.product.data.attributes.features || ''
  );

  return {
    props: {
      product: json.data.product,
      content,
    },
  };
}

export default Product;
