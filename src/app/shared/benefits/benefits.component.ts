import { Component } from '@angular/core';
import { BENEFITS } from 'src/app/common/mocks/benefits';
@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {

  benefits = BENEFITS;
}
