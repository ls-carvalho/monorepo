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
