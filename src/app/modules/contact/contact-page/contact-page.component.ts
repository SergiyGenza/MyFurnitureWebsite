import { Component } from '@angular/core';
import { CONTACT } from 'src/app/common/mocks/contact';
import { BenefitsComponent } from '../../../shared/benefits/benefits.component';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
  standalone: true,
  imports: [BenefitsComponent]
})
export class ContactPageComponent {
  public readonly contact = CONTACT;
}
