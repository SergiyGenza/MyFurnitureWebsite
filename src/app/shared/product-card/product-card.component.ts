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
  url: string | undefined = '';
  showMenu: boolean = false;
  cartArray: any;
  state: any;

  constructor(
    private cartService: CartService,
    private comparisonService: ComparisonService,
  ) { }

  ngOnInit(): void {
    this.setQuarryKey();
    this.hasState();
  }

  public onCartAdding(product: Product) {
    this.cartService.updateCart(product);
  }

  public onProductCompare(product: Product) {
    this.comparisonService.addToCompareList(product);
  }

  private setQuarryKey() {
    this.url = this.product.title.toLowerCase();
  }

  private hasState() {
    if (this.product!.state) {
      this.state = this.product!.state;
    }
  }
}
