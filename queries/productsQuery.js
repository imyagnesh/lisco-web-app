const ProductsQuery = (hasCategory = false) => {
  let params = '$start: Int = 0, $limit: Int = 5';
  let query = 'pagination: { start: $start, limit: $limit}';
  if (hasCategory) {
    params = `${params}, $categoryId:ID`;
    query = `${query}, filters: {category: { id: { eq: $categoryId  }}}`;
  }
  return `query(${params}) {
products(${query}) {
    data {
      id
      attributes  {
        productName
        features
        productImage(pagination: { start: 0, limit: 1}) {
          data {
            id
            attributes {
              url
              name
              hash
              ext
            }
          }
        }
      }
    }
  }
}`;
};

export default ProductsQuery;
