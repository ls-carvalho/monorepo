import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap } from 'rxjs';
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
      map((result) => {
        if (result.data) {
          return DomainActions.createProductComplete({
            product: (result.data as any).createProduct,
          });
        } else {
          return DomainActions.createProductFailure();
        }
      })
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

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.editProduct),
      mergeMap((action) =>
        this.apolloService.editProduct(action.product).pipe(
          map((result) => {
            if (result.data) {
              return DomainActions.editProductComplete({
                product: (result.data as any).updateProduct,
              });
            } else {
              return DomainActions.editProductFailure();
            }
          })
        )
      )
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.deleteProduct),
      mergeMap((action) =>
        this.apolloService.deleteProduct(action.productId).pipe(
          map((result) => {
            if (result.data) {
              return DomainActions.deleteProductComplete({
                productId: action.productId,
              });
            } else {
              return DomainActions.deleteProductFailure();
            }
          })
        )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apolloService: ApolloService
  ) {}
}
