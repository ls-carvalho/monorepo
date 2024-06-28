import { gql } from 'apollo-angular';

export const GET_PRODUCTS = gql`
  query getProducts {
    readProduct {
      items {
        id
        name
        value
      }
      totalCount
    }
  }
`;
