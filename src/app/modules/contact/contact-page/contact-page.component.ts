import { Component } from '@angular/core';
import { CONTACT } from 'src/app/common/mocks/contact';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { NgFor } from '@angular/common';
import { BenefitsComponent } from '../../../shared/benefits/benefits.component';

@Component({
    selector: 'app-contact-page',
    templateUrl: './contact-page.component.html',
    styleUrls: ['./contact-page.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent, NgFor, BenefitsComponent]
})
export class ContactPageComponent {
  contact = CONTACT;
}
