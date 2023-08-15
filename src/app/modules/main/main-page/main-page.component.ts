import { Component } from '@angular/core';
import { PRODUCTS } from 'src/app/common/mocks/products';
import { Product } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  // isOpen: boolean = false;
  productsArray: Array<Product> = PRODUCTS;

  constructor(
    private productService: ProductService
  ) { }

  public addProducts() {
    this.productsArray.map((p) => {
      this.productService.addProduct(p);
      debugger
    });
    console.log('works');
    
  }
}
