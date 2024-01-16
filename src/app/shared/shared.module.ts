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



@NgModule({
    declarations: [
        BannerComponent,
        ProductCardComponent,
        BreadcrumbComponent,
        BenefitsComponent,
        SpinnerComponent,
        DiscountComponent,
    ],
    exports: [
        BannerComponent,
        ProductCardComponent,
        BreadcrumbComponent,
        BenefitsComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ChekTypePipe
    ]
})
export class SharedModule { }
