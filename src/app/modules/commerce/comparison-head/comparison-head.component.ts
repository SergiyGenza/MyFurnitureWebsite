import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { ComparisonToolComponent } from '../comparison-tool/comparison-tool.component';

@Component({
  selector: 'app-comparison-head',
  templateUrl: './comparison-head.component.html',
  styleUrls: ['./comparison-head.component.scss'],
  standalone: true,
  imports: [RouterLink, ComparisonToolComponent, CurrencyPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComparisonHeadComponent {
  @Input() public comparison: any;
  @Input() public products: any;
  public isOpen: boolean = false;
}
