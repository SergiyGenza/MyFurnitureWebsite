import { Component } from '@angular/core';
import { CHECKOUT } from 'src/app/common/mocks/checkout';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent {
  checkout = CHECKOUT;
  shoping = SHOPING_CART;
}
