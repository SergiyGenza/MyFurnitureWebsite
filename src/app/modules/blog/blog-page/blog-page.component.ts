import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BLOG } from 'src/app/common/mocks/blog';
import { Blog } from 'src/app/common/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
    selector: 'app-blog-page',
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent, NgIf, SpinnerComponent, NgFor, BlogCardComponent, AsyncPipe]
})
export class BlogPageComponent {
  blog = BLOG;
  blogArray$: Observable<Blog[]> | undefined;
  showSpinner: boolean = true;
  subscription!: Subscription;

  constructor(
    private blogService: BlogService,
  ) {
    // this.blogArray = blogService.getAllBlogs();
  }

  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs() {
    this.blogArray$ = this.blogService.getAllBlogs();
    this.subscription = this.blogArray$.subscribe(() => this.showSpinner = false);
  }

  // addBlogs() {
  //   this.blog.posts.forEach(e => {
  //     console.log(e);
  //     let blog: Blog = {
  //       img: e.img,
  //       author: e.author,
  //       time: e.time,
  //       tag: e.tag,
  //       title: e.title,
  //       text: e.text,
  //     }
  //     this.blogService.addBlog(blog);
  //   });
  // }
}
