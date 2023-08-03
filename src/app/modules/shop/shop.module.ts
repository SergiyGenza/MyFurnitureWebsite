import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopFilterComponent } from './shop-filter/shop-filter.component';
import { ShopRoutingModule } from './shop.routing';
import { ProductPageComponent } from './product-page/product-page.component';


@NgModule({
  declarations: [
    ShopPageComponent,
    ShopFilterComponent,
    ProductPageComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
  ],
})
export class ShopModule { }
