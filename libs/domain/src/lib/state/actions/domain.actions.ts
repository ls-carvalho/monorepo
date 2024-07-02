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
  '[Form/API] Create Product Failure'
);

//
// Select Product for Editing
//
export const selectProductForEditing = createAction(
  '[Form] Select Product for Editing',
  props<{ product: Product }>()
);

export const selectProductForEditingComplete = createAction(
  '[Form] Select Product for Editing Complete'
);

//
// Edit Product
//
export const editProduct = createAction(
  '[Form] Edit Product',
  props<{ product: Product }>()
);

export const editProductComplete = createAction(
  '[Form/API] Edit Product Complete',
  props<{ products: Product[] }>()
);

//
// Delete Product
//
export const deleteProduct = createAction(
  '[Form] Delete Product',
  props<{ id: number }>()
);

export const deleteProductComplete = createAction(
  '[Form/API] Delete Product Complete',
  props<{ products: Product[] }>()
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