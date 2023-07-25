import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProductCardComponent } from './product-card/product-card.component';



@NgModule({
  declarations: [
    BannerComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
