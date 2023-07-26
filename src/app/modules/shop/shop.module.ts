import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopFilterComponent } from './shop-filter/shop-filter.component';
import { ShopRoutingModule } from './shop.routing';


@NgModule({
  declarations: [
    ShopPageComponent,
    ShopFilterComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
  ],
})
export class ShopModule { }
