import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { FormComponent } from './components/form/form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DomainEffects } from './state/effects/domain.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DOMAIN_FEATURE_KEY, DomainReducers } from './state';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(DOMAIN_FEATURE_KEY, DomainReducers.domainReducer),
    EffectsModule.forFeature([DomainEffects]),
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [GridComponent, FormComponent],
  exports: [GridComponent, FormComponent],
})
export class DomainModule {}
