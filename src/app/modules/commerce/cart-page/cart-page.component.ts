import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/common/mocks/products';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  products = PRODUCTS;
}
