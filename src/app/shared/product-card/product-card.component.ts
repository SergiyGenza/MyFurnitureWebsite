import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/common/models/product.model';
import { CartService } from 'src/app/services/cart.service';
import { ComparisonService } from 'src/app/services/comparison.service';
import { DiscountComponent } from '../discount/discount.component';
import { NgClass, CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
  standalone: true,
  imports: [DiscountComponent, NgClass, RouterLink, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  private readonly cartService = Inject(CartService);
  private readonly comparisonService = Inject(ComparisonService);
  public url: string | undefined = '';

  constructor() { }

  ngOnInit(): void {
    this.setQuarryKey();
  }

  public onCartAdding(product: Product): void {
    this.cartService.updateCart(product);
  }

  public onProductCompare(product: Product): void {
    this.comparisonService.addToCompareList(product);
  }

  private setQuarryKey(): void {
    this.url = this.product.title.toLowerCase();
  }
}
