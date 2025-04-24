import { Component } from '@angular/core';
import { FOOTER } from 'src/app/common/mocks/footer';
import { HEADER_CONTENT } from 'src/app/common/mocks/header';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [NgFor, RouterLink]
})
  export class FooterComponent {
    header = HEADER_CONTENT;
    footer = FOOTER;
  }
