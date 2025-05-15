import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sofa } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';
import { BannerComponent } from '../../../shared/banner/banner.component';
import { PostBannerComponent } from '../post-banner/post-banner.component';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  standalone: true,
  imports: [BannerComponent, PostBannerComponent, SpinnerComponent, ProductCardComponent, AsyncPipe, ButtonComponent]
})
export class MainPageComponent implements OnInit {
  private readonly productService = inject(ProductService);
  private readonly sofaService = inject(SofaService)
  public products: Observable<Sofa[]> | undefined;

  constructor() { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts(): void {
    this.products = this.sofaService.getAllProducts();
  }

}
