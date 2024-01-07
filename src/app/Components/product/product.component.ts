import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  formularioProducto: FormGroup;  // Form to create or edit a product
  products: Product[];  // List of products
  product$!: Observable<Product>; // To get the product to edit or show details
  idProducto!: string; // Id of the product to edit

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
    this._productService.listProducts().subscribe(products => {
      // console.log("Products list (getProducts): ", products);
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
    const response = await this._productService.addProduct(this.formularioProducto.value).subscribe((res) => console.log(res));
    console.log(response);
  }

  async editProduct(id: string) {
    this.idProducto = id;
    await this._productService.getProduct(id).subscribe((data) => this.formularioProducto.patchValue(data));
  }

  saveProduct() {
    this._productService.updateProduct(this.formularioProducto.value as Product, this.idProducto);
  }

  async getProduct(id: string) {
    console.log("Id: ", id);
    this.product$ = await this._productService.getProduct(id);
  }

}
