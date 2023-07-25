import { Component } from '@angular/core';
import { HEADER_CONTENT } from 'src/app/common/mocks/header';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
  export class FooterComponent {
    header = HEADER_CONTENT;
  }
