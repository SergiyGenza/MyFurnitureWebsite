import { DOCUMENT } from '@angular/common';
import { Component, Input, Output, EventEmitter, Inject } from '@angular/core';
import { SHOPING_CART } from 'src/app/common/mocks/shoping-cart';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.scss']
})
export class ShopingCartComponent   {
  shoping = SHOPING_CART;
  @Input() isOpen: boolean = false;
  @Output() isClose = new EventEmitter<boolean>();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  onShopingCartClose(): void {
    this.isOpen = !this.isOpen;
    this.isClose.emit(this.isOpen);
    this.document.body.classList.remove('modal-window');
  }
}
