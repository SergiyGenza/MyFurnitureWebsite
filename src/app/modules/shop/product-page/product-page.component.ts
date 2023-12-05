import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  key: string;
  product!: Product;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
  ) {
    this.key = this.route.snapshot.paramMap.get('key') as string;
    this.product = JSON.parse(localStorage.getItem('product')!);
  }

  ngOnInit(): void {
  }

  public increase() {
    return this.quantity = this.quantity + 1;
  }

  public decrease() {
    return this.quantity < 2 ? this.quantity = this.quantity : this.quantity = this.quantity - 1;
  }

  public addToCart() {
    this.cartService.updateCart(this.product, this.quantity);
  }
}
