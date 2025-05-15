import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Blog } from 'src/app/common/models/blog.model';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogCardComponent implements OnInit {
  @Input() post!: Blog;
  @Input() icon!: any;
  public url: string = '';

  constructor() { }

  ngOnInit(): void {
    this.url = this.post.title.toLowerCase();
  }
}
