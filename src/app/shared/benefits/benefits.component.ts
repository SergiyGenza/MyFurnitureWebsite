import { Component } from '@angular/core';
import { BENEFITS } from 'src/app/common/mocks/benefits';
import { NgFor } from '@angular/common';
@Component({
    selector: 'app-benefits',
    templateUrl: './benefits.component.html',
    styleUrls: ['./benefits.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class BenefitsComponent {

  benefits = BENEFITS;
}
