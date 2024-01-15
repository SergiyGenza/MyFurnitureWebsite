import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { HEADER_CONTENT } from 'src/app/common/mocks/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header = HEADER_CONTENT;
  isOpen: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  openShopingCart() {
    this.document.body.classList.add('modal-window');
    return this.isOpen = !this.isOpen;
  }

  onClose(isOpen: boolean) {
    this.isOpen = isOpen;
  }
}
