import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CHECKOUT } from 'src/app/common/mocks/checkout';
import { Cart } from 'src/app/common/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ButtonComponent } from 'src/app/shared/button/button.component';
import { DiscountPipe } from 'src/app/common/pipes/discount.pipe';
import { InfoTempComponent } from 'src/app/shared/info-temp/info-temp.component';
import { QuantityComponent } from 'src/app/shared/quantity/quantity.component';
import { CartItem } from 'src/app/common/models/cartItem';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  standalone: true,
  imports: [FormsModule, AsyncPipe, CurrencyPipe, ButtonComponent,
    ReactiveFormsModule, DiscountPipe, InfoTempComponent, QuantityComponent]
})
export class CheckoutPageComponent implements OnInit {
  private readonly cartService = inject(CartService);
  public readonly checkout = CHECKOUT;
  public shopingCart: Observable<Cart> = this.cartService.cartSubject$;
  public totalPrice$!: Observable<number>;

  public form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    company: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
    this.totalPrice$ = this.cartService.getTotalPrice();
  }

  public updateProductQuantity(quantity: number, cartItem: CartItem): void {
    cartItem.quantity = quantity;

    this.cartService.updateProductQuantity(quantity, cartItem);
  }
}
