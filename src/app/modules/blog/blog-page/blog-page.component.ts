import { Component } from '@angular/core';
import { BLOG } from 'src/app/common/mocks/blog';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {
  blog = BLOG;
}
