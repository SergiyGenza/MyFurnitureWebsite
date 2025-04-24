import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CHECKOUT } from 'src/app/common/mocks/checkout';
import { Cart } from 'src/app/common/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor, AsyncPipe, CurrencyPipe } from '@angular/common';
import { BenefitsComponent } from '../../../shared/benefits/benefits.component';

@Component({
    selector: 'app-checkout-page',
    templateUrl: './checkout-page.component.html',
    styleUrls: ['./checkout-page.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent, FormsModule, NgIf, NgFor, BenefitsComponent, AsyncPipe, CurrencyPipe]
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  checkout = CHECKOUT;
  shopingCart!: Observable<Cart>;
  totalPrice: number = 0;
  subscription!: Subscription;

  constructor(
    cartService: CartService,
  ) {
    this.shopingCart = cartService.cartSubject$;
  }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private calcTotalPrice() {
    this.totalPrice = 0;
    this.subscription = this.shopingCart.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }
}
