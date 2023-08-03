import { Component } from '@angular/core';
import { BENEFITS } from 'src/app/common/mocks/benefits';
import { PRODUCTS } from 'src/app/common/mocks/products';
import { SHOP } from 'src/app/common/mocks/shop';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
  shop = SHOP;
  benefits = BENEFITS;
  products = PRODUCTS;
}
