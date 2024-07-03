import { Injectable } from '@angular/core';
import { Product } from '../models';
import { Observable, of } from 'rxjs';
import { Apollo, MutationResult } from 'apollo-angular';
import { GET_PRODUCTS } from './graphql/queries';
import { ApolloQueryResult } from '@apollo/client/core';
import { CREATE_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT } from './graphql/mutations';
import { DomainSelectos, DomainState } from '../state';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  constructor(
    private readonly apollo: Apollo,
    private readonly store: Store<DomainState>
  ) {}

  createProduct(product: Product): Observable<MutationResult<Product>> {
    return this.apollo.mutate<Product>({
      mutation: CREATE_PRODUCT,
      variables: {
        createProduct: product,
      },
    });
  }

  /* createProduct(product: Product): Observable<Product> {
    const result: Product = {
      ...product,
      id: Math.floor(Math.random() * 1000),
    };
    return of(result);
  } */

  editarProduct( product: Product ): Observable<MutationResult<Product>> {
    return this.apollo.mutate<Product>({
      mutation: EDIT_PRODUCT,
      variables: {
        updateProduct: product,
      }
    });
  }

  /* deleteProduct( id: number ): Observable<Product[]> {
    let products: Product[] = [];

    this.store
      .select(DomainSelectos.selectProducts).subscribe(
        (value) => products = value 
      ).unsubscribe();
    
    products = products.filter( product => product.id !== id );
    
    return of(products);
  } */

  deleteProduct( id: number ): Observable<MutationResult<Product>> {
    return this.apollo.mutate<Product>({
      mutation: DELETE_PRODUCT,
      variables: {
        id: id,
      }
    });
  }

  loadProducts(): Observable<ApolloQueryResult<Product[]>> {
    return this.apollo.query<Product[]>({
      query: GET_PRODUCTS,
    });
  }
}
