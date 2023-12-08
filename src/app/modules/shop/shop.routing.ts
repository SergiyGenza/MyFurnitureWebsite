import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { ProductPageComponent } from './product-page/product-page.component';


const routes: Routes = [
  {
    path: 'shop',
    component: ShopPageComponent,
    data: { breadcrumb: 'shop' }
  },
  {
    path: 'shop/:key',
    component: ProductPageComponent,
    data: { breadcrumb: 'shop' }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopRoutingModule { }
