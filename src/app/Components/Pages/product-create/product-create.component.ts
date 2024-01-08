import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  formProduct: FormGroup;  // Form to create a product

  constructor(private _productService: ProductService, private fb: FormBuilder) {

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
  }

  async onSubmit() {
    console.log(this.formProduct.value);
    const response = await this._productService.addProduct(this.formProduct.value).subscribe((res) => console.log(res));
    console.log(response);
    this.formProduct.reset();
  }

}
