import { Component, OnInit } from '@angular/core';
import { COMPARISON, SOFAINFO, BEDINFO, CHARINFO, KiTCHENINFO } from 'src/app/common/mocks/comparison';
import { KeyValue } from '@angular/common';
import { PositionTitle } from 'src/app/common/models/positionTitle';
import { ComparisonService } from 'src/app/services/comparison.service';
import { Observable } from 'rxjs';
import { Comparison } from 'src/app/common/models/comparison.model';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss']
})
export class ComparisonPageComponent implements OnInit {
  products$!: Observable<Comparison>;
  comparisonTest = COMPARISON;
  positionTitles: PositionTitle | undefined;
  isOpen: boolean = true;

  constructor(
    private comparisonService: ComparisonService,
  ) {
  }

  ngOnInit(): void {
    // this.setProductsType();
    this.getProducts();
  }

  getProducts() {
    this.products$ = this.comparisonService.comparisoneSubject$;
  }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 0;
  }

  public onCompareToolOpen() {
    this.isOpen = !this.isOpen;
  }

  // private setProductsType() {
  //   switch (this.products[0].type) {
  //     case 'sofa':
  //       return this.positionTitles = SOFAINFO;
  //     case 'bed':
  //       return this.positionTitles = BEDINFO;
  //     case 'chair':
  //       return this.positionTitles = CHARINFO;
  //     case 'kitchen':
  //       return this.positionTitles = KiTCHENINFO;
  //     default:
  //       return -1;
  //   }
  // }
}
