import { Component } from '@angular/core';
import { POST_BANNER } from 'src/app/common/mocks/post-banner';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-post-banner',
    templateUrl: './post-banner.component.html',
    styleUrls: ['./post-banner.component.scss'],
    standalone: true,
    imports: [NgFor]
})
export class PostBannerComponent {
  post = POST_BANNER
}
