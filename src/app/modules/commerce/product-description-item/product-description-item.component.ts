import { Component, Input, OnInit } from '@angular/core';
import { Product, Sofa } from 'src/app/common/models/product.model';

@Component({
  selector: 'app-product-description-item',
  templateUrl: './product-description-item.component.html',
  styleUrls: ['./product-description-item.component.scss']
})
export class ProductDescriptionItemComponent implements OnInit {
  @Input() product: any;
  

  ngOnInit(): void {
    console.log(this.product.type);
  }

}
