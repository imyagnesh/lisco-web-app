const HomeQuery = `{
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
    category(id: 1) {
      data {
        attributes {
          category
        }
      }
    }
    products(filters: { categories: {id: { eq: 1 }}}, pagination: { start: 0, limit: 5}) {
      data {
        attributes  {
          productName
          productImage(pagination: { start: 0, limit: 1}) {
            data {
              id
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }`;

export default HomeQuery;
