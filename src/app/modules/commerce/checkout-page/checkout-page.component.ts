import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CHECKOUT } from 'src/app/common/mocks/checkout';
import { Cart } from 'src/app/common/models/cart.model';
import { CartService } from 'src/app/services/cart.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { BenefitsComponent } from '../../../shared/benefits/benefits.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss'],
  standalone: true,
  imports: [FormsModule, BenefitsComponent, AsyncPipe, CurrencyPipe, ButtonComponent, ReactiveFormsModule]
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
}
