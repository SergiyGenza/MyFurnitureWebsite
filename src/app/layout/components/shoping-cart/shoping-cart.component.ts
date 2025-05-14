import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';
import { Cart } from 'src/app/common/models/cart.model';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ClickStopPropagationDirective } from '../../../common/derective/click-stop-propagation.directive';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
  standalone: true,
  imports: [ClickStopPropagationDirective, RouterLink, AsyncPipe, CurrencyPipe, ButtonComponent]
})
export class ShopingCartComponent implements OnInit {
  @Output() isClose = new EventEmitter<boolean>();

  public readonly cartService = inject(CartService);
  public readonly shoping = SHOPING_CART;
  public totalPrice$!: Observable<number>;
  public cart$: Observable<Cart>;

  constructor() {
    this.cart$ = this.cartService.getCartObservable();
  }

  ngOnInit(): void {
    this.totalPrice$ = this.cart$.pipe(
      map((c) => {
        let total = 0
        c.items.forEach(p => {
          total += p.product.price * p.quantity;
        })
        return total;
      })
    )
  }

  public onShopingCartClose(): void {
    this.isClose.emit(false);
  }

  public onProductRemove(item: Product): void {
    this.cartService.removeProduct(item);
  }
}
