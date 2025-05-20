import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {
  transform(price: number, discount: number | undefined, quantity: number | undefined = undefined): number {
    if (discount && quantity) return (price - (price / 100 * discount)) * quantity; 
    if (discount) return price - (price / 100 * discount);
    return price;
  }
}
