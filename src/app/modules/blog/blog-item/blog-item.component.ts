import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BLOG } from 'src/app/common/mocks/blog';
import { Blog } from 'src/app/common/models/blog.model';
import { BlogService } from 'src/app/services/blog/blog.service';
import { AsyncPipe } from '@angular/common';
import { SpinnerComponent } from 'src/app/shared/spinner/spinner.component';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss'],
  standalone: true,
  imports: [AsyncPipe, SpinnerComponent]
})
export class BlogItemComponent implements OnInit {
  private readonly blogService = inject(BlogService);

  public readonly b = BLOG;
  private key: string;
  public blog$!: Observable<Blog | undefined>;

  constructor(
    private route: ActivatedRoute,
  ) {
    this.key = this.route.snapshot.paramMap.get('key') as string;
  }

  ngOnInit(): void {
    this.blog$ = this.blogService.getBlogByName(this.key);
  }
}
