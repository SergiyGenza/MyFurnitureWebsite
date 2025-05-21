import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/common/models/cart.model';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { SelectItemsService } from 'src/app/services/select/select-items.service';
import { AsyncPipe, CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CheckboxComponent } from '../../../shared/elements/checkbox/checkbox.component';
import { CartProductItemComponent } from '../../../shared/elements/cart-product-item/cart-product-item.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { DiscountPipe } from 'src/app/common/pipes/discount.pipe';
import { InfoTempComponent } from 'src/app/shared/info-temp/info-temp.component';
import { QuantityComponent } from 'src/app/shared/quantity/quantity.component';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
  standalone: true,
  imports: [RouterLink, CheckboxComponent, CartProductItemComponent, AsyncPipe, CurrencyPipe,
    ButtonComponent, NgTemplateOutlet, DiscountPipe, InfoTempComponent, QuantityComponent]
})
export class CartPageComponent implements OnInit {
  private readonly cartService = inject(CartService);
  private readonly selectItemsService = inject(SelectItemsService);

  public shopingCart$: Observable<Cart> = this.cartService.cartSubject$;
  public removeAll: boolean = false;

  public totalPrice$!: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.totalPrice$ = this.cartService.getTotalPrice();
  }

  public checkProductToRemoveList(cartItem: CartItemForDelete): void {
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
    this.removeAll = true;

    let list = this.selectItemsService.getProductsList();
    list.map((i: CartItem) => {
      this.cartService.removeProduct(i.product);
      this.removeAll = false;
    });
  }

  public updateProductQuantity(quantity: number, cartItem: CartItem): void {
    cartItem.quantity = quantity;
    
    // let cart: Cart = {
    //   items: cartItems,
    //   totalPrice: 0,
    //   totalItems: 0,
    // }
    this.cartService.updateProductQuantity(quantity, cartItem);
  }

  public onProductRemove(item: CartItem): void {
    this.cartService.removeProduct(item.product);
    this.selectItemsService.removeProductFromList(item);

  }
}
