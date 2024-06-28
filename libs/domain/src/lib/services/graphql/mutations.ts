import { gql } from 'apollo-angular';

export const CREATE_PRODUCT = gql`
  mutation createProduct($createProduct: CreateProductDtoInput!) {
    createProduct(product: $createProduct) {
      id
      name
      value
    }
  }
`;
