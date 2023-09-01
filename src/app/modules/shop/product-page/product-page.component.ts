import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PRODUCTS } from 'src/app/common/mocks/products';
import { Product, Sofa } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  key = this.route.snapshot.paramMap.get('key') as string;
  products: any = PRODUCTS;
  product!: any;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getProductFromLocalStorage();
  }

  public increase() {
    return this.quantity = this.quantity + 1;
  }

  public decrease() {
    return this.quantity < 2 ? this.quantity = this.quantity : this.quantity = this.quantity - 1;
  }

  private getProductFromLocalStorage() {
    this.product = JSON.parse(localStorage.getItem('product')!);
  }
}
