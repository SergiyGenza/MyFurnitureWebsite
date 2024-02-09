import { Component, Input, OnInit } from '@angular/core';
import { DISCOUNT } from 'src/app/common/mocks/discount';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss']
})
export class DiscountComponent implements OnInit {
  @Input() state: any;
  discont = DISCOUNT;
  background!: string | undefined;

  ngOnInit(): void {
    this.checkState();
  }

  checkState() {
    if (this.state === 'new') {
      return this.background = this.discont.newItem;
    } else if (!this.state) {
      return
    }
    return this.background = this.discont.discount;
  }
}
