import { DOCUMENT, NgClass } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { HEADER_CONTENT } from 'src/app/common/mocks/header';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ShopingCartComponent } from '../components/shoping-cart/shoping-cart.component';
import { ButtonComponent } from 'src/app/shared/button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [RouterLink, NgClass, RouterLinkActive, ShopingCartComponent, ButtonComponent]
})
export class HeaderComponent {
  public readonly header = HEADER_CONTENT;
  public isOpen: boolean = false;
  public mobileMenu: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public openShopingCart(): void {
    this.document.body.classList.add('modal-window');
    this.isOpen = !this.isOpen;
  }

  public onClose(isOpen: boolean): void {
    this.isOpen = isOpen;
    this.document.body.classList.remove('modal-window');
  }

  public onMenuOpen(): void {
    this.mobileMenu = !this.mobileMenu;
  }
}
