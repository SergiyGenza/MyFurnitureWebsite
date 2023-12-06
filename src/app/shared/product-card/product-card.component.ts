import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ComparisonService } from 'src/app/services/comparison.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  url: string = '';
  showMenu: boolean = false;
  cartArray: any;

  constructor(
    private cartService: CartService,
    private comparisonService: ComparisonService,
  ) { }

  ngOnInit(): void {
    this.setQuarryKey();
  }

  public setProductInLocalStorage() {
    localStorage.setItem('product', JSON.stringify(this.product));
  }

  public onCartAdding(product: Product) {
    this.cartService.updateCart(product);
  }

  public onProductCompare(product: Product) {
    this.comparisonService.addToCompareList(product);
  }

  private setQuarryKey() {
    this.url = 'http://localhost:4200/shop/' + this.product.title.toLowerCase() + '-' + this.product.code;
  }
}
