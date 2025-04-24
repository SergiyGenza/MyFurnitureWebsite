import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { ComparisonService } from 'src/app/services/comparison.service';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { NgIf, NgFor, NgClass, AsyncPipe, CurrencyPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';

@Component({
    selector: 'app-product-page',
    templateUrl: './product-page.component.html',
    styleUrls: ['./product-page.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent, NgIf, SpinnerComponent, NgFor, NgClass, AsyncPipe, CurrencyPipe]
})
export class ProductPageComponent implements OnInit, OnDestroy {
  key: string;
  product$: Observable<Product | undefined> | undefined;
  quantity: number = 1;
  showSpinner: boolean = true;
  subscription!: Subscription;
  tab = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private comparisonService: ComparisonService,
  ) {
    this.key = this.route.snapshot.paramMap.get('key') as string;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.product$ = this.productService.getProductByName(this.key);
    this.subscription = this.product$.subscribe(() => this.showSpinner = false);
  }

  public increase() {
    if (this.quantity == 99) return
    return this.quantity = this.quantity + 1;
  }

  public decrease() {
    return this.quantity < 2 ? this.quantity = this.quantity : this.quantity = this.quantity - 1;
  }

  public addToCart(product: Product) {
    this.cartService.updateCart(product, this.quantity);
  }

  public onProductCompare(product: Product) {
    this.comparisonService.addToCompareList(product);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
