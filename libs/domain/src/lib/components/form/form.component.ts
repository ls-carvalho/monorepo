import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainActions, DomainState } from '../../state';
import { Store } from '@ngrx/store';
import { Product } from '../../models';
import { EditingService } from '../../services/editing.service';

@Component({
  selector: 'monorepo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  productForm: FormGroup;
  isEditing!: boolean;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<DomainState>,
    private editingService: EditingService
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

  ngOnInit() {
    this.editingService.isEditing().subscribe( (boolean) =>
      {
        this.isEditing = boolean;
        this.productForm.patchValue({
          name: this.editingService.product.name,
          value: this.editingService.product.value
        })
      }
    )
  }

  onSubmitSave(): void {
    if ( this.productForm.valid ) {
      const product: Product = {
        name: this.productForm.value.name,
        value: parseFloat(this.productForm.value.value),
      };

      this.store.dispatch(DomainActions.createProduct({ product }));
    }
  }

  onSubmitEdit(): void {
    if ( this.productForm.valid ) {
      this.store.dispatch(
        DomainActions.editProduct( {
          product: {
            ...this.productForm.value,
            id: this.editingService.product.id
          }
        }
      ));
    }

    this.editingService.endEditing();
  }
}
