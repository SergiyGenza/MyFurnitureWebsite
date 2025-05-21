import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Cart } from '../common/models/cart.model';
import { CartItem } from '../common/models/cartItem';
import { Product } from '../common/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartSubject$: BehaviorSubject<Cart>;

  constructor() {
    this.cartSubject$ = new BehaviorSubject<Cart>(this.getCartFromLocalStorage());
  }

  private updateCartState(cart: Cart): void {
    this.setCartToLocalStorage(cart);
    this.cartSubject$.next(cart);
  }

  public updateCart(item: Product, quantity: number = 1) {
    const currentCart = this.cartSubject$.value;
    let foundItem = currentCart.items.find(i => i.product.code === item.code);

    if (!foundItem) {
      this.addToCart(item, quantity);
      return;
    }

    const updatedItems = currentCart.items.map(i => {
      if (i.product.code === item.code) {
        return { ...i, quantity: i.quantity + quantity, product: item };
      }
      return i;
    });

    const newCart: Cart = { ...currentCart, items: updatedItems };
    this.updateCartState(newCart);
  }

  public addToCart(item: Product, quantity: number = 1) {
    const currentCart = this.cartSubject$.value;
    let product: CartItem = {
      quantity: quantity,
      product: item,
    };

    const existingItem = currentCart.items.find(i => i.product.code === item.code);
    if (existingItem) {
      this.updateCart(item, quantity);
      return;
    }

    const newCart: Cart = { ...currentCart, items: [...currentCart.items, product] };
    this.updateCartState(newCart);
  }

  public removeProduct(product: Product) {
    const currentCart = this.cartSubject$.value;
    const updatedItems = currentCart.items.filter(p => p.product.code !== product.code);

    const newCart: Cart = { ...currentCart, items: updatedItems };
    this.updateCartState(newCart);
  }

  public clearCart() {
    const newCart = new Cart();
    this.updateCartState(newCart);
  }

  public getCartObservable(): Observable<Cart> {
    return this.cartSubject$.asObservable();
  }

  public getCart(): Cart {
    return this.cartSubject$.value;
  }

  public updateProductQuantity(quantity: number, cartItemToUpdate: CartItem) {
    const currentCart = this.cartSubject$.value;
    const updatedItems = currentCart.items.map(item => {
      if (item.product.code === cartItemToUpdate.product.code) {
        return { ...item, quantity: quantity };
      }
      return item;
    });
    const newCart: Cart = { ...currentCart, items: updatedItems };

    this.updateCartState(newCart);
  }

  public getTotalPrice(): Observable<number> {
    return this.cartSubject$.asObservable().pipe(
      map((c) => {
        let total = 0;
        c.items.forEach(p => {
          total += this.calcTotalPrice(p.product.price, p.product.discount, p.quantity);
        });
        return total;
      })
    );
  }

  private calcTotalPrice(price: number, discount: number | undefined, quantity: number): number {
    if (discount) return (price - (price / 100 * discount!)) * quantity;
    return price * quantity;
  }

  private setCartToLocalStorage(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private getCartFromLocalStorage(): Cart {
    let cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
} 