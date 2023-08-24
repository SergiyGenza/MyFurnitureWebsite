import { Component } from '@angular/core';
import { BENEFITS } from 'src/app/common/mocks/benefits';
import { SHOP } from 'src/app/common/mocks/shop';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent {
  shop = SHOP;
  benefits = BENEFITS;
  products = this.sofaService.getAllProducts();

  constructor(
    private sofaService: SofaService
  ) {

  }
}
