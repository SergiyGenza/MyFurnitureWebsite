import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ComparisonService } from 'src/app/services/comparison.service';
import { NgClass, AsyncPipe, CurrencyPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  standalone: true,
  imports: [SpinnerComponent, NgClass, AsyncPipe, CurrencyPipe]
})
export class ProductPageComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
  private readonly cartService = inject(CartService);
  private readonly comparisonService = inject(ComparisonService);

  public product$!: Observable<Product | undefined>;
  public quantity: number = 1;
  public tab = 1;
  private readonly key: string;

  constructor() {
    this.key = this.route.snapshot.paramMap.get('key') as string;
  }

  ngOnInit(): void {
    this.product$ = this.productService.getProductByName(this.key);
  }

  public increase(): number {
    return this.quantity === 99
      ? this.quantity
      : this.quantity = this.quantity + 1;
  }

  public decrease(): number {
    return this.quantity < 2
      ? this.quantity = this.quantity
      : this.quantity = this.quantity - 1;
  }

  public addToCart(product: Product): void {
    this.cartService.updateCart(product, this.quantity);
  }

  public onProductCompare(product: Product): void {
    this.comparisonService.addToCompareList(product);
  }
}
