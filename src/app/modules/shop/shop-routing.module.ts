import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './shop-page/shop-page.component';

const routes: Routes = [
  {
    path: 'shop',
    component: ShopPageComponent,
    data: { breadcrumb: 'shop' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule { }
