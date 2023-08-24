import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: any;
  url: string = '';

  ngOnInit(): void {
    this.setKey();
  }

  private setKey() {
    this.url = 'http://localhost:4200/shop/' + this.product.title.toLowerCase() + '-' + this.product.code;
  }
}
