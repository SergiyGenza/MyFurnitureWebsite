import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: any;
  url: string = '';
  showMenu: boolean = false;
  cartArray: any;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.setQuarryKey();
  }

  public setProductInLocalStorage() {
    localStorage.setItem('product', JSON.stringify(this.product));
  }

  public addToCart(product: any) {
    this.cartService.updateCart(product);
  }

  private setQuarryKey() {
    this.url = 'http://localhost:4200/shop/' + this.product.title.toLowerCase() + '-' + this.product.code;
  }
}
