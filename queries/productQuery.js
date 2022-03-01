const ProductQuery = `query($id:ID) {
  product(id:$id) {
    data {
      attributes {
        productName
        productImage {
          data {
            id
            attributes {
              url
            }
          }
        }
        features
        price
        currency
        PrinterInfo {
          key
          Values {
            Text
          }
        }
        category {
          data {
            attributes {
              category
              description
            }
          }
        }
      }
    }
  }
}`;

export default ProductQuery;
