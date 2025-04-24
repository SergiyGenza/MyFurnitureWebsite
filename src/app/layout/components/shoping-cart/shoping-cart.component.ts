import { DOCUMENT, NgIf, NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, Input, Output, EventEmitter, Inject, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';
import { Cart } from 'src/app/common/models/cart.model';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ClickStopPropagationDirective } from '../../../common/derective/click-stop-propagation.directive';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-shoping-cart',
    templateUrl: './shoping-cart.component.html',
    styleUrls: ['./shoping-cart.component.scss'],
    standalone: true,
    imports: [NgIf, ClickStopPropagationDirective, NgFor, RouterLink, AsyncPipe, CurrencyPipe]
})
export class ShopingCartComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() isClose = new EventEmitter<boolean>();
  shoping = SHOPING_CART;
  cart: Observable<Cart>;
  totalPrice: number = 0;
  subscription!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cartService: CartService,
  ) {
    this.cart = this.cartService.getCartObservable();
  }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
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
    this.subscription = this.cart.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }

}
