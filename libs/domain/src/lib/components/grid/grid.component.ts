import { Component } from '@angular/core';
import { Product } from '../../models';
import { Store } from '@ngrx/store';
import { DomainActions, DomainSelectos, DomainState } from '../../state';

@Component({
  selector: 'monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  products: Product[] = [];
  constructor(private readonly store: Store<DomainState>) {
    this.store.dispatch(DomainActions.loadProducts());
    this.store
      .select(DomainSelectos.selectProducts)
      .subscribe((products) => (this.products = products));
  }
}
