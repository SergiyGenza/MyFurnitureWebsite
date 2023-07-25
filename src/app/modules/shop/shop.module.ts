import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ShopRoutingModule } from './shop-routing.module';


@NgModule({
  declarations: [
    ShopPageComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
})
export class ShopModule { }
