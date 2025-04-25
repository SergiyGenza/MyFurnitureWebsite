import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    children: [
      // home
      {
        path: 'home',
        loadComponent: () => import('./modules/main/main-page/main-page.component').then(c => c.MainPageComponent),
        data: { breadcrumb: 'home' }
      },
      // shop
      {
        path: 'shop',
        loadComponent: () => import('./modules/shop/shop-page/shop-page.component').then(c => c.ShopPageComponent),
        data: { breadcrumb: 'shop' }
      },
      {
        path: 'shop/:key',
        loadComponent: () => import('./modules/shop/product-page/product-page.component').then(c => c.ProductPageComponent),
        data: { breadcrumb: 'shop' }
      },
      // blog
      {
        path: 'blog',
        loadComponent: () => import('./modules/blog/blog-page/blog-page.component').then(c => c.BlogPageComponent),
        data: { breadcrumb: 'blog' }
      },
      {
        path: 'blog/:key',
        loadComponent: () => import('./modules/blog/blog-item/blog-item.component').then(c => c.BlogItemComponent),
        data: { breadcrumb: 'blog' }
      },
      {
        path: 'contact',
        loadComponent: () => import('./modules/contact/contact-page/contact-page.component').then((с) => с.ContactPageComponent),
        data: { breadcrumb: 'contact' }
      },
      // commerce
      {
        path: 'cart',
        loadComponent: () => import('./modules/commerce/cart-page/cart-page.component').then((с) => с.CartPageComponent),
        data: { breadcrumb: 'cart' }
      },
      {
        path: 'comparison',
        loadComponent: () => import('./modules/commerce/comparison-page/comparison-page.component').then((с) => с.ComparisonPageComponent),
        data: { breadcrumb: 'comparison' }
      },
      {
        path: 'checkout',
        loadComponent: () => import('./modules/commerce/checkout-page/checkout-page.component').then((с) => с.CheckoutPageComponent),
        data: { breadcrumb: 'checkout' }
      },
      // auth
      {
        path: 'auth',
        loadComponent: () => import('./modules/auth/auth/auth.component').then((с) => с.AuthComponent),
      },
      {
        path: 'sign-up',
        loadComponent: () => import('./modules/auth/sign-up/sign-up.component').then((с) => с.SignUpComponent),
      },
    ],
    data: { breadcrumb: 'home' }
  },
  { path: '**', redirectTo: '/home' },
];
