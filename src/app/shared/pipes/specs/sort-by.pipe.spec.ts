import * as _ from 'lodash';

import {SortByPipe} from '@pipes/sort-by.pipe';

describe('SortByPipe', () => {

  const pipe: SortByPipe = new SortByPipe();

  it('should sort items by name in ASC order', () => {
    expect(pipe.transform([{name: '1'}, {name: '2'}, {name: '3'}], ['name', 'ASC'])).toEqual([{name: '1'}, {name: '2'}, {name: '3'}]);
  });

  it('should sort items by name in DESC order', () => {
    expect(pipe.transform([{name: '1'}, {name: '2'}, {name: '3'}], ['name', 'DESC'])).toEqual([{name: '3'}, {name: '2'}, {name: '1'}]);
  });

  it('should sort items by id in ASC order', () => {
    expect(pipe.transform([{id: 1}, {id: 2}, {id: 3}], ['id', 'ASC'])).toEqual([{id: 1}, {id: 2}, {id: 3}]);
  });

  it('should sort items by id in DESC order', () => {
    expect(pipe.transform([{id: 1}, {id: 2}, {id: 3}], ['id', 'DESC'])).toEqual([{id: 3}, {id: 2}, {id: 1}]);
  });

  // it('should sort items by value in ASC order', () => {
  //   expect(pipe.transform([{value: '200'}, {value: 100}, {value: '50'}], ['value', 'ASC'])).toEqual([{value: 100}, {value: '200'}, {value: '50'}]);
  // });

  // // Doesn't give me what it should be giving me. Issue can be found here https://github.com/lodash/lodash/issues/3285
  // it('should sort items by value in DESC order', () => {
  //   expect(pipe.transform([{value: '200'}, {value: 100}, {value: '50'}], ['value', 'DESC'])).toEqual([{value: '50'}, {value: '200'}, {value: 100}]);
  // });

  // it('should sort items by value in ASC order', () => {
  //   expect(_.orderBy([{value: '200'}, {value: 100}, {value: '50'}], ['value'], ['asc'])).toEqual([{value: 100}, {value: '200'}, {value: '50'}]);
  // });

  // // Doesn't give me what it should be giving me. Issue can be found here https://github.com/lodash/lodash/issues/3285
  // it('should sort items by value in DESC order', () => {
  //   expect(_.orderBy([{value: '200'}, {value: 100}, {value: '50'}], ['value'], ['desc'])).toEqual([{value: '50'}, {value: '200'}, {value: 100}]);
  // });
});
