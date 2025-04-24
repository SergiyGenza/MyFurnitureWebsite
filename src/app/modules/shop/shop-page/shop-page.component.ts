import { Component, inject, OnInit } from '@angular/core';
import { SHOP } from 'src/app/common/mocks/shop';
import { Observable } from 'rxjs';
import { Sofa } from 'src/app/common/models/product.model';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { ShopFilterComponent } from '../shop-filter/shop-filter.component';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';
import { BenefitsComponent } from '../../../shared/benefits/benefits.component';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent, ShopFilterComponent, SpinnerComponent, ProductCardComponent, BenefitsComponent, AsyncPipe]
})
export class ShopPageComponent implements OnInit {
  public readonly sofaService = inject(SofaService);

  public readonly shop = SHOP;
  public products: Observable<Sofa[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.products = this.sofaService.getAllProducts();
  }
}
