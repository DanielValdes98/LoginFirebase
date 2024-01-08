import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { ProductCreateComponent } from './Components/Pages/product-create/product-create.component';
import { ProductsListComponent } from './Components/Pages/products-list/products-list.component';
import { ProductDetailComponent } from './Components/Pages/product-detail/product-detail.component';
import { ProductEditComponent } from './Components/Pages/product-edit/product-edit.component';
import { ImagesComponent } from './Components/Pages/images/images.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';


const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full' }, 
  { path: 'login', component: LoginComponent }, 
  { path: 'register', component: RegisterComponent }, 

  { path: 'Pages/product-create', component: ProductCreateComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'Pages/products-list', component: ProductsListComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'Pages/product-detail/:id', component: ProductDetailComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'Pages/product-edit/:id', component: ProductEditComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },
  { path: 'Pages/images', component: ImagesComponent, ...canActivate(() => redirectUnauthorizedTo(['/login'])) },

  { path: '**', redirectTo: 'login', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
