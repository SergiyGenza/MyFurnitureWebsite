import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/common/models/cart.model';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { SelectItemsService } from 'src/app/services/select/select-items.service';
import { NgIf, NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { RouterLink } from '@angular/router';
import { CheckboxComponent } from '../../../shared/elements/checkbox/checkbox.component';
import { CartProductItemComponent } from '../../../shared/elements/cart-product-item/cart-product-item.component';

@Component({
    selector: 'app-cart-page',
    templateUrl: './cart-page.component.html',
    styleUrls: ['./cart-page.component.scss'],
    standalone: true,
    imports: [NgIf, BreadcrumbComponent, NgFor, RouterLink, CheckboxComponent, CartProductItemComponent, AsyncPipe, CurrencyPipe]
})
export class CartPageComponent implements OnInit, OnDestroy, OnChanges {
  shopingCart$!: Observable<Cart>;
  subscription!: Subscription;

  totalPrice: number = 0;
  quantity: number = 1;

  removeAll: boolean = false;
  removeItemsArray: any;

  constructor(
    private cartService: CartService,
    private selectItemsService: SelectItemsService,

  ) {
    this.shopingCart$ = cartService.cartSubject$;
    this.removeItemsArray = selectItemsService.getProductForRemove();
  }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.calcTotalPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  checkProductToRemoveList(cartItem: CartItemForDelete) {
    cartItem.state
      ? this.selectItemsService.addProduct(cartItem.cartItem)
      : this.selectItemsService.removeProductFromList(cartItem.cartItem);
  }

  checkAllToRemoveList(state: boolean, cartItems: CartItem[]) {
    this.removeAll = state;
    state
      ? cartItems.map(el => {
        this.selectItemsService.addProduct(el);
      })
      : cartItems.map(el => {
        this.selectItemsService.removeProductFromList(el);
      })
  }

  getProducts() {
    this.selectItemsService.getProductForRemove();
  }

  onProductListRemove() {
    let list = this.selectItemsService.getProductsList();
    list.map((i: CartItem) => {
      this.cartService.removeProduct(i.product);
    })
    this.calcTotalPrice();
  }

  updateProductQuantity(newCartItem: CartItem, cartItems: CartItem[]) {
    let cart: Cart = {
      items: cartItems,
      totalPrice: 0,
      totalItems: 0,
    }
    this.cartService.updateProductQuantity(cart);
  }

  public onProductRemove(item: Product) {
    this.cartService.removeProduct(item);
    this.calcTotalPrice();
  }

  private calcTotalPrice() {
    this.totalPrice = 0;
    // debugger
    this.subscription = this.shopingCart$.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }
}
