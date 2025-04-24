import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/common/models/blog.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent implements OnInit {
  @Input() post!: Blog;
  @Input() icon!: any;
  public url: string = '';

  constructor() { }

  ngOnInit(): void {
    this.setQuarryKey();
  }

  private setQuarryKey(): void {
    this.url = this.post.title.toLowerCase();
    console.log(this.url);
  }
}
