import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CHECKOUT } from 'src/app/common/mocks/checkout';
import { Cart } from 'src/app/common/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
  checkout = CHECKOUT;
  shopingCart!: Observable<Cart>;
  totalPrice: number = 0

  constructor(
    private cartService: CartService,
  ) {
    this.shopingCart = cartService.cartSubject$;
  }

  ngOnInit(): void {
    this.calcTotalPrice()
  }

  private calcTotalPrice() {
    this.totalPrice = 0;
    this.shopingCart.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }
}
