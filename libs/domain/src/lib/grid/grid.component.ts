import { Component } from '@angular/core';
import { ProductEntity } from '../state/product.models';

@Component({
  selector: 'monorepo-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  products: ProductEntity[] = [
    { name: 'Product 1', value: 10.99 },
    { name: 'Product 2', value: 20.49 },
    { name: 'Product 3', value: 15.75 },
  ];
}
