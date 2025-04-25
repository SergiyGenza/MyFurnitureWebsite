import { Component, inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/common/models/cart.model';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { SelectItemsService } from 'src/app/services/select/select-items.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CheckboxComponent } from '../../../shared/elements/checkbox/checkbox.component';
import { CartProductItemComponent } from '../../../shared/elements/cart-product-item/cart-product-item.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  standalone: true,
  imports: [RouterLink, CheckboxComponent, CartProductItemComponent, AsyncPipe, CurrencyPipe]
})
export class CartPageComponent implements OnInit, OnDestroy, OnChanges {
  private readonly cartService = inject(CartService);
  private readonly selectItemsService = inject(SelectItemsService);

  public shopingCart$: Observable<Cart> = this.cartService.cartSubject$;
  public removeAll: boolean = false;

  public totalPrice: number = 0;
  private subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.calcTotalPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public checkProductToRemoveList(cartItem: CartItemForDelete) {
    cartItem.state
      ? this.selectItemsService.addProduct(cartItem.cartItem)
      : this.selectItemsService.removeProductFromList(cartItem.cartItem);
  }

  public checkAllToRemoveList(state: boolean, cartItems: CartItem[]): void {
    this.removeAll = state;
    state
      ? cartItems.map(el => {
        this.selectItemsService.addProduct(el);
      })
      : cartItems.map(el => {
        this.selectItemsService.removeProductFromList(el);
      })
  }

  public getProducts(): void {
    this.selectItemsService.getProductForRemove();
  }

  onProductListRemove(): void {
    let list = this.selectItemsService.getProductsList();
    list.map((i: CartItem) => {
      this.cartService.removeProduct(i.product);
    })
    this.calcTotalPrice();
  }

  public updateProductQuantity(newCartItem: CartItem, cartItems: CartItem[]): void {
    let cart: Cart = {
      items: cartItems,
      totalPrice: 0,
      totalItems: 0,
    }
    this.cartService.updateProductQuantity(cart);
  }

  public onProductRemove(item: Product): void {
    this.cartService.removeProduct(item);
    this.calcTotalPrice();
  }

  // need ref
  private calcTotalPrice(): void {
    this.totalPrice = 0;
    // debugger
    this.subscription = this.shopingCart$.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }
}
