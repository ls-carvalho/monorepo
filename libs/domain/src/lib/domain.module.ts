import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './components/grid/grid.component';
import { FormComponent } from './components/form/form.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DomainEffects } from './state/effects/domain.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DOMAIN_FEATURE_KEY, DomainReducers } from './state';
import { InMemoryCache } from '@apollo/client/core';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(DOMAIN_FEATURE_KEY, DomainReducers.domainReducer),
    EffectsModule.forFeature([DomainEffects]),
    ReactiveFormsModule,
    HttpClientModule,
    ApolloModule,
    FormsModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://localhost:7126/graphql/products/',
          }),
        };
      },
      deps: [HttpLink],
    },
    FormsModule,
  ],
  declarations: [GridComponent, FormComponent],
  exports: [GridComponent, FormComponent],
})
export class DomainModule {}
