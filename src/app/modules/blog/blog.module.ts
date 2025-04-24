import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogPageRoutingModule } from './blog-page.routing';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogItemComponent } from './blog-item/blog-item.component';



@NgModule({
    imports: [
    CommonModule,
    BlogPageRoutingModule,
    BlogPageComponent,
    BlogCardComponent,
    BlogItemComponent
]
})
export class BlogModule { }
