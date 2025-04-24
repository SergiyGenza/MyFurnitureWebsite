import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./modules/main/main.module').then((m) => m.MainModule),
    data: { breadcrumb: 'home' }
  },
  {
    path: '',
    loadChildren: () => import('./modules/shop/shop.module').then((m) => m.ShopModule),
    data: { breadcrumb: 'home' }
  },
  {
    path: '',
    loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
    data: { breadcrumb: 'home' }
  },
  {
    path: '',
    loadChildren: () => import('./modules/blog/blog.module').then((m) => m.BlogModule),
    // canActivate: [AuthService],
    data: { breadcrumb: 'home' }
  },
  {
    path: '',
    loadChildren: () => import('./modules/commerce/commerce.module').then((m) => m.CommerceModule),
    data: { breadcrumb: 'home' }
  },
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
