import { Component, OnInit } from '@angular/core';
import { SHOP } from 'src/app/common/mocks/shop';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {
  shop = SHOP;
  products = this.sofaService.getAllProducts();
  showSpinner: boolean = true;

  constructor(
    private sofaService: SofaService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  private getAllProducts() {
    this.products = this.sofaService.getAllProducts();
    this.products.subscribe(() => this.showSpinner = false);
  }
}
