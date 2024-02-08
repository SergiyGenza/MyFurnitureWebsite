import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent implements OnInit {
  @Input() cartItem!: CartItem;
  @Input() remove!: boolean;
  @Output() productForRemove = new EventEmitter<any>();
  quantity!: number;
  products: any;

  constructor(
  ) {
  }


  ngOnInit(): void {

  }

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
    if (this.quantity == 99) return
    return this.quantity = this.quantity + 1;
  }

  public decrease() {
    return this.quantity < 2 ? this.quantity = this.quantity : this.quantity = this.quantity - 1;
  }
}
