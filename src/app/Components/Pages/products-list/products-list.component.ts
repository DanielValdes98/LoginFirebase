import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[];  // List of products

  constructor ( private _productService: ProductService, private _userService: UserService, private _router: Router ) { 
    this.products = [];
  }

  ngOnInit(): void {
    this._productService.listProducts().subscribe(products => {
      console.log("Products list (getProducts): ", products);
      this.products = products;
    })
  }

  async deleteProduct(product: Product) {
    console.log("Product to delete: ", product);
    await this._productService.deleteProduct(product);
  }

  logout() {
    this._userService.logout()
      .then(() => {
        this._router.navigate(['/login']);
      })
      .catch(error => {
        console.log(error);
      })
  }

}
