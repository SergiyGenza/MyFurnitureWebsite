import { ChangeDetectionStrategy, Component, inject, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ComparisonService } from 'src/app/services/comparison.service';
import { DiscountComponent } from '../discount/discount.component';
import { NgClass, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [DiscountComponent, NgClass, RouterLink, CurrencyPipe, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  cartService = inject(CartService);
  comparisonService = inject(ComparisonService);
  public url: string | undefined = '';

  constructor() { }

  ngOnInit(): void {}

  public onCartAdding(product: Product): void {
    this.cartService.updateCart(product);
  }

  public onProductCompare(product: Product): void {
    this.comparisonService.addToCompareList(product);
  }

}
