import { Component } from '@angular/core';
import { CONTACT } from 'src/app/common/mocks/contact';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent {
  contact = CONTACT;
}
