import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'numeric',
  pure: false
})

export class NumericPipe implements PipeTransform {

  transform(value: any) {

    const isNumeric = (n: any) => n === '-' || !isNaN(parseFloat(n)) && isFinite(n);

    return new String(isNumeric(value) ? value : (value || '').slice(0, -1));
  }
}
