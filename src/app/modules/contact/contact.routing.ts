import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactPageComponent,
    data: { breadcrumb: 'contact' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactRoutingModule { }
