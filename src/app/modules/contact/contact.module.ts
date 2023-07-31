import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactRoutingModule } from './contact.routing';



@NgModule({
  declarations: [
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,

  ]
})
export class ContactModule { }
