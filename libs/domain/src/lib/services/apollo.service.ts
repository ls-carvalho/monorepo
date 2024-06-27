import { Injectable } from '@angular/core';
import { Product } from '../models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApolloService {
  createProduct(product: Product): Observable<Product> {
    product.id = Math.floor(Math.random() * 1000);
    return of(product);
  }

  loadProducts(): Observable<Product[]> {
    const products: Product[] = [
      { id: 1, name: 'Product 1', value: 10.99 },
      { id: 2, name: 'Product 2', value: 20.49 },
      { id: 3, name: 'Product 3', value: 15.75 },
    ];
    return of(products);
  }
}
