import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageComponent } from './cart-page/cart-page.component';



@NgModule({
  declarations: [
    CartPageComponent
  ],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    SharedModule
  ]
})
export class CommerceModule { }
