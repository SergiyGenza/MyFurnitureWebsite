import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comparison-head',
  templateUrl: './comparison-head.component.html',
  styleUrls: ['./comparison-head.component.scss']
})
export class ComparisonHeadComponent {
  @Input() comparisonTest: any;
  @Input() products: any;
  isOpen: boolean = false;

  public onCompareToolOpen() {
    this.isOpen = !this.isOpen;
  }

}
