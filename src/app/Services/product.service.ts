import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from '@angular/fire/firestore';
import { Product } from '../Interfaces/product';
import { Observable } from 'rxjs';
// import { collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'products'); // Reference to the products collection, if it's not necessary exists, it will be created to insert the new product
    return addDoc(productRef, product); // Add the new product to the products collection into the Firestore database
  }

  getProducts() : Observable<Product[]> {
    const productRef = collection(this.firestore, 'products'); 
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }

  deleteProduct(product: Product){
    const productDocRef = doc(this.firestore, `products/${product.id}`);
    return deleteDoc(productDocRef);
  }

}
