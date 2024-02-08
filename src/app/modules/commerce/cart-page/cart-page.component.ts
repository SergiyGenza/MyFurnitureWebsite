import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Cart } from 'src/app/common/models/cart.model';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { SelectItemsService } from 'src/app/services/select/select-items.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit, OnDestroy {
  shopingCart$!: Observable<Cart>;
  totalPrice: number = 0;
  subscription!: Subscription;
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
    this.removeItemsArray.subscribe((e: any) => console.log(e))
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addProductToRemoveList(item: CartItemForDelete) {
    item.state
      ? this.selectItemsService.addProduct(item.cartItem)
      : this.selectItemsService.removeProductFromList(item.cartItem);
  }

  setRemoveAll(state: boolean, cartItems: CartItem[]) {
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
