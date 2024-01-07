import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  formularioProducto: FormGroup;  // Form to create or edit a product
  products: Product[];  // List of products

  constructor ( private _productService: ProductService, private fb: FormBuilder ) {
    
    // Initialize the form
    this.formularioProducto = this.fb.group({
      description: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      isActive: [true, Validators.required]
    });

    this.products = [{
      description: 'Demo product',
      stock: 10,
      price: '10.00',
      image: 'https://media.timeout.com/images/105718969/750/422/image.jpg',
      isActive: true
    }];

  }

  ngOnInit(): void {
    this._productService.getProducts().subscribe(products => {
      console.log("Products list (getProducts): ", products);
      this.products = products;
    })
  }

  async onClickDelete(product: Product) {
    console.log("Product to delete: ", product);
    const response = await this._productService.deleteProduct(product);
    console.log("Product deleted: ", response);
  }

  async onSubmit() {
    console.log(this.formularioProducto.value);
    const response = await this._productService.addProduct(this.formularioProducto.value);
    console.log(response);
  }

}
