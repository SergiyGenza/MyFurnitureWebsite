import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './modules/main/main/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    // component: MainPageComponent
    loadChildren: () => import('./modules/main/main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('./modules/shop/shop.module').then((m) => m.ShopModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
