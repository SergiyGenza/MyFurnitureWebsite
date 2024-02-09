import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from 'src/app/common/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class SelectItemsService {

  private removeListSource = new Subject<any>()
  removeList$ = this.removeListSource.asObservable();
  products: CartItem[] = [];

  constructor() { }

  getProductForRemove() {
    return this.removeList$;
  }

  getProductsList() {
    return this.products;
  }

  addProduct(cartItem: CartItem) {
    if (this.products.includes(cartItem)) {
      return
    }
    this.products.push(cartItem);
    this.removeListSource.next(this.products);
  }

  addAllProduct() {

  }

  removeProductFromList(cartItem: CartItem) {
    this.products = this.products.filter((el) => {
      return el != cartItem;
    })
  }

  removeAllProduct() {

  }

}
