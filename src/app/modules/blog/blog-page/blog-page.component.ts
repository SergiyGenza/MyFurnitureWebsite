import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BLOG } from 'src/app/common/mocks/blog';
import { Blog } from 'src/app/common/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
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
