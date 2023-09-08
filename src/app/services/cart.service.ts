import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../common/models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<CartItem> | null = [];

  constructor() {
  }

  // need add rxjs
  public updateCart(item: any, quantity: number = 1) {
    this.getCart();
    this.checkCartProductQuantity(item, quantity);
  }

  public getCart(): Array<CartItem> | null {
    this.cart = JSON.parse(localStorage.getItem('cart')!);
    return this.cart == null ? this.cart = [] : this.cart;
  }

  public removeProduct(product: CartItem) {
    let result: CartItem[] | undefined = this.cart?.filter(p => {
      return p !== product;
    });
    return localStorage.setItem('cart', JSON.stringify(result));
  }

  private checkCartProductQuantity(item: any, quantity: number) {
    let flag: boolean = false;
    this.cart?.map(i => {
      if (i.product.code == item.code) {
        i.quantity = i.quantity + quantity;
        flag = true;
      }
    });

    if (flag == false) {
      let product: CartItem = {
        product: item,
        quantity: quantity,
      }
      this.cart?.push(product);
    }

    return localStorage.setItem('cart', JSON.stringify(this.cart));
  }


}
