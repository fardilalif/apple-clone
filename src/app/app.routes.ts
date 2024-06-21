import { Routes } from '@angular/router';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProductSelectionComponent } from './pages/product-selection/product-selection.component';

export const routes: Routes = [
  { path: '', component: ProductSelectionComponent },
  { path: 'detail', component: ProductDetailComponent },
];
