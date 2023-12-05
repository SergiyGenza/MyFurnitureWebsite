import { DOCUMENT } from '@angular/common';
import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';
import { Cart } from 'src/app/common/models/cart.model';
import { Product } from 'src/app/common/models/product.model';
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
  cart: Observable<Cart>;
  totalPrice: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cartService: CartService,
  ) {
    this.cart = this.cartService.getCartObservable();
  }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  public onShopingCartClose(): void {
    this.isOpen = !this.isOpen;
    this.isClose.emit(this.isOpen);
    this.document.body.classList.remove('modal-window');
  }

  public onProductRemove(item: Product) {
    this.cartService.removeProduct(item);
    this.calcTotalPrice();
  }

  private calcTotalPrice() {
    this.totalPrice = 0;
    this.cart.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }

}
