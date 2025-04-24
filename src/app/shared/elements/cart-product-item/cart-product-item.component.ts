import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-cart-product-item',
    templateUrl: './cart-product-item.component.html',
    styleUrls: ['./cart-product-item.component.scss'],
    standalone: true,
    imports: [CheckboxComponent, CurrencyPipe]
})
export class CartProductItemComponent {
  @Input() cartItem!: CartItem;
  @Input() remove!: boolean;
  @Output() productForRemove = new EventEmitter<any>();
  @Output() newProductQuantity = new EventEmitter<CartItem>();
  quantity!: number;
  products: any;

  constructor() { }

  public canRemove(remove: boolean) {
    this.remove = remove;
  }

  public onItemRemove(cartItem: CartItem): void {
    let item: CartItemForDelete = {
      state: this.remove,
      cartItem: cartItem,
    }
    this.productForRemove.emit(item);
    console.log(this.remove);
  }

  public increase() {
    if (this.cartItem.quantity == 99) return;
    this.cartItem.quantity = this.cartItem.quantity + 1;

    return this.newProductQuantity.emit(this.cartItem);
  }

  public decrease() {
    this.cartItem.quantity < 2
      ? this.cartItem.quantity = this.cartItem.quantity
      : this.cartItem.quantity = this.cartItem.quantity - 1;

    return this.newProductQuantity.emit(this.cartItem);
  }
}
