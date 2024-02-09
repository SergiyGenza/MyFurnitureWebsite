import { Component, OnDestroy, OnInit } from '@angular/core';
import { SHOP } from 'src/app/common/mocks/shop';
import { Observable, Subscription } from 'rxjs';
import { Sofa } from 'src/app/common/models/product.model';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit, OnDestroy {
  shop = SHOP;
  products: Observable<Sofa[]> | undefined;
  showSpinner: boolean = true;
  subscription!: Subscription;

  constructor(
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
