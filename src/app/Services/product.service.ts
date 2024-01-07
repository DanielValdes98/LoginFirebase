import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Product } from '../Interfaces/product';
import { Observable, of, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private firestore: Firestore) { }

  listProducts() : Observable<Product[]> {
    const productRef = collection(this.firestore, 'products'); 
    return collectionData(productRef, { idField: 'id' }) as Observable<Product[]>;
  }

  addProduct(product: Product) {
    const productRef = collection(this.firestore, 'products'); // Reference to the products collection, if it's not necessary exists, it will be created to insert the new product
    return of(addDoc(productRef, product)); // Add the new product to the products collection into the Firestore database
  }

  getProduct(id: string) {
    const productDocRef = doc(this.firestore, `products/${id}`);
    return from(getDoc(productDocRef)).pipe(
      map((snapshot) => snapshot.data() as Product)
    );
  }

  updateProduct(product: Product, id: string){
    console.log("Product to update: ", product);
    console.log("Id: ", id);

    const productDocRef = doc(this.firestore, 'products', id); // Search the product to update by id

    console.log("Product doc ref: ", productDocRef);

    updateDoc(productDocRef,  { ...product }) // Update the product
  }

  deleteProduct(product: Product){
    const productDocRef = doc(this.firestore, `products/${product.id}`); // Other way to get the reference to the product to delete searching by id
    return deleteDoc(productDocRef);
  }

}
