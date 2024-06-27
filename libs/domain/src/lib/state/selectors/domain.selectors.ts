import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DOMAIN_FEATURE_KEY, DomainState } from '../domain.state';

export const selectDomainState =
  createFeatureSelector<DomainState>(DOMAIN_FEATURE_KEY);

export const selectProducts = createSelector(
  selectDomainState,
  (state: DomainState) => state.listProducts
);
