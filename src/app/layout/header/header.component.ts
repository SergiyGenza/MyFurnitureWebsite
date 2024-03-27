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
  mobileMenu: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public openShopingCart(): void {
    this.document.body.classList.add('modal-window');
    this.isOpen = !this.isOpen;
  }

  public onClose(isOpen: boolean) {
    this.isOpen = isOpen;
  }

  public onMenuOpen(): void {
    this.mobileMenu = !this.mobileMenu;
  }
}
