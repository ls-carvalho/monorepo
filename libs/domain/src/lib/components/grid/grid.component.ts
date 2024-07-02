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
  edit: number | null = null;
  editedProduct: Product | null = null;
  constructor(private readonly store: Store<DomainState>) {
    this.store.dispatch(DomainActions.loadProducts());
    this.store
      .select(DomainSelectos.selectProducts)
      .subscribe((products) => (this.products = products));
  }

  editProduct(index: number): void {
    this.edit = index;
    this.editedProduct = { ...this.products[index] }; // Make a copy of the product
  }

  saveProduct(): void {
    if (this.editedProduct) {
      this.store.dispatch(
        DomainActions.editProduct({ product: this.editedProduct })
      );
      this.edit = null;
      this.editedProduct = null;
    }
  }

  deleteProduct(productId: number): void {
    this.store.dispatch(DomainActions.deleteProduct({ productId }));
  }
}
