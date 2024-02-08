import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/common/models/cartItem';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss']
})
export class CartProductItemComponent {
  @Input() item!: CartItem;
  @Input() remove!: boolean;
  quantity!: number;
  isRemove!: boolean

  public canRemove(remove: boolean) {
    this.isRemove = remove;
  }

  public canRemoveAll(el: boolean) {
    // this.removeAll = el;
  }

  public increase() {
    if (this.quantity == 99) return
    return this.quantity = this.quantity + 1;
  }

  public decrease() {
    return this.quantity < 2 ? this.quantity = this.quantity : this.quantity = this.quantity - 1;
  }
}
