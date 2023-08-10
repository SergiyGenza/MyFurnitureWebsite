import { Component } from '@angular/core';
import { COMPARISON } from 'src/app/common/mocks/comparison';
import { PRODUCTS } from 'src/app/common/mocks/products';
import { Product } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent {
  products: Array<Product> = PRODUCTS;
  comparison = COMPARISON;
}
