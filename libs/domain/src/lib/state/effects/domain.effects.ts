import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { DomainActions } from '..';
import { ApolloService } from '../../services';

@Injectable()
export class DomainEffects {
  //
  // Product
  //
  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.createProduct),
      mergeMap((action) => this.apolloService.createProduct(action.product)),
      map((result) => DomainActions.createProductComplete({ product: result }))
    )
  );

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.editProduct),
      mergeMap((action) => this.apolloService.editarProduct(action.product)),
      map((products) => DomainActions.editProductComplete({ products: products }))
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.deleteProduct),
      mergeMap((action) => this.apolloService.deleteProduct(action.id)),
      map((products) => DomainActions.deleteProductComplete({ products: products }))
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.loadProducts),
      mergeMap(() => this.apolloService.loadProducts()),
      map((result) => {
        if (result.data) {
          return DomainActions.loadProductsComplete({
            products: (result.data as any).readProduct.items,
          });
        } else {
          return DomainActions.loadProductsFailure();
        }
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apolloService: ApolloService
  ) {}
}
