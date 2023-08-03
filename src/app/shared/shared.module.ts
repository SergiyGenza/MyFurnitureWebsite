import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BannerComponent,
    ProductCardComponent,
    BreadcrumbComponent,
    BenefitsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BannerComponent,
    ProductCardComponent,
    BreadcrumbComponent,
    BenefitsComponent,
    
  ]
})
export class SharedModule { }
