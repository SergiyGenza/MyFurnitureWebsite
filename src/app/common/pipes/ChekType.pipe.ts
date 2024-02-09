import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'chekType',
  standalone: true,
})
export class ChekTypePipe implements PipeTransform {

  transform(value: any): any {
    console.log("Pipe works ", typeof value);
    return typeof value;
  }

}
