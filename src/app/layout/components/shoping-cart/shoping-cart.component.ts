import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, Output, EventEmitter, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';
import { Cart } from 'src/app/common/models/cart.model';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ClickStopPropagationDirective } from '../../../common/derective/click-stop-propagation.directive';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { CloseOnEscDirective } from 'src/app/common/derective/closeOnEsc.directive';
import { QuantityComponent } from 'src/app/shared/quantity/quantity.component';
import { CartProductItemComponent } from 'src/app/shared/elements/cart-product-item/cart-product-item.component';
import { CartItem } from 'src/app/common/models/cartItem';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss'],
  standalone: true,
  imports: [ClickStopPropagationDirective, RouterLink, AsyncPipe, CurrencyPipe,
    ButtonComponent, CloseOnEscDirective, QuantityComponent, CartProductItemComponent]
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
    this.totalPrice$ = this.cartService.getTotalPrice();
  }

  public onShopingCartClose(): void {
    this.isClose.emit(false);
  }

  public onProductRemove(item: Product): void {
    this.cartService.removeProduct(item);
  }

  public updateProductQuantity(quantity: number, cartItem: CartItem): void {
    cartItem.quantity = quantity;

    this.cartService.updateProductQuantity(quantity, cartItem);
  }
}
