import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ComparisonService } from 'src/app/services/comparison.service';
import { DiscountComponent } from '../discount/discount.component';
import { NgClass, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../button/button.component';
import { DiscountPipe } from 'src/app/common/pipes/discount.pipe';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [DiscountComponent, NgClass, RouterLink, CurrencyPipe, ButtonComponent, DiscountPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {
  @Input() product!: Product;

  private readonly cartService = inject(CartService);
  private readonly comparisonService = inject(ComparisonService);

  constructor() { }

  public onCartAdding(product: Product): void {
    this.cartService.updateCart(product);
  }

  public onProductCompare(product: Product): void {
    this.comparisonService.addToCompareList(product);
  }

}
