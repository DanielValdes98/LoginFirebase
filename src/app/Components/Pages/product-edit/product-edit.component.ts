import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  formProduct: FormGroup;  // Form to edit a product
  product$!: Observable<Product>;
  id!: string;

  constructor( private _productService: ProductService, private fb: FormBuilder, private _activatedRouted: ActivatedRoute ) {
      // Initialize the form
      this.formProduct = this.fb.group({
        description: ['', Validators.required],
        stock: ['', Validators.required],
        price: ['', Validators.required],
        image: ['', Validators.required],
        isActive: [true, Validators.required]
      });
   } 

  ngOnInit(): void {
    this.id = this._activatedRouted.snapshot.params['id'];
    this._productService.getProduct(this.id).subscribe((data) => this.formProduct.patchValue(data));
  }

  saveProduct() {
    this._productService.updateProduct(this.formProduct.value as Product, this.id);
  }

}
