import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainActions, DomainState } from '../../state';
import { Store } from '@ngrx/store';
import { Product } from '../../models';

@Component({
  selector: 'monorepo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<DomainState>
  ) {
    this.productForm = this.fb.group({
      name: [undefined, Validators.required],
      value: [
        undefined,
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = {
        name: this.productForm.value.name,
        value: parseFloat(this.productForm.value.value),
      };

      this.store.dispatch(DomainActions.createProduct({ product }));
    }
  }
}
