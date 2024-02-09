import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogItemComponent } from './blog-item/blog-item.component';


const routes: Routes = [
  {
    path: 'blog',
    component: BlogPageComponent,
    data: { breadcrumb: 'blog' }
  },
  {
    path: 'blog/:key',
    component: BlogItemComponent,
    data: { breadcrumb: 'blog' }
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule { }
