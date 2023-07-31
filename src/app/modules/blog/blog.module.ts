import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPageRoutingModule } from './blog-page.routing';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogCardComponent } from './blog-card/blog-card.component';



@NgModule({
  declarations: [
    BlogPageComponent,
    BlogCardComponent,
  ],
  imports: [
    CommonModule,
    BlogPageRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
