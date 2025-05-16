import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiscountComponent implements OnInit {
  @Input() state: 'new' | undefined;
  @Input() discount: number | undefined;

  public bgColor!: string

  ngOnInit(): void {
    this.bgColor = this.state === 'new' ? '#2EC1AC' : '#E97171';
  }
}
