import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number | undefined): number {
    if (discount) return price / 100 * discount!
    return price;
  }
}
