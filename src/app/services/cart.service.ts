import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Cart } from '../common/models/cart.model';
import { CartItem } from '../common/models/cartItem';
import { Product } from '../common/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  public cartSubject$: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  public updateCart(item: Product, quantity: number = 1) {
    let result = this.cart.items.find(i => {
      return i.product.code == item.code;
    })

    if (!result) {
      return this.addToCart(item);
    }

    this.cart.items.map(i => {
      if (i.product.code == item.code) {
        i.quantity = i.quantity + quantity;
        i.product = item;
      }
    })
    this.setCartToLocalStorage(this.cart);
    return
  }

  public addToCart(item: Product, quantity: number = 1) {
    let product: CartItem = {
      quantity: quantity,
      product: item,
    }
    this.cart.items!.push(product);
    this.setCartToLocalStorage(this.cart);
  }

  public removeProduct(product: Product) {
    this.cart.items = this.cart.items!.filter(p => {
      return p.product !== product;
    });
    this.setCartToLocalStorage(this.cart);
    this.cartSubject$.next(this.cart);
  }

  public clearCart() {
    this.cart = new Cart;
    this.setCartToLocalStorage(this.cart);
  }

  public getCartObservable(): Observable<Cart> {
    return this.cartSubject$.asObservable();
  }

  public getCart() {
    return this.cartSubject$.value;
  }

  public updateProductQuantity(cart: Cart) {
    this.setCartToLocalStorage(cart);
  }

  public getTotalPrice(): Observable<number> {
    let cart$ = this.getCartObservable();
    return cart$.pipe(
      map((c) => {
        let total = 0
        c.items.forEach(p => {
          total += this.calcTotalPrice(p.product.price, p.product.discount, p.quantity);
        })
        return total;
      })
    )
  }

  private calcTotalPrice(price: number, discount: number | undefined, quantity: number): number {
    if (discount) return (price - (price / 100 * discount!)) * quantity;
    return price * quantity;
  }

  private setCartToLocalStorage(item: Cart) {
    localStorage.setItem('cart', JSON.stringify(item));
  }

  private getCartFromLocalStorage(): Cart {
    let cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }

}
