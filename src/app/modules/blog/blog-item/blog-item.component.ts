import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BLOG } from 'src/app/common/mocks/blog';
import { Blog } from 'src/app/common/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  standalone: true,
  imports: [BreadcrumbComponent, AsyncPipe, SpinnerComponent]
})
export class BlogItemComponent implements OnInit {
  private readonly blogService = inject(BlogService);

  b = BLOG;
  key: string;
  blog$!: Observable<Blog | undefined>;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.key = this.route.snapshot.paramMap.get('key') as string;
  }

  ngOnInit(): void {
    this.blog$ = this.blogService.getBlogByName(this.key);
  }
}
