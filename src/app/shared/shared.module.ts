import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { DiscountComponent } from './discount/discount.component';
import { ChekTypePipe } from "../common/pipes/ChekType.pipe";
import { CheckboxComponent } from './elements/checkbox/checkbox.component';
import { FormsModule } from '@angular/forms';
import { CartProductItemComponent } from './elements/cart-product-item/cart-product-item.component';



@NgModule({
    declarations: [
        BannerComponent,
        ProductCardComponent,
        BreadcrumbComponent,
        BenefitsComponent,
        SpinnerComponent,
        DiscountComponent,
        CheckboxComponent,
        CartProductItemComponent,

    ],
    exports: [
        BannerComponent,
        ProductCardComponent,
        BreadcrumbComponent,
        BenefitsComponent,
        DiscountComponent,
        SpinnerComponent,
        CheckboxComponent,
        CartProductItemComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        ChekTypePipe,
        FormsModule
    ]
})
export class SharedModule { }
