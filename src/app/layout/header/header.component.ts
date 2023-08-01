import { Component } from '@angular/core';
import { HEADER_CONTENT } from 'src/app/common/mocks/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  header = HEADER_CONTENT;
  isOpen: boolean = false;

  openShopingCart() {
    return this.isOpen = !this.isOpen;
  }

  onClose(isClose: boolean) {
    this.isOpen = isClose;
  }
}
