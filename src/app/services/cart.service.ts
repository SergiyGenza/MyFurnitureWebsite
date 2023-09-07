import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../common/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<CartItem> | null = [];
  triger: boolean = false;

  constructor() {
  }

  public updateCart(item: any, quantity: number = 1) {
    this.setCart();
    this.checkCartProductQuantity(item, quantity);
  }

  private checkCartProductQuantity(item: any, quantity: number) {
    this.triger = false;
    this.cart?.map(i => {
      if (i.product.code == item.code) {
        i.quantity = i.quantity + quantity;
        this.triger = true;
      }
    });

    if (this.triger == false) {
      let product: CartItem = {
        product: item,
        quantity: quantity,
      }
      this.cart?.push(product);
    }
    return localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  private setCart() {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    this.cart == null ? this.cart = [] : this.cart;
  }
}
