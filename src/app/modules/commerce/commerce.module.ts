import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommerceRoutingModule } from './commerce.routing';

import { CartPageComponent } from './cart-page/cart-page.component';
import { ComparisonPageComponent } from './comparison-page/comparison-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ProductDescriptionItemComponent } from './product-description-item/product-description-item.component';
import { ComparisonToolComponent } from 'src/app/modules/commerce/comparison-tool/comparison-tool.component';
import { FormsModule } from '@angular/forms';
import { ComparisonHeadComponent } from './comparison-head/comparison-head.component';



@NgModule({
    imports: [
    CommonModule,
    CommerceRoutingModule,
    FormsModule,
    CartPageComponent,
    ComparisonPageComponent,
    CheckoutPageComponent,
    ProductDescriptionItemComponent,
    ComparisonToolComponent,
    ComparisonHeadComponent
]
})
export class CommerceModule { }
