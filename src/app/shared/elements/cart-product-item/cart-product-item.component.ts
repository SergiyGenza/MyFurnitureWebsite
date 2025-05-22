import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CartItem, CartItemForDelete } from 'src/app/common/models/cartItem';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { CurrencyPipe } from '@angular/common';
import { DiscountPipe } from 'src/app/common/pipes/discount.pipe';
import { ButtonComponent } from '../../button/button.component';
import { Product } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-cart-product-item',
  templateUrl: './cart-product-item.component.html',
  styleUrls: ['./cart-product-item.component.scss'],
  standalone: true,
  imports: [CheckboxComponent, CurrencyPipe, DiscountPipe, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartProductItemComponent {
  @Input({ required: true }) cartItem!: CartItem;
  @Input() checkbox!: boolean;
  @Input() remove!: boolean;
  @Input() removeBtn: boolean = false;
  @Output() productForRemove = new EventEmitter<any>();
  @Output() newProductQuantity = new EventEmitter<CartItem>();
  @Output() removeProduct = new EventEmitter<Product>();

  public quantity!: number;
  public products: any;

  constructor() { }

  public canRemove(remove: boolean): void {
    this.remove = remove;
  }

  public onItemRemove(cartItem: CartItem): void {
    let item: CartItemForDelete = {
      state: this.remove,
      cartItem: cartItem,
    }
    this.productForRemove.emit(item);
  }

  public increase(): void {
    if (this.cartItem.quantity == 99) return;
    this.cartItem.quantity = this.cartItem.quantity + 1;

    this.newProductQuantity.emit(this.cartItem);
  }

  public decrease(): void {
    this.cartItem.quantity < 2
      ? this.cartItem.quantity = this.cartItem.quantity
      : this.cartItem.quantity = this.cartItem.quantity - 1;

    this.newProductQuantity.emit(this.cartItem);
  }

  public onProductRemove(product: Product): void {
    this.removeProduct.emit(product);
  }
}
