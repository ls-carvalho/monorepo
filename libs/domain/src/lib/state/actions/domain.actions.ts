import { createAction, props } from '@ngrx/store';
import { Product } from '../../models/product.models';

//
// Create Product
//
export const createProduct = createAction(
  '[Form] Create Product',
  props<{ product: Product }>()
);

export const createProductComplete = createAction(
  '[Form/API] Create Product Complete',
  props<{ product: Product }>()
);

export const createProductFailure = createAction(
  '[Form/API] Create Product Complete'
);

//
// Load Product
//
export const loadProducts = createAction('[Grid] Load Products');

export const loadProductsComplete = createAction(
  '[Grid/API] Load Products Complete',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Grid/API] Load Products Failure'
);
