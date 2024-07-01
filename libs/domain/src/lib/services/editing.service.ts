import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EditingService {

  private editing$ = new BehaviorSubject<boolean>( false );
  product!: Product;

  isEditing(): Observable<boolean> {
    return this.editing$.asObservable();
  }

  /* toggleEditing( product: Product ): void {
    this.product = product;
    this.editing$.next( !this.editing$.getValue() );
  } */

  startEditing( product: Product ): void {
    this.product = product;
    this.editing$.next( true );
  }

  endEditing(): void {
    this.editing$.next( false );
  }
}