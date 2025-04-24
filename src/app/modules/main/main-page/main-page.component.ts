import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Sofa } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';
import { BannerComponent } from '../../../shared/banner/banner.component';
import { PostBannerComponent } from '../post-banner/post-banner.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss'],
    standalone: true,
    imports: [BannerComponent, PostBannerComponent, NgIf, SpinnerComponent, NgFor, ProductCardComponent, AsyncPipe]
})
export class MainPageComponent implements OnInit, OnDestroy {
  products: Observable<Sofa[]> | undefined;
  showSpinner: boolean = true;
  subscription!: Subscription;

  constructor(
    private productService: ProductService,
    private sofaService: SofaService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.products = this.sofaService.getAllProducts();
    this.subscription = this.products.subscribe(() => this.showSpinner = false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
