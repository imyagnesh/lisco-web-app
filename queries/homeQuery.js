const HomeQuery = `query($categoryId:ID, $start: Int = 0, $limit: Int = 5) {
  banners {
    data {
      id
      attributes {
        bannerImage {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  categories {
    data {
      id
      attributes {
        category
        image {
          data {
            attributes {
              url
            }
          }
        }
      }
    }
  }
  products(filters: {category: { id: { eq: $categoryId  }}}, pagination: { start: $start, limit: $limit}) {
    data {
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

export default HomeQuery;
