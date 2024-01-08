import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Interfaces/product';
import { ProductService } from 'src/app/Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product$!: Observable<Product>;

  constructor ( private _productService: ProductService, private _activatedRouted: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this._activatedRouted.snapshot.params['id'];
    console.log("Product id: ", id);
    this.product$ = this._productService.getProduct(id);
  }

}
