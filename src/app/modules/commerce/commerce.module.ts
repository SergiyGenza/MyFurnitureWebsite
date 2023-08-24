import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ComparisonPageComponent } from './comparison-page/comparison-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ProductDescriptionItemComponent } from './product-description-item/product-description-item.component';



@NgModule({
  declarations: [
    CartPageComponent,
    ComparisonPageComponent,
    CheckoutPageComponent,
    ProductDescriptionItemComponent
  ],
  imports: [
    CommonModule,
    CommerceRoutingModule,
    SharedModule
  ]
})
export class CommerceModule { }
