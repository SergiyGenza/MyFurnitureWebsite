import { Component, OnInit } from '@angular/core';
import { COMPARISON, SOFAINFO, BEDINFO, CHARINFO, KiTCHENINFO } from 'src/app/common/mocks/comparison';
import { PRODUCTS } from 'src/app/common/mocks/products';
import { KeyValue } from '@angular/common';
import { PositionTitle } from 'src/app/common/models/positionTitle';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent implements OnInit {
  products = PRODUCTS;
  comparison = COMPARISON;
  positionTitles: PositionTitle | undefined;

  constructor() {
  }

  ngOnInit(): void {
    this.setProductsType();
  }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 0;
  }

  private setProductsType() {
    switch (this.products[0].type) {
      case 'sofa':
        return this.positionTitles = SOFAINFO;
      case 'bed':
        return this.positionTitles = BEDINFO;
      case 'chair':
        return this.positionTitles = CHARINFO;
      case 'kitchen':
        return this.positionTitles = KiTCHENINFO;
      default:
        return -1;
    }
  }
}
