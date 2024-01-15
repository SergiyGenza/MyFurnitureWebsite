import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Sofa } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
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
