import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule, FooterComponent, HeaderComponent } from 'app/shared';
import { RouterModule } from '@angular/router';
import { PublicLayoutRoutes } from './public-layout-routing';
import { ProductListGridComponent } from 'app/product-list-grid/product-list-grid.component';
import { PropertyInfoComponent } from 'app/property-info/property-info.component';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PublicLayoutRoutes),
    SharedModule,   
    Ng5SliderModule,
  ],
  declarations: [    
    //FooterComponent,
    //HeaderComponent,
    ProductListGridComponent,
    PropertyInfoComponent
  ]
})
export class PublicLayoutModule { }
