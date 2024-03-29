import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment.development';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ProductCreateComponent } from './Components/Pages/product-create/product-create.component';
import { ProductsListComponent } from './Components/Pages/products-list/products-list.component';
import { ProductDetailComponent } from './Components/Pages/product-detail/product-detail.component';
import { ProductEditComponent } from './Components/Pages/product-edit/product-edit.component';
import { ImagesComponent } from './Components/Pages/images/images.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ProductCreateComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // provideFirebaseApp(() => initializeApp({"projectId":"app-angular-4f712","appId":"1:1002221895771:web:3145743fb787d3253c3f7e","storageBucket":"app-angular-4f712.appspot.com","apiKey":"AIzaSyApdWSF6Pr8lSjtT7eVMGtVt0bLm_biLs4","authDomain":"app-angular-4f712.firebaseapp.com","messagingSenderId":"1002221895771","measurementId":"G-CG8B4EK2VB"})),
    //provideFirebaseApp(() => initializeApp({"projectId":"app-angular-4f712","appId":"1:1002221895771:web:3145743fb787d3253c3f7e","storageBucket":"app-angular-4f712.appspot.com","locationId":"us-central","apiKey":"AIzaSyApdWSF6Pr8lSjtT7eVMGtVt0bLm_biLs4","authDomain":"app-angular-4f712.firebaseapp.com","messagingSenderId":"1002221895771","measurementId":"G-CG8B4EK2VB"})),
    provideFirebaseApp(() => initializeApp(environment.firebase)), // Development environment
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideStorage(() => getStorage())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
