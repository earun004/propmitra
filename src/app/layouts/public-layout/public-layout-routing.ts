import { Routes } from '@angular/router';
import { PropertyInfoComponent } from 'app/property-info/property-info.component';
import { ProductListGridComponent } from 'app/product-list-grid/product-list-grid.component';

export const PublicLayoutRoutes: Routes = [
  { path: 'search', component: ProductListGridComponent },
  { path: 'property/:id', component: PropertyInfoComponent }
];
