import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {

  transform(items: any, args: any[]) {

    const copy = items.slice();
    const property = args[0];
    const direction: string = args[1] ? args[1].toLowerCase() : 'asc';

    if (!property) {
      return copy;
    }
    else if (copy) {
      return _.orderBy(items, [property], [direction]);
    }
  }
}
