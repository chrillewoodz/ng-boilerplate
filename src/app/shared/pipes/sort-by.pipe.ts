import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

class IArgs {
  toLowerCase: () => string;
}

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {

  transform<I, A extends IArgs>(items: I[], args: A[]) {

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
