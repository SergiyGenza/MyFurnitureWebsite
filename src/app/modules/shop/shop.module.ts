import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShopFilterComponent } from './shop-filter/shop-filter.component';


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
