import { Product } from '../models';

export const DOMAIN_FEATURE_KEY = 'domain';

export interface DomainState {
  listProducts: Product[];
}

export const initialDomainState: DomainState = {
  listProducts: [],
};
