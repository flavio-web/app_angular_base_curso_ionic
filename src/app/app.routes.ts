import { Routes } from '@angular/router';
import { ProductComponent } from './pages/products/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: 'products/:id',
    loadComponent: () => import('./pages/products/show-product/show-product.component').then( c => c.ShowProductComponent )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
