import {
  GetSortedList,
  GetUniqueID,
  FindObjectByQuery,
  FindObjectIndex,
  IsDefined
} from '@shared/utils';

describe('Utils', () => {

  it('#GetUniqueID should return a string', () => {
    expect(typeof GetUniqueID()).toBe('string');
  });

  it('#GetUniqueID should return a string of 36 characters', () => {
    expect(GetUniqueID().length).toBe(36);
  });

  it('#IsDefined should return false for null or undefined values', () => {
    expect(IsDefined(null)).toBe(false);
    expect(IsDefined(undefined)).toBe(false);
  });

  it('#IsDefined should return true for defined values', () => {
    expect(IsDefined('hello world')).toBe(true);
    expect(IsDefined('')).toBe(true);
    expect(IsDefined({})).toBe(true);
    expect(IsDefined([])).toBe(true);
    expect(IsDefined(1)).toBe(true);
    expect(IsDefined(0)).toBe(true);
    expect(IsDefined(false)).toBe(true);
  });

  it('#GetSortedList should return a sorted array of objects', () => {
    expect(GetSortedList([{id: 2}, {id: 0}, {id: 3}, {id: 1}], 'id')).toEqual([{id: 0}, {id: 1}, {id: 2}, {id: 3}]);
  });

  it('#FindObjectByQuery should find the object with an id of "2"', () => {
    expect(FindObjectByQuery([{id: '2'}, {id: '0'}, {id: '3'}, {id: '1'}], 'id', '2')).toEqual({id: '2'});
  });

  it('#FindObjectIndex should return the correct index for the given object', () => {

    const list = [
      {id: '2'},
      {id: '0'},
      {id: '3'},
      {id: '1'}
    ];

    expect(FindObjectIndex(list, {id: '2'}, 'id')).toEqual(0);
    expect(FindObjectIndex(list, {id: '3'}, 'id')).toEqual(2);
    expect(FindObjectIndex(list, {id: '0'}, 'id')).toEqual(1);
    expect(FindObjectIndex(list, {id: '1'}, 'id')).toEqual(3);
    expect(FindObjectIndex(list, {id: '4'}, 'id')).toEqual(-1);
  });
});
