import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [CommonModule],
  declarations: [GridComponent, FormComponent],
})
export class DomainModule {}
