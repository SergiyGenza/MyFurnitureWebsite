import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  name: string = '';

  ngOnInit(): void {
    this.setKey();
  }

  private setKey() {
    this.name = this.product.title.toLowerCase() + '-' + this.product.code;
  }
}
