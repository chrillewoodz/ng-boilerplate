import * as _ from 'lodash';

export function IsDefined<T>(val: T): boolean {
  return val !== undefined && val !== null;
};

export function GetUniqueID(): string {

  let d: number = Date.now();

  if (window.performance && typeof window.performance.now === 'function') {
    d += performance.now();
  }

  const id: string = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {

    const r: number = (d + Math.random() * 16) % 16 | 0;

    d = Math.floor(d / 16);

    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });

  return id;
};

export function GetSortedList(list: any[], key: string): any[] {

  return _.sortBy(list, (o) => {
    return o[key];
  });
};

export function FindObjectByQuery<T>(list: T[], key: string, query: string, isCaseSensitive = false): T {

  return _.find(list, (item) => {

    if (!isCaseSensitive) {
      return String(item[key]).toLowerCase() === String(query).toLowerCase();
    }

    return item[key] === query;
  });
};

export function FindObjectIndex<O, K extends keyof O>(list: O[], obj: O, key: K, isCaseSensitive = false): number {

  return _.findIndex(list, (item: O) => {

    if (!isCaseSensitive) {
      return String(obj[key]).toLowerCase() === String(item[key]).toLowerCase();
    }

    return obj[key] === item[key];
  });
};
