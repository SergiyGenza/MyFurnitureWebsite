import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BENEFITS } from 'src/app/common/mocks/benefits';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss'],
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BenefitsComponent {
  public readonly benefits = BENEFITS;
}
