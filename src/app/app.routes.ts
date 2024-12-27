import { Routes } from '@angular/router';
import { ProductComponent } from './pages/products/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];
