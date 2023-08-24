import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS } from 'src/app/common/mocks/products';
import { Product, Sofa } from 'src/app/common/models/product.model';
import { ProductService } from 'src/app/common/services/product.service';
import { SofaService } from 'src/app/common/services/sofa/sofa.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  // test
  productsArray: Array<Product> = PRODUCTS;

  // isOpen: boolean = false;
  products: Observable<Sofa[]> | undefined;

  constructor(
    private productService: ProductService,
    private sofaService: SofaService
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  // test
  public addProducts() {
    this.productsArray.map((p) => {
      this.productService.addProduct(p);
    });
    console.log('products added');
  }

  private getAllProducts(): Observable<Sofa[]> | undefined {
    return this.products = this.sofaService.getAllProducts();
  }
}
