import { Component } from '@angular/core';
import { POST_BANNER } from 'src/app/common/mocks/post-banner';

@Component({
  selector: 'app-post-banner',
  templateUrl: './post-banner.component.html',
  styleUrls: ['./post-banner.component.scss'],
  standalone: true,
  imports: []
})
export class PostBannerComponent {
  public readonly post = POST_BANNER
}
