import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, mergeMap, tap, withLatestFrom } from 'rxjs';
import { DomainActions, DomainSelectos, DomainState } from '..';
import { ApolloService } from '../../services';
import { Store } from '@ngrx/store';
import { Product } from '../../models';

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
        }
        else {
          return DomainActions.createProductFailure();
        }
      })
    )
  );

  editProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.editProduct),
      mergeMap((action) => this.apolloService.editarProduct(action.product)),
      withLatestFrom(this.store.select(DomainSelectos.selectProducts)),
      map(([result, productsFromState]) => {
        if (result.data) {
          const updatedProduct: Product = (result.data as any).updateProduct;
          const updatedList = productsFromState.reduce((resultingList: Product[], product) => {
            if(updatedProduct.id == product.id){
              resultingList.push(updatedProduct);
            } else {
              resultingList.push(product);
            }
            return resultingList;
          }, []);
          return DomainActions.editProductComplete({
            products: updatedList
          });
        }
        else {
          return DomainActions.editProductFailure();
        }
      }),
    ),
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DomainActions.deleteProduct),
      mergeMap((action) => this.apolloService.deleteProduct(action.id)),
      withLatestFrom(this.store.select(DomainSelectos.selectProducts)),
      map(([result, productsFromState]) => {
        if (result.data) {
          const idToDelete: number = (result.data as any).deleteProduct.id;
          const filteredList = productsFromState.filter(elem => elem.id !== idToDelete);
          return DomainActions.deleteProductComplete({
            products: filteredList
          });
        }
        else {
          return DomainActions.deleteProductFailure();
        }
      }),
    ),
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
    private readonly apolloService: ApolloService,
    private readonly store: Store<DomainState>
  ) {}
}
