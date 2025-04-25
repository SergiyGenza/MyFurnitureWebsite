import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { BLOG } from 'src/app/common/mocks/blog';
import { Blog } from 'src/app/common/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from '../../../shared/spinner/spinner.component';
import { BlogCardComponent } from '../blog-card/blog-card.component';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss'],
  standalone: true,
  imports: [SpinnerComponent, BlogCardComponent, AsyncPipe]
})
export class BlogPageComponent {
  private readonly blogService = inject(BlogService);

  public readonly blog = BLOG;
  public blogArray$!: Observable<Blog[]>;

  constructor() { }

  ngOnInit(): void {
    this.blogArray$ = this.blogService.getAllBlogs();
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
