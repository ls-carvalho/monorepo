import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomainActions, DomainSelectos, DomainState } from '../../state';
import { Store } from '@ngrx/store';
import { Product } from '../../models';

@Component({
  selector: 'monorepo-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  productForm!: FormGroup;
  selectedForEdit?: Product;

  constructor(
    private fb: FormBuilder,
    private readonly store: Store<DomainState>
  ) {}

  ngOnInit() {
    this.productForm = this.fb.group({
      name: [undefined, Validators.required],
      value: [
        undefined,
        [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)],
      ],
    });

    this.store
      .select(DomainSelectos.selectProductForEditing)
      .subscribe((product) => {
        this.fillForm(product);
        this.selectedForEdit = product;
      });
  }

  fillForm( product: Product | undefined ): void {
    if( product ) {
      this.productForm.patchValue(
        {
          name: product.name,
          value: product.value
        }
      )
      return;
    }

    this.productForm.patchValue(
      {
        name: undefined,
        value: undefined
      }
    )
  }

  onSubmit(): void {

    if( this.productForm.valid ) {

      if( this.selectedForEdit ) {

        this.store.dispatch( DomainActions.editProduct(
          {
            product: 
              {
                name: this.productForm.value.name,
                value: parseFloat(this.productForm.value.value),
                id: this.selectedForEdit.id
              }
            }
          
        ))

        this.store.dispatch(DomainActions.selectProductForEditingComplete());
      }
      else {
        console.log(this.productForm.value.value);

        this.store.dispatch( DomainActions.createProduct({ product: {
          name: this.productForm.value.name,
          value: parseFloat(this.productForm.value.value)
        } }))
      }
    }
  }
}
