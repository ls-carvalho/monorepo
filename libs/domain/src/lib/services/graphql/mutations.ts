import { gql } from 'apollo-angular';

/* Retirei a propriedade id de createProduct */
export const CREATE_PRODUCT = gql`
  mutation createProduct($createProduct: CreateProductDtoInput!) {
    createProduct(product: $createProduct) {
      name
      value
    }
  }
`;

export const EDIT_PRODUCT = gql`
  mutation updateProduct($updateProduct: UpdateProductDtoInput!) {
    updateProduct(product: $updateProduct) {
      id
      name
      value
    }
  }
`;

export const DELETE_PRODUCT = gql`
  mutation deleteProduct($id: Long!) {
    deleteProduct(id: $id) {
      id
    }
  }
`;
