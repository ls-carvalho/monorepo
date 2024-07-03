import { Injectable } from '@angular/core';
import { Product } from '../models';
import { Observable, of } from 'rxjs';
import { Apollo, MutationResult } from 'apollo-angular';
import { GET_PRODUCTS } from './graphql/queries';
import { ApolloQueryResult } from '@apollo/client/core';
import {
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
} from './graphql/mutations';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(private readonly apollo: Apollo) {}

  createProduct(product: Product): Observable<MutationResult<Product>> {
    return this.apollo.mutate<Product>({
      mutation: CREATE_PRODUCT,
      variables: {
        createProduct: product,
      },
    });
  }

  loadProducts(): Observable<ApolloQueryResult<Product[]>> {
    return this.apollo.query<Product[]>({
      query: GET_PRODUCTS,
    });
  }

  editProduct(product: Product): Observable<MutationResult<Product>> {
    return this.apollo.mutate<Product>({
      mutation: EDIT_PRODUCT,
      variables: {
        editProduct: product,
      },
    });
  }

  deleteProduct(productId: number): Observable<MutationResult<Product>> {
    return this.apollo.mutate<Product>({
      mutation: DELETE_PRODUCT,

      variables: {
        productId: productId,
      },
    });
  }
}
