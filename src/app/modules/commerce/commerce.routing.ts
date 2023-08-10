import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ComparisonPageComponent } from './comparison-page/comparison-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';


const routes: Routes = [
  {
    path: 'cart',
    component: CartPageComponent,
    data: { breadcrumb: 'cart' }
  },
  {
    path: 'comparison',
    component: ComparisonPageComponent,
    data: { breadcrumb: 'comparison' }
  },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    data: { breadcrumb: 'checkout' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommerceRoutingModule { }
