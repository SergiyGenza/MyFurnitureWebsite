import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';

import { ShopFilterComponent } from './shop-filter/shop-filter.component';
import { ShopRoutingModule } from './shop.routing';
import { ProductPageComponent } from './product-page/product-page.component';


@NgModule({
    imports: [
    CommonModule,
    ShopRoutingModule,
    ShopPageComponent,
    ShopFilterComponent,
    ProductPageComponent,
],
})
export class ShopModule { }
