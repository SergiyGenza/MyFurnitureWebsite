import { Component, inject, OnInit } from '@angular/core';
import { COMPARISON, SOFAINFO, BEDINFO, CHARINFO, KiTCHENINFO } from 'src/app/common/mocks/comparison';
import { KeyValue, AsyncPipe, KeyValuePipe } from '@angular/common';
import { PositionTitle } from 'src/app/common/models/positionTitle';
import { ComparisonService } from 'src/app/services/comparison.service';
import { Observable } from 'rxjs';
import { Comparison } from 'src/app/common/models/comparison.model';
import { ComparisonHeadComponent } from '../comparison-head/comparison-head.component';
import { ProductDescriptionItemComponent } from '../product-description-item/product-description-item.component';

@Component({
  selector: 'app-comparison-page',
  templateUrl: './comparison-page.component.html',
  styleUrls: ['./comparison-page.component.scss'],
  standalone: true,
  imports: [ComparisonHeadComponent, ProductDescriptionItemComponent, AsyncPipe, KeyValuePipe]
})
export class ComparisonPageComponent implements OnInit {
  private readonly comparisonService = inject(ComparisonService);

  public products$!: Observable<Comparison>;
  public comparisonTest = COMPARISON;
  positionTitles: PositionTitle | undefined;

  constructor() { }

  ngOnInit(): void {
    // this.setProductsType();
    this.products$ = this.comparisonService.comparisoneSubject$;
  }

  public onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
    return 0;
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
