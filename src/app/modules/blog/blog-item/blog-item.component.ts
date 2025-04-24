import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BLOG } from 'src/app/common/mocks/blog';
import { Blog } from 'src/app/common/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { BreadcrumbComponent } from '../../../shared/breadcrumb/breadcrumb.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-blog-item',
    templateUrl: './blog-item.component.html',
    styleUrls: ['./blog-item.component.scss'],
    standalone: true,
    imports: [BreadcrumbComponent, NgIf, AsyncPipe]
})
export class BlogItemComponent implements OnInit, OnDestroy {
  b = BLOG;
  key: string;
  blog$: Observable<Blog | undefined> | undefined;
  showSpinner: boolean = true;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
  ) {
    this.key = this.route.snapshot.paramMap.get('key') as string;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.blog$ = this.blogService.getBlogByName(this.key);
    this.subscription = this.blog$.subscribe(() => this.showSpinner = false);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
