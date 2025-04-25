import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DISCOUNT } from 'src/app/common/mocks/discount';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
  standalone: true,
  imports: [NgStyle],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountComponent implements OnInit {
  @Input() state: any;
  public readonly discont = DISCOUNT;
  public background!: string;

  ngOnInit(): void {
    this.checkState();
  }

  // need ref
  checkState() {
    if (this.state === 'new') {
      return this.background = this.discont.newItem;
    } else if (!this.state) {
      return
    }
    return this.background = this.discont.discount;
  }
}
