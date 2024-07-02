import { createReducer, on } from '@ngrx/store';
import { initialDomainState } from '../domain.state';
import { DomainActions } from '..';

export const domainReducer = createReducer(
  initialDomainState,

  // Create Product
  on(DomainActions.createProductComplete, (state, action) => {
    return {
      ...state,
      listProducts: [...state.listProducts, action.product],
    };
  }),

  // Select Product for Editing
  on(DomainActions.selectProductForEditing, (state, action) => {
    return {
      ...state,
      selectedProduct: action.product
    };
  }),
  on(DomainActions.selectProductForEditingComplete, (state) => {
    return {
      ...state,
      selectedProduct: undefined
    };
  }),

  // Edit Product
  on(DomainActions.editProductComplete, (state, action) => {
    return {
      ...state,
      listProducts: action.products,
    };
  }),

  // Delete Product
  on(DomainActions.deleteProductComplete, (state, action) => {
    return {
      ...state,
      listProducts: action.products,
    };
  }),

  // Load Product
  on(DomainActions.loadProducts, (state) => {
    return {
      ...state,
      listProducts: [],
    };
  }),
  on(DomainActions.loadProductsComplete, (state, action) => {
    return {
      ...state,
      listProducts: action.products,
    };
  })
);
