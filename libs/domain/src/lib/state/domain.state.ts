import { Product } from '../models';

export const DOMAIN_FEATURE_KEY = 'domain';

export interface DomainState {
  listProducts: Product[];
  /* selectedProduct?: Product */
}

export const initialDomainState: DomainState = {
  listProducts: [],
  /* selectedProduct: undefined */
};
