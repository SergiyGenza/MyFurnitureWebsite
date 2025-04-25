import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-description-item',
  templateUrl: './product-description-item.component.html',
  styleUrls: ['./product-description-item.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDescriptionItemComponent {
  @Input() public products: any;
  @Input() public comparisonTest: any;
}
