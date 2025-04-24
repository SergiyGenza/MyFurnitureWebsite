import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-shop-filter',
    templateUrl: './shop-filter.component.html',
    styleUrls: ['./shop-filter.component.scss'],
    standalone: true
})
export class ShopFilterComponent {
  @Input() filter: any;
}
