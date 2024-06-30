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

//
// Load Product
//
export const loadProducts = createAction('[Grid] Load Products');

export const loadProductsComplete = createAction(
  '[Grid/API] Load Products Complete',
  props<{ products: Product[] }>()
);

//
// Edit Product
//
export const editProduct = createAction(
  '[Grid] Edit Products',
  props<{ product: Product }>()
);

export const editProductComplete = createAction(
  '[Form/API] Edit Product Complete',
  props<{ product: Product }>()
);

//
// Delete Product
//
export const deleteProduct = createAction(
  '[Grid] Delete Products',
  props<{ productId: number }>()
);

export const deleteProductComplete = createAction(
  '[Form/API] Delete Product Complete',
  props<{ productId: number }>()
);
