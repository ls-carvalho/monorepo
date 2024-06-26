import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromProduct from './state/product.reducer';
import { ProductEffects } from './state/product.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromProduct.PRODUCT_FEATURE_KEY,
      fromProduct.productReducer
    ),
    EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [GridComponent, FormComponent],
})
export class DomainModule {}
