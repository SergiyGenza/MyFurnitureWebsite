import { DOCUMENT } from '@angular/common';
import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';
import { CartItem } from 'src/app/common/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent implements OnInit {
  shoping = SHOPING_CART;
  @Input() isOpen: boolean = false;
  @Output() isClose = new EventEmitter<boolean>();
  cart: Array<CartItem> | null = [];
  totalPrice: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.getCart();
    this.calcTotalPrice();
    console.log(this.cart);
    
  }

  public onShopingCartClose(): void {
    this.isOpen = !this.isOpen;
    this.isClose.emit(this.isOpen);
    this.document.body.classList.remove('modal-window');
  }

  public onProducRemove(item: CartItem) {
    this.cartService.removeProduct(item);
    this.getCart();
    this.calcTotalPrice();
  }

  private getCart() {
    this.cart = this.cartService.getCart();
  }

  private calcTotalPrice() {
    this.totalPrice = 0;
    this.cart?.map(p => {
      return this.totalPrice += p.product.price * p.quantity;
    })
  }
}
