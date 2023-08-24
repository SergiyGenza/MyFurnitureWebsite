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
  product!: Sofa;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findCurrentProduct();
  }

  findCurrentProduct() {
    let splited = this.key.split('-');
    let productArray: Array<Sofa> = this.products.filter((p: { code: string; }) => {
      return p.code == splited[1];
    })
    this.product = productArray[0];
  }
}
