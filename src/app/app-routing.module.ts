import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ProductVisageComponent } from './components/product-visage/product-visage.component';
import { ProductCorpsComponent } from './components/product-corps/product-corps.component';  
import { CartComponent } from './components/carts/carts.component'; // Importer le composant du panier

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'visage', component: ProductVisageComponent },
  { path: 'corps', component: ProductCorpsComponent },
  { path: 'cart', component: CartComponent }, // Route pour le panier


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
