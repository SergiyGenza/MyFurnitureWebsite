import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-product-description-item',
    templateUrl: './product-description-item.component.html',
    styleUrls: ['./product-description-item.component.scss'],
    standalone: true
})
export class ProductDescriptionItemComponent implements OnInit {
  @Input() products: any;
  @Input() comparisonTest: any;


  ngOnInit(): void {
  }

}
