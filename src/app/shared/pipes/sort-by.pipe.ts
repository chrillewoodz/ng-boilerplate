import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {

  transform(value: any, args: any[]) {

    const copy = value.slice();
    const property = args[0];
    const direction: string = args[1] || 'ASC';

    if (!property) {
      return copy;
    }
    else if (copy) {

      return copy.sort((a: any, b: any) => {

        if (direction === 'ASC') {
          return (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0);
        }
        else if (direction === 'DESC') {
          return (a[property] < b[property]) ? 1 : ((b[property] < a[property]) ? -1 : 0);
        }
        else {
          return (a[property] > b[property]) ? 1 : ((b[property] > a[property]) ? -1 : 0);
        }
      });
    }
  }
}