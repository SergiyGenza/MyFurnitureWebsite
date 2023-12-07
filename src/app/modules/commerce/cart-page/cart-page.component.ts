import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/common/models/cart.model';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  shopingCart$!: Observable<Cart>;
  totalPrice: number = 0;
  subscription!: Subscription;

  constructor(
    private cartService: CartService,
  ) {
    this.shopingCart$ = cartService.cartSubject$;
  }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onProductRemove(item: Product) {
    this.cartService.removeProduct(item);
    this.calcTotalPrice();
  }

  private calcTotalPrice() {
    this.totalPrice = 0;
    this.subscription = this.shopingCart$.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }
}
