import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, CurrencyPipe } from '@angular/common';
import { ComparisonToolComponent } from '../comparison-tool/comparison-tool.component';

@Component({
    selector: 'app-comparison-head',
    templateUrl: './comparison-head.component.html',
    styleUrls: ['./comparison-head.component.scss'],
    standalone: true,
    imports: [RouterLink, NgIf, ComparisonToolComponent, NgFor, CurrencyPipe]
})
export class ComparisonHeadComponent {
  @Input() comparisonTest: any;
  @Input() products: any;
  isOpen: boolean = false;

  public onCompareToolOpen() {
    this.isOpen = !this.isOpen;
  }

}
