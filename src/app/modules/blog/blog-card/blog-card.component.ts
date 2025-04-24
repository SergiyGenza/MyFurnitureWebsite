import { Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/common/models/blog.model';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-card',
    templateUrl: './blog-card.component.html',
    styleUrls: ['./blog-card.component.scss'],
    standalone: true,
    imports: [RouterLink]
})
export class BlogCardComponent implements OnInit {
  @Input() post!: Blog;
  @Input() icon: any;
  url: string = '';

  constructor() { }

  ngOnInit(): void {
    this.setQuarryKey();
  }

  private setQuarryKey() {
    this.url = this.post.title.toLowerCase();
    console.log(this.url);
  }
}
