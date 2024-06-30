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
      map((result) => DomainActions.createProductComplete({ product: result }))
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.loadProducts),
      mergeMap(() => this.apolloService.loadProducts()),
      map((result) => DomainActions.loadProductsComplete({ products: result }))
    )
  );

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.editProduct),
      mergeMap((action) =>
        this.apolloService
          .editProduct(action.product)
          .pipe(
            map((product) => DomainActions.editProductComplete({ product }))
          )
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly apolloService: ApolloService
  ) {}
}
