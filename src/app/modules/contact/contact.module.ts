import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { ContactRoutingModule } from './contact.routing';



@NgModule({
    imports: [
    CommonModule,
    ContactRoutingModule,
    ContactPageComponent,
]
})
export class ContactModule { }
