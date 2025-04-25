import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CHECKOUT } from 'src/app/common/mocks/checkout';
import { Cart } from 'src/app/common/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { BenefitsComponent } from '../../../shared/benefits/benefits.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  standalone: true,
  imports: [FormsModule, BenefitsComponent, AsyncPipe, CurrencyPipe]
})
export class CheckoutPageComponent implements OnInit, OnDestroy {
  private readonly cartService = inject(CartService);

  public checkout = CHECKOUT;
  public shopingCart: Observable<Cart> = this.cartService.cartSubject$;
  public totalPrice: number = 0;
  private subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    this.calcTotalPrice();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private calcTotalPrice(): void {
    this.totalPrice = 0;
    this.subscription = this.shopingCart.subscribe(c => {
      c.items.map(p => {
        return this.totalPrice += p.product.price * p.quantity;
      })
    })
  }
}
