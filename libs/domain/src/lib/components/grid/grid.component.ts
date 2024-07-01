import { Component } from '@angular/core';
import { Product } from '../../models';
import { Store } from '@ngrx/store';
import { DomainActions, DomainSelectos, DomainState } from '../../state';
import { EditingService } from '../../services/editing.service';

@Component({
  selector: 'monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  products: Product[] = [];
  constructor(
    private readonly store: Store<DomainState>,
    private editingService: EditingService
  ) {
    this.store.dispatch(DomainActions.loadProducts());
    this.store
      .select(DomainSelectos.selectProducts)
      .subscribe((products) => (this.products = products));
  }

  onEdit( product: Product ) {
    this.editingService.startEditing( product );
  }

  onDelete( id: number ) {
    if ( id !== undefined ) {
      this.store.dispatch(
        DomainActions.deleteProduct({ id: id })
      );
    }
  }
}
